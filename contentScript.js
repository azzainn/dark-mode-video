let darkModeEnabled = false;

function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled;
  const video = document.querySelector('video');
  document.body.style.backgroundColor = darkModeEnabled ? 'black' : '';
  if (video) {
    video.style.filter = darkModeEnabled ? 'invert(1) hue-rotate(180deg)' : '';
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleDarkMode") {
    toggleDarkMode();
  }
});
