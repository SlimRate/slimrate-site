const productsTemplate = document.createElement('template');
productsTemplate.innerHTML = `
<section class="products" id="products">
    <div class="container">
        <div class="container-header">
            <h2 class="section-title">Our <span>Expertise</span></h2>
            <a href="company.html">All expertise →</a>
            <p class="section-descr">Together we creatte the most powerful software for companies</p>
        </div>
        <div class="products-cards">
            <div class="products-card">
            <div class="products-card__img"><i  class="las la-money-check-alt"></i></div>
                <h2 class="products-card__title">Fintech</h2>
                <div class="products-card__descr">The intuitive nature of our financial software solutions is
                    the result of our extensive expertise in Fintech.</div>
                <a href="company.html" class="products-card__link">All expertise →</a>
            </div>
            <div class="products-card">
            <div class="products-card__img"><i  class="las la-mobile"></i></div>
                <h2 class="products-card__title">IoT</h2>
                <div class="products-card__descr">IoT systems help control any environment and bring peace of
                    mind into the world.
                </div>
                <a href="company.html" class="products-card__link">All expertise →</a>
            </div>
            <div class="products-card">
            <div class="products-card__img"><i  class="las la-share-alt"></i></div>
                <h2 class="products-card__title">Blockchain</h2>
                <div class="products-card__descr">Crypto-born blockchain technology is a game changer for many
                    industries.</div>
                <a href="company.html" class="products-card__link">All expertise →</a>
            </div>
            <div class="products-card">
            <div class="products-card__img"><i  class="las la-ad"></i></div>
                <h2 class="products-card__title">AdTech</h2>
                <div class="products-card__descr">Optimize your ads for the best results with software platform
                    development services </div>
                <a href="company.html" class="products-card__link">All expertise →</a>
            </div>
        </div>
        <a href="company.html">All expertise →</a>
    </div>
</section>`;

class ProductCards extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(productsTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("product-cards", ProductCards);