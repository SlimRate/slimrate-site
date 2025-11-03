const bottomMenuTemplate = document.createElement('template');
bottomMenuTemplate.innerHTML = `
<footer class="footer">
<div class="container">
    <div class="footer-top">
        <ul>
            <li>Solutions</li>
            <li><a href="hardware.html">POS Hardware</a></li>
            <li><a href="payment_processing.html">Payment Processing</a></li>
            <li><a href="software.html">POS Software</a></li>
            <li><a href="mobile-app.html">Mobile App</a></li>
        </ul>
        <ul>
            <li>Business Types</li>
            <li><a href="restaurant.html">Restaurant POS</a></li>
            <li><a href="retail.html">Retail POS</a></li>
        </ul>
        <ul>
            <li>Company</li>
            <li><a href="company.html">About us</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="http://ap.slimrate.com/" target="_blank">Login Merchant</a></li>
        </ul>
        <ul>
            <li>Contact Us</li>
            <li><a href="mailto:info@slimrate.com">info@slimrate.com</a></li>
            <li><a href="tel:(888)9774533">(888)977-4533</a></li>
        </ul>
    </div>
    <div class="footer-bottom">
        <ul>
            <!--- <li><a href="privacy.html">Privacy Statement</a></li>
            <li><a href="do_not_sell_my_info.html">Do Not Sell My Personal Information</a></li>
            <li><a href="terms.html">Terms of Service</a></li>
            <li><a href="merchant.html">Merchant Agreement</a></li>
            <li><a href="legal.html">Legal</a></li>
            <li><a href="cookie.html">Cookie Policy</a></li>
            <li><a href="mailto:report@slimrate.com">Report a Vulnerability</a></li> --->
            <li><a href="index.html">Copyright © 2024 Slimrate LLC. All rights reserved</a></li>
        </ul>
    </div>
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
        this.injectZendeskWidget();
    }

    injectZendeskWidget() {
        if (document.getElementById('ze-snippet')) {
            return;
        }

        const zendeskScript = document.createElement('script');
        zendeskScript.id = 'ze-snippet';
        zendeskScript.src = 'https://static.zdassets.com/ekr/snippet.js?key=9eae20ea-c981-4e2b-bdf3-facd3067b893';
        zendeskScript.async = true;

        const target = document.head || document.body || this;
        target.appendChild(zendeskScript);
    }
}
customElements.define("bottom-menu", BottomMenu);