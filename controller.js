document.addEventListener('DOMContentLoaded', function() {
  var audioPlayer = document.getElementById('audioPlayer');
  var playPauseBtn = document.getElementById('playPauseBtn');
  var volumeControl = document.getElementById('volumeControl');
  var volumeIndicator = document.getElementById('volumeIndicator');
  var volumeIcon = document.getElementById('volumeIcon');

  playPauseBtn.addEventListener('click', function() {
      if (audioPlayer.paused) {
          audioPlayer.play();
          playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Change to pause icon
      } else {
          audioPlayer.pause();
          playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
      }
  });

  volumeControl.addEventListener('input', function() {
      var volume = this.value;
      volumeIndicator.innerHTML = volume + '%';
      audioPlayer.volume = volume / 100.0;
      // Change the volume icon based on the slider value
      if (volume == 0) {
        volumeIcon.className = "fas fa-volume-off";
      }
      else if (volume < 70) {
        volumeIcon.className = "fas fa-volume-down"; // Low volume
      } else {
          volumeIcon.className = "fas fa-volume-up"; // High volume
      }
  });

  // Initialize volume from slider on load
  var initialVolume = volumeControl.value;
  volumeIndicator.innerHTML = initialVolume + '%';
  audioPlayer.volume = initialVolume / 100.0;
});
