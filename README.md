## Overview

Overview
The Chrome Extension Kit is a lightweight, simple-to-use Chrome extension that adds a context menu item for quick navigation to a designated URL. This project serves as a basic example for creating Chrome extensions with custom context menu actions.

##
## Features

Features
- **Context Menu Item**: Adds a context menu item "Go to Fun" that appears on right-click.
- **Quick Navigation**: The context menu item redirects the user to "https://www.google.com" when clicked.

##
## Installation Instructions

Installation Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Muhammad-Sarfaraz/ChromeExtensionKit.git
   cd ChromeExtensionKit
   ```

2. **Load the Extension into Chrome**
   - Open Google Chrome.
   - Navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click on "Load unpacked".
   - Select the directory where you cloned the repository.

##
## Usage Examples

Usage Examples

Once the extension is installed and enabled:

1. Right-click anywhere on a webpage.
2. In the context menu, you will see an option titled "Go to Fun".
3. Click on "Go to Fun".
4. You will be redirected to "https://www.google.com".

##
## Code Summary

Code Summary

The core functionality of the extension is provided by the `background.js` file, which contains the following code:

```javascript
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
```

- **Event Listener (onInstalled)**: When the extension is installed, it creates a context menu item with the title "Go to Fun".
- **Event Listener (onClicked)**: When the context menu item is clicked, it navigates the current tab to "https://www.google.com".

##
## License

License
This project is licensed under the MIT License. You are free to use, modify, and distribute this software in compliance with the license terms.
```

This README provides a comprehensive overview and includes detailed information about installation, usage, code structure, and licensing for the Chrome Extension Kit project.