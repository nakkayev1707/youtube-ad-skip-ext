function trySkipAd() {
    const skipButton = document.querySelector('.ytp-skip-ad-button');
    const video = document.querySelector('video');
    if (skipButton && !skipButton.disabled) {
        console.log('🎯 Skipping...');
        skipButton.click();
        video.playbackRate = 16;
        video.currentTime = video.duration;
    }
}


chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'skipAd') trySkipAd();
});