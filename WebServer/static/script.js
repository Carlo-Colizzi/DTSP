document.getElementById('file-upload').addEventListener('change', function() {
    
    var loaderContainer = document.querySelector('.loader-container');
    if(loaderContainer) {
        loaderContainer.style.display = 'block';
    };

    document.getElementById('upload-form').submit();
});

