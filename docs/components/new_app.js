const equipCompanyTemplate2 = document.createElement('template');
equipCompanyTemplate2.innerHTML = `
<section class="equip company-equip">
            <img src="assets/img/custom-bg-2.svg" alt="Slimrate product image" class="custom-bg">
            <img src="assets/img/bg-top-1.svg" alt="Slimrate product image" class="bg-top">
            <div class="container mobile-app__layout">
                <div class="mobile-app__content">
                    <span class="mobile-app__pretitle">NEW PRODUCT</span>
                    <h2 class="mobile-app__title">Mobile&nbsp;App</h2>
                    <p class="mobile-app__description">
                        Manage your store from your phone. Convenient management and analysis with Slimrate.
                    </p>
                    <div class="mobile-app__actions">
                        <button class="btn-red mobile-app__cta"  onclick="
        (function() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            if (/android/i.test(userAgent)) {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.slimrate.business'; 
            } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                window.location.href = 'https://apps.apple.com/us/app/slimrate-business/id6651859534';
            } else {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.slimrate.business'; 
            }
        })();
    " >Try Now!</button>
                    </div>
                </div>

                <div class="mobile-app__visual">
                    <div class="mobile-app__media-card">
                        <img src="assets/img/icons/screens.png" alt="Slimrate mobile app preview">
                        <span class="mobile-app__play-icon" aria-hidden="true">&#9658;</span>
                    </div>
                </div>
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

