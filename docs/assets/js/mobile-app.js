// Mobile App Page - Smart Download Button for Hero Section
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('hero-download-btn');
    if (!btn) return;
    
    // Detect platform
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent);
    
    // Set appropriate link (text stays "Download App")
    if (isIOS || isMac) {
        btn.href = 'https://apps.apple.com/us/app/slimrate-business/id6651859534';
    } else {
        // Default for Android/Windows/Linux - show Google Play
        btn.href = 'https://play.google.com/store/apps/details?id=com.slimrate.business';
    }
    
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
});
