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
            <div class="products-card__img"><i  class="las la-money-check-alt"></i></div>
                <h2 class="products-card__title">Software</h2>
                <div class="products-card__descr">A cloud-based retail + restaurant point of sale (POS) solution to manage and scale your business
                using the latest technology</div>
            </div></a>
            <a href="hardware.html"><div class="products-card">
            <div class="products-card__img"><i  class="las la-mobile"></i></div>
                <h2 class="products-card__title">Hardware</h2>
                <div class="products-card__descr">Deliver a seamless user experience with durable, stylish hardware and powerful built-in
                technology
                </div>
            </div></a>
            <a href="payment_processing.html"><div class="products-card">
            <div class="products-card__img"><i  class="las la-share-alt"></i></div>
                <h2 class="products-card__title">Payment Technology</h2>
                <div class="products-card__descr">Omni-channel solutions deliver faster, easier, and more secure payments</div>
            </div></a>
            <a href="company.html"><div class="products-card">
            <div class="products-card__img"><i  class="las la-ad"></i></div>
                <h2 class="products-card__title">Support</h2>
                <div class="products-card__descr">A service-first company that delivers unparalleled customer support whenever you need it</div>
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