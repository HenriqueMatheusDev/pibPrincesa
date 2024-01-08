document.addEventListener('DOMContentLoaded', function () {
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('myVideo');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');
    var fullscreenButton = document.getElementById('fullscreenButton');

    videoContainer.addEventListener('mouseenter', function () {
        if (video.paused) {
            playButton.style.display = 'block';
        } else {
            pauseButton.style.display = 'block';
            fullscreenButton.style.display = 'block';
        }
    });

    videoContainer.addEventListener('mouseleave', function () {
        playButton.style.display = 'none';
        pauseButton.style.display = 'none';
        fullscreenButton.style.display = 'none';
    });

    playButton.addEventListener('click', function () {
        video.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
        fullscreenButton.style.display = 'block';
    });

    pauseButton.addEventListener('click', function () {
        video.pause();
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
        fullscreenButton.style.display = 'block';
    });

    fullscreenButton.addEventListener('click', function () {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
});

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.efeito-text-topo',
{
  duration:2000,
  distance: '60px'
})

