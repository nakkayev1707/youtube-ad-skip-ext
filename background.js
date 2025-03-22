setInterval(() => {
    chrome.tabs.query({ url: "*://*.youtube.com/*" }, tabs => {
        for (let tab of tabs) {
            chrome.tabs.sendMessage(tab.id, { action: 'skipAd' });
        }
    });
}, 1000);