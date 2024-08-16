document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const videoPlayer = document.getElementById('video-player');
        const videoSource = document.getElementById('video-source');

        videoSource.src = URL.createObjectURL(file);
        videoPlayer.load();
        videoPlayer.play();
    }
});
