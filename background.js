// will be removed most likely as all we need is in content.js
setInterval(() => {
    chrome.tabs.query({ url: "*://*.youtube.com/*" }, tabs => {
        for (let tab of tabs) {
            chrome.tabs.sendMessage(tab.id, { action: 'skipAd' }, response => {
                if (chrome.runtime.lastError) {
                    console.warn("Message failed:", chrome.runtime.lastError.message);
                }
            });
        }
    });
}, 1000);