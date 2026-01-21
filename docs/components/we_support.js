const weSupportTemplate = document.createElement('template');
weSupportTemplate.innerHTML = `
<section class="we-support">
            <div class="container">
                <div class="container-header">
                    <h2 class="section-title">We support</h2>
                </div>
                <div class="we-support-cards swiper">
                    <div class="we-support-swiper swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="we-support-card">
                                <div class="we-support-card__img"><img src="assets/img/support-icons/emv.svg" alt="EMV symbol">
                                </div>
                                <h4 class="we-support-card__title">EMV</h4>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="we-support-card">
                                <div class="we-support-card__img"><img src="assets/img/support-icons/apple-pay.svg" alt="Apple Pay"></div>
                                <h4 class="we-support-card__title">Apple Pay</h4>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="we-support-card">
                                <div class="we-support-card__img"><img src="assets/img/support-icons/google-pay.svg" alt="Google Pay"></div>
                                <h4 class="we-support-card__title">Google Pay</h4>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="we-support-card">
                                <div class="we-support-card__img"><img src="assets/img/support-icons/pay.svg" alt="Contactless"></div>
                                <h4 class="we-support-card__title">Pay</h4>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="we-support-card">
                                <div class="we-support-card__img"><img src="assets/img/support-icons/tap.svg" alt="Tap"></div>
                                <h4 class="we-support-card__title">Tap</h4>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="we-support-card">
                                <div class="we-support-card__img"><img src="assets/img/support-icons/dip.svg" alt="Dip"></div>
                                <h4 class="we-support-card__title">Dip</h4>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="we-support-card">
                                <div class="we-support-card__img"><img src="assets/img/support-icons/swipe.svg" alt="Swipe"></div>
                                <h4 class="we-support-card__title">Swipe</h4>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="we-support-card">
                                <div class="we-support-card__img"><img src="assets/img/support-icons/viza.svg" alt="Visa"></div>
                                <h4 class="we-support-card__title">Visa</h4>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="we-support-card">
                                <div class="we-support-card__img"><img src="assets/img/support-icons/mc.svg" alt="Mastercard"></div>
                                <h4 class="we-support-card__title">Mastercard</h4>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="we-support-card">
                                <div class="we-support-card__img"><img src="assets/img/support-icons/discover.svg" alt="Discover"></div>
                                <h4 class="we-support-card__title">Discover</h4>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="we-support-card">
                                <div class="we-support-card__img"><img src="assets/img/support-icons/ae.svg" alt="American Express"></div>
                                <h4 class="we-support-card__title">American Express</h4>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="we-support-card">
                                <div class="we-support-card__img"><img src="assets/img/support-icons/gift-card.svg" alt="Gift card"></div>
                                <h4 class="we-support-card__title">Gift Cards</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

class WeSupport extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(weSupportTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
        if (window.fixAssetPaths) window.fixAssetPaths(this);
    }
}
customElements.define("we-support", WeSupport);