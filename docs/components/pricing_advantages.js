const pricingAdvantagesTemplate = document.createElement('template');
pricingAdvantagesTemplate.innerHTML = `
<section class="advantages advantages-allPage">
    <div class="container">
        <div class="container-header">
            <p class="section-descr small">
                Why Slimrate
            </p>
            <h2 class="section-title">Our tools - your business</h2>
            <p class="section-text">
                Industry leading point of sale and management tools to separate you from your competition. Live
                support to ensure your questions are always answered.
            </p>
        </div>
        <div class="advantages-cards">
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-wallet"></i></div>
                <h2 class="advantages-card__title">Easy Management System</h2>
                Whether you're online, in-store, or both, our intuitive dashboard brings all your business data together in one place.
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-chart-bar"></i></div>
                <h2 class="advantages-card__title">Versatile solutions </h2>
                Introducing a versatile and flexible POS system for your business
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-hourglass-half"></i></div>
                <h2 class="advantages-card__title">24/7 support</h2>
                A powerful POS solution and 24/7 support to help you stay ahead of the competition
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-chart-pie"></i></div>
                <h2 class="advantages-card__title">Security</h2>
                Secure and fast transactions to keep your business moving at a fast pace
            </div>
        </div>
    </div>
</section>`;

class PricingAdvantages extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(pricingAdvantagesTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("pricing-advantages", PricingAdvantages);