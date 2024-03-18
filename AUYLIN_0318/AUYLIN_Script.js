document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("myVideo");
    const playButton = document.getElementById("playButton");
    const stopButton = document.getElementById("stopButton");

    playButton.addEventListener("click", function() {
            video.play();
    });

    stopButton.addEventListener("click", function() {
        video.pause();
});
});