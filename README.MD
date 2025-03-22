# 🎯 YouTube Ad Skipper

A lightweight Chrome extension that automatically skips or speeds up ads on YouTube.

---

### ✨ Features

- ⏩ Skips skippable ads by clicking the "Skip" button
- 🚀 Speeds up unskippable ads to 16x playback
- 🔄 Restores normal speed automatically after the ad ends
- 🔒 100% client-side — no data collection, no tracking

---

### 📦 How It Works

The extension injects a small script into YouTube pages that:
- Detects if an ad is playing
- Tries to click the "Skip Ad" button if available
- Otherwise, speeds up the video playback temporarily
- Returns to normal speed when the ad ends

---

### 🧪 How to Install (Manually in Chrome)

Until it's published to the Chrome Web Store, you can install it manually:

1. Download or clone this repository.
2. Open Google Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (top-right toggle).
4. Click **“Load unpacked”** and select the extension folder.
5. Done! You should now see the extension in your toolbar.

💡 Tip: Make sure the folder contains your `manifest.json`, `content.js`, `popup.html`, and `icons`.

---

### 🚧 Disclaimer

This extension is not affiliated with or endorsed by YouTube or Google.  
It is for educational and personal use only.

---

### 📄 License

MIT License. Feel free to fork and improve!

---

### 🙌 Contributions Welcome

Pull requests, issues, and suggestions are always welcome. Let’s make this better together!
