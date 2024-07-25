from flask import Flask, render_template, request  # Import necessary Flask modules
import virustotalScan_Lib  # Import the custom module for VirusTotal scanning
import pprint  # Import pprint for pretty-printing dictionary
import markupsafe  # Import markupsafe for safe string handling

app = Flask(__name__)  # Create a Flask application instance

@app.route('/')
def index():
    # Render the home page with the upload form
    return render_template('template.html')

@app.route('/upload', methods=['POST'])
def upload():
    # Check if the 'file' is in the request
    if 'file' not in request.files:
        return 'File parameter not sent'  # Return an error message if 'file' is not found in the request

    file = request.files['file']  # Get the file object from the request

    # Check if the file has a name and exists
    if (file is None) or (file.filename == ''):
        return 'No selected file'  # Return an error message if no file is selected or file name is empty

    # Read the content of the file as bytes
    file_contents = file.read()

    # Analyze the file using the custom module function
    analysis_results = virustotalScan_Lib.analyse_file(file.filename, file_contents)

    # Add additional details to the analysis results
    analysis_results["type"] = markupsafe.escape(virustotalScan_Lib.get_file_extension(file))
    analysis_results["filename"] = markupsafe.escape(file.filename)

    # Print analysis results to the console
    print("[log] Analysis results: ")
    pprint.pprint(analysis_results)

    # Render the template with the analysis results
    return render_template('template.html', analysis=analysis_results)

# Run the Flask application if this script is executed directly
if __name__ == '__main__':
    app.run(debug=True)
