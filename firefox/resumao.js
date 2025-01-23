const youtubeUrlPattern = "youtube.com/watch?v=";
const youtube = "youtube";
const resumao = "resumao";

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0]; // active tab
    const youtubeURL = tab.url;

    if (youtubeURL.includes(youtubeUrlPattern)) {
      const resumaoURL = youtubeURL.replace(youtube, resumao);
      chrome.tabs.update(tab.id, { url: resumaoURL });
    }
  });
});
