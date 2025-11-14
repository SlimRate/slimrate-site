const unitedPartnersTemplate = document.createElement('template');
unitedPartnersTemplate.innerHTML = `
<section class="united-partners">
    <img src="assets/img/coop-bg.svg" alt="" class="img-bg" />
    <img src="assets/img/bg-small-bottomcoop.svg" alt="" class="img-bg-bottom" />
    
    <div class="united-partners-scroll">
        <div class="united-partners-track">
            <!-- First set -->
            <div class="partner-logo">
                <img src="assets/img/coop-logo/img-1.svg" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/coop-logo/img-2.svg" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/coop-logo/img-3.svg" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/coop-logo/img-4.svg" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/coop-logo/pca.webp" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/apple-pay.svg" alt="Apple Pay" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/google-pay.svg" alt="Google Pay" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/viza.svg" alt="Visa" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/mc.svg" alt="Mastercard" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/discover.svg" alt="Discover" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/ae.svg" alt="American Express" />
            </div>
            
            <!-- Second set (duplicate for seamless loop) -->
            <div class="partner-logo">
                <img src="assets/img/coop-logo/img-1.svg" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/coop-logo/img-2.svg" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/coop-logo/img-3.svg" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/coop-logo/img-4.svg" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/coop-logo/pca.webp" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/apple-pay.svg" alt="Apple Pay" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/google-pay.svg" alt="Google Pay" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/viza.svg" alt="Visa" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/mc.svg" alt="Mastercard" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/discover.svg" alt="Discover" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/ae.svg" alt="American Express" />
            </div>

            <!-- Third set (for extra smooth loop) -->
            <div class="partner-logo">
                <img src="assets/img/coop-logo/img-1.svg" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/coop-logo/img-2.svg" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/coop-logo/img-3.svg" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/coop-logo/img-4.svg" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/coop-logo/pca.webp" alt="Partner logo" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/apple-pay.svg" alt="Apple Pay" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/google-pay.svg" alt="Google Pay" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/viza.svg" alt="Visa" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/mc.svg" alt="Mastercard" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/discover.svg" alt="Discover" />
            </div>
            <div class="partner-logo">
                <img src="assets/img/support-icons/ae.svg" alt="American Express" />
            </div>
        </div>
    </div>
</section>`;

class UnitedPartners extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(unitedPartnersTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("united-partners", UnitedPartners);
