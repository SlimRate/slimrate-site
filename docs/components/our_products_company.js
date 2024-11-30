const productsCompanyTemplate = document.createElement('template');
productsCompanyTemplate.innerHTML = `
<section class="products company-products" id="products">
    <div class="container">
        <div class="container-header">
            <h2 class="section-title">Core  <span>Competencies</span></h2>
            <p class="section-descr"></p>
        </div>
        <div class="products-cards">
            <a href="software.html"><div class="products-card">
            <div class="products-card__img"><i class="las la-cloud"></i></i></div>
                <h2 class="products-card__title">Software</h2>
                <div class="products-card__descr">A cloud-based retail and restaurant point-of-sale solution crafted to streamline operations, enhance efficiency, and drive business growth through innovative, cutting-edge technology.</div>
            </div></a>
            <a href="hardware.html"><div class="products-card">
            <div class="products-card__img"><i class="las la-server"></i></div>
                <h2 class="products-card__title">Hardware</h2>
                <div class="products-card__descr">Enhance user experience with durable, stylish hardware and advanced integrated technology, offering seamless functionality and reliability for your business needs.
                </div>
            </div></a>
            <a href="payment_processing.html"><div class="products-card">
            <div class="products-card__img"><i class="las la-credit-card"></i></i></div>
                <h2 class="products-card__title">Payment Technology</h2>
                <div class="products-card__descr">An advanced omni-channel solution designed to provide faster, easier, and more secure payment processing, enhancing efficiency, and security across your business.</div>
            </div></a>
            <a href="company.html"><div class="products-card">
            <div class="products-card__img"><i class="las la-headset"></i></div>
                <h2 class="products-card__title">Support</h2>
                <div class="products-card__descr">A customer-focused company dedicated to providing exceptional, personalized support, ensuring reliable assistance is always available whenever and wherever you need it.</div>
            </div></a>
        </div>
    </div>
</section>`;

class ProductCompanyCards extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(productsCompanyTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("product-company-cards", ProductCompanyCards);