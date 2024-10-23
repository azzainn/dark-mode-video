let darkModeEnabled = false;

function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled;
  const videos = document.querySelectorAll('video');
  document.body.style.backgroundColor = darkModeEnabled ? 'black' : '';
  videos.forEach(video => {
    video.style.filter = darkModeEnabled ? 'invert(1) hue-rotate(180deg)' : '';
  });

}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleDarkMode") {
    toggleDarkMode();
  }
});
