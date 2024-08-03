chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.run) {
    console.log("Received message with text = " + msg.text);
    const header = document.querySelector("h1");
    if (header) {
      header.textContent = msg.text;
      sendResponse("Changed <h1> text to " + msg.text);
    } else {
      sendResponse("No <h1> element found.");
    }
  } else {
    sendResponse("Text message is none.");
  }
});
