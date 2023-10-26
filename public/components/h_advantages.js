const hAdvantagesTemplate = document.createElement('template');
hAdvantagesTemplate.innerHTML = `
<section class="advantages advantages-allPage">
    <div class="container">
        <div class="container-header">
            <p class="section-descr small">
            </p>
            <h2 class="section-title">Our tools - your business</h2>
            <p class="section-text">
                Industry leading point of sale and management tools to separate you from your competition. Live
                support to ensure your questions are always answered.
            </p>
        </div>
        <div class="advantages-cards">
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-file-code"></i></div>
                <h2 class="advantages-card__title">Software </h2>
                -Inventory Management<br />
-Sell Online + In-store<br />
-Multi-location Functions<br />
-Fraud and Loss Prevention<br />
-Loyalty + Marketing Tools<br />
-Detailed Reporting
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-print"></i></div>
                <h2 class="advantages-card__title">Hardware </h2>
                -All-in-one Touchscreen Terminal<br />
-Customer-facing Display<br />
-Secure Payment Terminals<br />
-Thermal/Impact Printers<br />
-Barcode + Scale Integrations<br />
-Kitchen Displays
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-hand-holding-usd"></i></div>
                <h2 class="advantages-card__title">Payment Technology</h2>
                -EMV + Contactless Payments<br />
-Next Day Funding<br />
-Supports Cash Discount Program<br />
-E-invoicing<br />
-Offline Processing<br />
-Gift Card Processing
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-clock"></i></div>
                <h2 class="advantages-card__title">24/7/365 Support</h2>
                -Professional Installation<br />
-Quick, Seamless Setup and Implementation<br />
-Live Support<br />
-Virtual Trainings<br />
-On-site and Remote Technical Support<br />
-12-Month Limited Warranty
            </div>
        </div>
    </div>
</section>`;

class hAdvantages extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(hAdvantagesTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("h-advantages", hAdvantages);