const equipCompanyTemplate2 = document.createElement('template');
equipCompanyTemplate2.innerHTML = `
<section class="equip company-equip">
            <img src="assets/img/custom-bg-2.svg" alt="Slimrate product image" class="custom-bg">
            <img src="assets/img/bg-top-1.svg" alt="Slimrate product image" class="bg-top">
            <div class="container">
                <div class="block-left">
                    <h2 class="section-title-app">NEW<br>PRODUCT</h2>
                    <h2 class="section-title">Mobile App</h2>
                    <p class="equip-text">
                        Manage your store from your phone! <br>
                        Convenient management<br>
                        and analysis with Slimrate!
                    </p>
                    <div class="store-buttons">
                      <a class="store-btn" href="https://apps.apple.com/us/app/slimrate-business/id6651859534" target="_blank">
                        <img src="assets/img/icons/appstore.svg" alt="Download on the App Store">
                      </a>
                      <a class="store-btn" href="https://play.google.com/store/apps/details?id=com.slimrate.business" target="_blank">
                        <img src="assets/img/icons/googleplay.svg" alt="Get it on Google Play">
                      </a>
                    </div>
                </div>

                <div class="phone-wrapper">
                    <img src="assets/img/icons/screens.png" alt="Slimrate mobile app preview">
                </div>
                <img src="assets/img/whiteWave.svg" class="wave-overlay" alt="">
            </div>
        </section>
`;

class NewApp extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(equipCompanyTemplate2.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("new-app", NewApp);

