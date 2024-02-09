document.addEventListener('DOMContentLoaded', function() {
  var audioPlayer = document.getElementById('audioPlayer');
  var playPauseBtn = document.getElementById('playPauseBtn');
  var volumeControl = document.getElementById('volumeControl');
  var volumeIndicator = document.getElementById('volumeIndicator');
  var volumeIcon = document.getElementById('volumeIcon');
  var sharkGraphic = document.getElementById('sharkGraphic'); // Reference to the shark graphic

  // Toggles play/pause state of the audio player
  playPauseBtn.addEventListener('click', function() {
      if (audioPlayer.paused) {
          audioPlayer.play();
          playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Change to pause icon
      } else {
          audioPlayer.pause();
          playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
      }
  });

  // Updates the volume and volume indicator based on the slider's input
  volumeControl.addEventListener('input', function() {
      var volume = this.value;
      volumeIndicator.innerHTML = volume + '%';
      audioPlayer.volume = volume / 100.0; // Convert percentage to 0-1 range for audio volume

      // Update volume icon based on the slider value
      if (volume == 0) {
          volumeIcon.className = "fas fa-volume-off";
      } else if (volume < 70) {
          volumeIcon.className = "fas fa-volume-down"; // Low volume
      } else {
          volumeIcon.className = "fas fa-volume-up"; // High volume
      }
  });

  // Initialize volume from slider on load
  volumeIndicator.innerHTML = volumeControl.value + '%';
  audioPlayer.volume = volumeControl.value / 100.0;

  // Shows the shark graphic on hover over the volume icon and applies animation
  volumeIcon.addEventListener('mouseover', function() {
      sharkGraphic.hidden = false; // Make the shark visible
      sharkGraphic.style.display = 'block'; // Ensure it's displayed
      sharkGraphic.style.animation = 'growShrink 1s infinite'; // Start the animation
  });

  // Hides the shark graphic when mouse leaves the volume icon
  volumeIcon.addEventListener('mouseout', function() {
      sharkGraphic.hidden = true; // Hide the shark
      sharkGraphic.style.display = 'none'; // Ensure it's not displayed
      sharkGraphic.style.animation = ''; // Stop the animation
  });

  // // Sets the volume when the shark is clicked
  // sharkGraphic.addEventListener('click', function(event) {
  //     event.stopPropagation(); // Prevent the click from affecting other elements

  //     // Calculate click position relative to the volumeControl's dimensions
  //     const volumeControlRect = volumeControl.getBoundingClientRect();
  //     const clickX = event.clientX;
  //     const clickPositionRelative = (clickX - volumeControlRect.left) / volumeControlRect.width;
  //     const newVolume = Math.max(0, Math.min(1, clickPositionRelative)); // Ensure the value is between 0 and 1

  //     // Set the new volume based on the click position
  //     volumeControl.value = newVolume * 100;
  //     audioPlayer.volume = newVolume;
  //     volumeIndicator.innerHTML = Math.round(newVolume * 100) + '%';
  // });
});
