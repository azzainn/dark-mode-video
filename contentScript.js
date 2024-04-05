function toggleDarkMode() {
    const video = document.querySelector('video');
    if (video) {
      video.style.filter = 'invert(1)';
    }
  }
  
toggleDarkMode();
  