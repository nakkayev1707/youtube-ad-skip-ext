document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("skipAd").addEventListener("click", () => {
        sendMessageToActiveTab({ action: "skipAd" });
    });
});

function sendMessageToActiveTab(msg) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            chrome.tabs.sendMessage(tabs[0].id, msg);
        }
    });
}
