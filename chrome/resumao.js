const youtubeUrlPattern = "youtube.com/watch?v=";
const youtube = "youtube";
const resumao = "resumao";

chrome.action.onClicked.addListener((tab) => {
  const youtubeURL = tab.url;

  if (youtubeURL.includes(youtubeUrlPattern)) {
    const resumaoURL = youtubeURL.replace(youtube, resumao);
    chrome.tabs.update(tab.id, { url: resumaoURL });
  } else {
    console.log("A URL não é um vídeo do YouTube.");
  }
});
