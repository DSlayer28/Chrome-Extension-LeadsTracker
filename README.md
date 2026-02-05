# Chrome Extension — LeadsTracker

A simple **Chrome extension** that lets you save and organize links (leads) while browsing.  
This is a lightweight lead tracker built with plain **HTML, CSS, and JavaScript** — no frameworks, no build step.

## 🚀 What it does

- Save the **current tab’s URL** with one click.
- Manually **add any link** via input.
- Store all leads in **local storage** so they persist between sessions.
- Quickly view and click saved links in the popup.

This is ideal as a learning project or a basic tool for collecting important links while you browse.

> This project has no published release yet but works locally as an unpacked extension.

## 📁 Project structure

📦Chrome-Extension-LeadsTracker
┣ 📜manifest.json
┣ 📜index.html
┣ 📜styles.css
┣ 📜script.js
┗ 📜icon.png

markdown
Copy code

## 🧠 Tech stack

- HTML (extension UI)  
- CSS (styling)  
- JavaScript (logic and Chrome API usage)  
- Chrome Extension Manifest V3

## 📦 Installation (local unpacked extension)

1. Clone this repo:

   ```bash
   git clone https://github.com/DSlayer28/Chrome-Extension-LeadsTracker.git
Open Chrome and go to:

arduino
Copy code
chrome://extensions
Enable Developer mode (toggle in top right).

Click Load unpacked and select this project folder.

You should now see the LeadsTracker icon in the toolbar.

🧩 How to use
Click the toolbar icon to open the extension popup.

To save the current tab’s URL, click Save Tab.

To save any link manually, paste it into the input field and click Save Input.

To clear all saved leads, double-click Delete All.

Saved links will remain available even after closing Chrome because they are stored in local storage.

🔧 Notes for improvement
Right now this project:

Has no options page or persistent sync across devices.

Only stores links as plain text — no titles or metadata.

Uses local storage, not indexedDB or backend storage.

If you want to expand it, consider:

Adding link metadata (title, notes).

Using Chrome storage sync.

Export/import leads as CSV/JSON.

📜 Manifest (info)
This extension uses Manifest V3 and requests only:

json
Copy code
"permissions": [
  "tabs"
]
to read the current active tab’s URL.
