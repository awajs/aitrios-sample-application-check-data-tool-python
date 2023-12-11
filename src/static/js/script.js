document.addEventListener('DOMContentLoaded', function() {
    fetchImagesAndInferences();
});

function getImagesAndInferences() {
    var deviceId = $('#deviceIdForImages').val();
    var imagePath = $('#imagePath').val();
    var numberOfImages = $('#numberOfImages').val();
    $.get("/api/getImagesAndInferences", { 
        deviceId: deviceId, 
        imagePath: imagePath,
        numberOfImages: numberOfImages 
    }, function(data) {
        displayImages(data);
    }).fail(function(error) {
        $('#imagesResult').text('Error: ' + error.responseText);
    });
}

function displayImages(data) {
    $('#imagesResult').empty(); // Clear previous results
    data.forEach(item => {
        const imageElement = $('<img>', { src: item.image });
        $('#imagesResult').append(imageElement);

        // Optionally display additional data, such as inference data and timestamp
        // For example, if you have a timestamp:
        const timestamp = $('<p>').text(`Timestamp: ${item.timestamp}`);
        $('#imagesResult').append(timestamp);

        // If there's inference data, display it
        const inferenceData = JSON.parse(item.inferenceData);
        // Create elements to display the inference data
        // ...
    });
}
