const mobileAppDownloadTemplate = document.createElement('template');
mobileAppDownloadTemplate.innerHTML = `
<section class="mobile-app-download" id="download">
    <img src="assets/img/bg-top-2.svg" alt="Background decoration" class="bg-top">
    <img src="assets/img/bg-bot-2.svg" alt="Background decoration" class="bg-bottom">
    <div class="container">
        <div class="download-content">
            <h2 class="section-title">Download <span>Now</span></h2>
            <div class="app-logo-container">
                <img src="assets/img/mobileapp/applogo.webp" alt="Slimrate Business App" class="app-logo">
            </div>
            <p class="section-descr">Get started in minutes. Available for iOS and Android devices.</p>
            <div class="download-buttons">
                <a href="https://apps.apple.com/us/app/slimrate-business/id6651859534" target="_blank" rel="noopener noreferrer" class="badge-link">
                    <img src="assets/img/mobileapp/applematerials/Download-on-the-App-Store/US/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" class="store-badge">
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.slimrate.business" target="_blank" rel="noopener noreferrer" class="badge-link">
                    <img src="assets/img/mobileapp/googlematerials/Google Play Badge guidelines/Get it on Google Play Badges/Digital/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Get it on Google Play" class="store-badge">
                </a>
            </div>
            <p class="download-note">Free to download. Requires Slimrate POS subscription.</p>
        </div>
    </div>
</section>

<style>
.mobile-app-download {
    position: relative;
    margin-bottom: 165px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    overflow: hidden;
}

.mobile-app-download .bg-top,
.mobile-app-download .bg-bottom {
    position: absolute;
    width: 100%;
    height: auto;
    z-index: 0;
}

.mobile-app-download .bg-top {
    top: 0;
    left: 0;
}

.mobile-app-download .bg-bottom {
    bottom: 0;
    left: 0;
}

.mobile-app-download .container {
    position: relative;
    z-index: 1;
    padding: 45px 0;
    max-width: 1000px;
}

.download-content {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
}

.app-logo-container {
    margin: 20px 0;
    display: flex;
    justify-content: center;
}

.app-logo {
    width: 100px;
    height: 100px;
    border-radius: 22px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.download-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 28px 0 14px;
    flex-wrap: wrap;
}

.download-buttons .badge-link {
    display: inline-block;
    line-height: 0;
}

.download-buttons .store-badge {
    height: 60px;
    width: auto;
    display: block;
}

.download-note {
    font-size: 13px;
    color: #6c757d;
    margin-top: 20px;
}

@media (max-width: 768px) {
    .download-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .smart-download {
        font-size: 16px;
        padding: 14px 36px;
    }
}
</style>
`;

class MobileAppDownload extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(mobileAppDownloadTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("mobile-app-download", MobileAppDownload);
