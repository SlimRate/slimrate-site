const equipTemplate = document.createElement('template');
equipTemplate.innerHTML = `
<section class="equip equip-modern">
            <div class="container">
                <div class="block-left">
                    <p class="section-descr">Why Slimrate</p>
                    <h2 class="section-title">Solution built to run your business better</h2>
                    <p class="equip-text">Slimrate POS solution powers your business from a single, smart platform. Accept payments, manage employees and inventory, generate reports, and much more<br>The best all-in-one point of sale solution to run your business seamlessly.</p>
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

class Equip extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(equipTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
        if (window.fixAssetPaths) window.fixAssetPaths(this);
    }
}
customElements.define("equip-el", Equip);