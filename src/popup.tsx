import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const Popup = () => {
  const visitRepo = () => {
    chrome.tabs.create({ url: "https://github.com/Muhammad-Sarfaraz/ChromeExtensionKit" });
  }

  return (
    <>
      <ul style={{ minWidth: "200px" }}>
        <li>Make Something Amazing</li>
      </ul>
      <button onClick={visitRepo}>Visit Repo</button>
    </>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
