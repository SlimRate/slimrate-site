const unitedPartnersTemplate = document.createElement('template');
unitedPartnersTemplate.innerHTML = `
<section class="united-partners">
    <img src="assets/img/coop-bg.svg" alt="" class="img-bg" />
    <img src="assets/img/bg-small-bottomcoop.svg" alt="" class="img-bg-bottom" />
    
    <div class="united-partners-scroll">
        <div class="united-partners-track">
            <!-- Original coop logos -->
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
            
            <!-- Duplicate for seamless loop -->
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
