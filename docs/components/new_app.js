const equipCompanyTemplate2 = document.createElement('template');
equipCompanyTemplate2.innerHTML = `
<section class="equip company-equip">
            <img src="assets/img/custom-bg-2.svg" alt="Slimrate product image" class="custom-bg">
            <img src="assets/img/bg-top-1.svg" alt="Slimrate product image" class="bg-top">
            <img src="assets/img/whiteWave.svg" alt="Slimrate product image" class="bg-bottom bg-bottom2" style="z-index: 999">
            <div class="container">
                <div class="block-left">
                    <h2 class="section-title-app">NEW<h1>
                    <h2 class="section-title-app" style="margin-bottom: 20px">PRODUCT<h1>
                    <h2 class="section-title" style="text-align: left">Mobile App <br></h2>
                    <p class="equip-text" style="text-align: left; font-size: 19px">
                        Manage your store from your phone! <br>
                        Convenient management<br>
                        and analysis with Slimrate!
                    </p>
                    <div class="equip-buttons equip-buttons2" >
                        <button class="form__btn"  onclick="
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
    " >Try NOW!</button>
                    </div>
                </div>

                <div class="block-right block-right2" style=" display: flex;justify-content: center; margin-top: 60px">
                <img src="assets/img/icons/screens.png" alt="Slimrate product image" style="height: 100%; ">
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

