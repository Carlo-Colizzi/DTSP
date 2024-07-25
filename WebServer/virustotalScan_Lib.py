import time  # Import the time module for time-related operations
from virustotal_python import Virustotal  # Import the Virustotal API wrapper
from datetime import datetime  # Import datetime module for date/time operations
import markupsafe  # Import markupsafe for safe string handling

# Insert your VirusTotal API key here
API_KEY = ""

# Create an instance of the VirusTotal API with your API key
vtotal = Virustotal(API_KEY=API_KEY)

# Function to scan a file
def scan_file(file_name, file):
    files = {"file": (file_name, file)}  # Prepare the file to be sent in the request
    response = vtotal.request("files", files=files, method="POST")  # Send POST request to VirusTotal
    if response.status_code == 200:
        file_id = response.json()["data"]["id"]  # Extract the file ID from the response
        return file_id  # Return the file ID for future reference
    else:
        print('Error scanning the file:', response.json())  # Print error message if request fails
        return None  # Return None if scanning fails

# Function to get scan results of a file
def get_scan_results(file_id):
    while True:
        response = vtotal.request(f"analyses/{file_id}")  # Request scan results from VirusTotal
        if response.status_code == 200:
            response_data = response.json()  # Convert response to JSON format
            analysis_status = response_data["data"]["attributes"]["status"]
            if analysis_status == "completed":
                return response_data  # Return scan results when analysis is completed
            else:
                print('[info] Analysis in progress, waiting 20 seconds...')  # Print info message if analysis is ongoing
                time.sleep(20)  # Wait for 20 seconds before checking again
        else:
            print('Error retrieving scan results:', response.json())  # Print error message if request fails
            return None  # Return None if retrieval fails

# Function to analyze a file and format the results
def analyse_file(file_name, file):
    file_id = scan_file(file_name, file)  # Scan the file and get the file ID
    if file_id:
        results = get_scan_results(file_id)  # Get the scan results using the file ID
        if results:
            results_formatted = dict()
            results_formatted['malicious'] = results['data']['attributes']['stats']['malicious']  # Get number of malicious detections
            number_antimalware = len(results['data']['attributes']['results'])  # Get number of antivirus engines scanned
            results_formatted['numberantimalware'] = number_antimalware
            results_formatted['sha256'] = markupsafe.escape(results['meta']['file_info']['sha256'])  # Get SHA256 hash of the file
            results_formatted['MD5'] = markupsafe.escape(results['meta']['file_info']['md5'])  # Get MD5 hash of the file
            results_formatted['size'] = results['meta']['file_info']['size']  # Get file size
            current_date = datetime.now()  # Get current date and time
            results_formatted['date'] = current_date.strftime('%Y-%m-%d %H:%M:%S')  # Format date and time
            return results_formatted  # Return formatted results

# Function to get file extension
def get_file_extension(file):
    filename = file.filename
    file_extension = filename.rsplit('.', 1)[-1].lower() if '.' in filename else ''  # Extract file extension
    if file_extension == '':
        return "Unknown"  # Return "Unknown" if file extension is not found
    else:
        return file_extension  # Return file extension

