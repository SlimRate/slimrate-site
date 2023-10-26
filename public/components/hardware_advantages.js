const hardwareAdvantagesTemplate = document.createElement('template');
hardwareAdvantagesTemplate.innerHTML = `
<section class="advantages advantages-allPage">
    <div class="container">
        <div class="container-header">
            <p class="section-descr small">
            Reliable Hardware Designed to Perform
            </p>
            <h2 class="section-title">Powerful tool built to help you operate efficiently and effectively</h2>
            <p class="section-text">
                Industry leading point of sale and management tools to separate you from your competition. Live
                support to ensure your questions are always answered.
            </p>
        </div>
        <div class="advantages-cards">
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-tv"></i></div>
                <h2 class="advantages-card__title">All-In-One Touchscreen Terminal</h2>
                -15.6” Android Touchscreen<br />
-Splash-Proof<br />
-Dust-Proof<br />
-Customer-facing Touchable Display<br />
-12-Month Guarantee
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-print"></i></div>
                <h2 class="advantages-card__title">Thermal and Impact Printers </h2>
                -Splash Proof<br />
-Dust Proof<br />
-High-Capacity 80mm<br />
-High Printing Speed Up to 300mm/Sec<br />
-Interface: Serial + USB + LAN<br />
-Metal or Plastic Base
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-receipt"></i></div>
                <h2 class="advantages-card__title">Payment Terminals</h2>
                -EMV ®, MSR and NFC/Contactless<br />
-EMV &amp; PCI Compliant<br />
-Large Memory Capacity<br />
-User-friendly Interface with Powerful GUI
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-hdd"></i></div>
                <h2 class="advantages-card__title">Accessories</h2>
                -2D Barcode Scanner<br />
-ID Scanner<br />
-Cash Drawer<br />
-Scale
            </div>
        </div>
    </div>
</section>`;

class HardareAdvantages extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(hardwareAdvantagesTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("hardware-advantages", HardareAdvantages);