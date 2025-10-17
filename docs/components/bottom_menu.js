const bottomMenuTemplate = document.createElement('template');
bottomMenuTemplate.innerHTML = `
<footer class="footer">
    <div class="footer__columns">
        <div class="footer__column">
            <h4 class="footer__heading">Solutions</h4>
            <a class="footer__link" href="hardware.html">POS Hardware</a>
            <a class="footer__link" href="payment_processing.html">Payment Processing</a>
            <a class="footer__link" href="software.html">POS Software</a>
        </div>
        <div class="footer__column">
            <h4 class="footer__heading">Business Types</h4>
            <a class="footer__link" href="restaurant.html">Restaurant POS</a>
            <a class="footer__link" href="retail.html">Retail POS</a>
        </div>
        <div class="footer__column">
            <h4 class="footer__heading">Company</h4>
            <a class="footer__link" href="company.html">About Us</a>
            <a class="footer__link" href="pricing.html">Pricing</a>
            <a class="footer__link" href="http://ap.slimrate.com/" target="_blank" rel="noopener">Login Merchant</a>
        </div>
        <div class="footer__column">
            <h4 class="footer__heading">Contact Us</h4>
            <a class="footer__link" href="mailto:info@slimrate.com">info@slimrate.com</a>
            <a class="footer__link" href="tel:(888)9774533">(888) 977-4533</a>
        </div>
    </div>
    <div class="footer__legal">
        <p class="footer__legal-text">Copyright © 2024 Slimrate LLC. All rights reserved.</p>
    </div>
</footer>`;

class BottomMenu extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(bottomMenuTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("bottom-menu", BottomMenu);