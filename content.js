function trySkipAd() {
    const skipButton = document.querySelector('.ytp-skip-ad-button');
    const video = document.querySelector('video');
    if (skipButton && !skipButton.disabled) {
        console.log('🎯 Skipping...');
        skipButton.click();
        video.playbackRate = 16;
        try {
            video.currentTime = video.duration;
        } catch (e) {
            console.log(e)
        }
    }
}
// to skip also if background.js is not alive (automatically shut down by the browser when idle)
setInterval(() => {
    trySkipAd()
}, 1000);


chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'skipAd') trySkipAd();
});