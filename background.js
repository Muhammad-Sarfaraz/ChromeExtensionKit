chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "goToFun",
    title: "Go to Fun",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "goToFun") {
    chrome.tabs.update({ url: "https://www.google.com" });
  }
});