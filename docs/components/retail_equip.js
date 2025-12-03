const retailTemplate = document.createElement('template');
retailTemplate.innerHTML = `
<section class="equip equip-modern">
            <div class="container">
                <div class="block-left">
                    <p class="section-descr">Why Slimrate</p>
                    <h2 class="section-title">Solution built to run your business better</h2>
                    <p class="equip-text">All-in-one touchscreen tablet <br> 
                    Customer facing display  <br> 
                    Cash drawer  <br> 
                    Payment terminal <br> 
                    Thermal printer <br> 
                    Barcode and scale integrations
                    </p>
                    <div class="equip-buttons">
                        <a href="#get_demo"><button class="btn btn-white">Get Demo</button></a>
                        <!-- <a href="">All products →</a> -->
                    </div>
                </div>

                <div class="block-right">
                    <div class="equip-card">
                        <img src="assets/img/icons/equip-1.svg" alt="Slimrate product image" class="equip-img">
                        <img src="assets/img/icons/equip-2.svg" alt="Slimrate product image" class="equip-img">
                        <img src="assets/img/icons/equip-3.svg" alt="Slimrate product image" class="equip-img">
                        <img src="assets/img/icons/equip-4.svg" alt="Slimrate product image" class="equip-img">
                        <div class="equip-img">
                            <a href="payment_processing.html">Payment processing</a><a href="payment_processing.html"><img src="assets/img/icons/equip-btn.svg" alt="Slimrate product image" class="equip-btn"></a></div>
                        <div class="equip-img">
                            <a href="software.html">POS Software</a><a href="software.html"><img src="assets/img/icons/equip-btn.svg" alt="Slimrate product image" class="equip-btn"></a></div>
                       <div class="equip-img">
                            <a href="hardware.html">POS Hardware</a><a href="hardware.html"><img src="assets/img/icons/equip-btn.svg" alt="Slimrate product image" class="equip-btn"></a></div>
                    </div>
                    <img src="assets/img/circle.svg" alt="Slimrate product image" class="block-img-circle">
                </div>
            </div>
        </section>
`;

class RetailEquip extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(retailTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("equip-retail", RetailEquip);