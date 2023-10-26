const equipCompanyTemplate = document.createElement('template');
equipCompanyTemplate.innerHTML = `
<section class="equip company-equip">
            <img src="assets/img/custom-bg-1.svg" alt="" class="custom-bg">
            <img src="assets/img/bg-top-1.svg" alt="" class="bg-top">
            <img src="assets/img/bg-bot-1.svg" alt="" class="bg-bottom">
            <div class="container">
                <div class="block-left">
                    <h2 class="section-title">All-in-one point of sale solution built to run your business better</h2>
                    <p class="equip-text">Slimrate POS powers your business from a single, smart platform.<br>
                    Accept payments, manage employees and inventory, generate reports, and much more.
                     </p>
                    <div class="equip-buttons">
                        <a href="#get_demo"><button class="btn btn-white">Get Demo</button></a>
                        <!-- <a href="">All products →</a> -->
                    </div>
                </div>

                <div class="block-right">
                    <div class="equip-card">
                        <img src="assets/img/icons/equip-1.svg" alt="" class="equip-img">
                        <img src="assets/img/icons/equip-2.svg" alt="" class="equip-img">
                        <img src="assets/img/icons/equip-3.svg" alt="" class="equip-img">
                        <img src="assets/img/icons/equip-4.svg" alt="" class="equip-img">
                        
                        <div class="equip-img">
                            <a href="payment_processing.html">Payment Processing</a><a href="payment_processing.html"><img src="assets/img/icons/equip-btn.svg" alt="" class="equip-btn"></a></div>
                        <div class="equip-img">
                            <a href="software.html">POS Software</a><a href="software.html"><img src="assets/img/icons/equip-btn.svg" alt="" class="equip-btn"></a></div>
                        <div class="equip-img">
                            <a href="hardware.html">POS Hardware</a><a href="hardware.html"><img src="assets/img/icons/equip-btn.svg" alt="" class="equip-btn"></a></div>
                        <div class="equip-img">
                            <a href="e-commerce.html">E-Commerce</a><a href="e-commerce.html"><img src="assets/img/icons/equip-btn.svg" alt="" class="equip-btn"></a></div>
                    </div>
                    <img src="assets/img/circle.svg" alt="" class="block-img-circle">
                </div>
            </div>
        </section>
`;

class EquipCompany extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(equipCompanyTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("equip-company-el", EquipCompany);