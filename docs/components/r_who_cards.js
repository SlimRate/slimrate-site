const rWhoCardsTemplate = document.createElement('template');
rWhoCardsTemplate.innerHTML = `
<section class="who">
<img src="assets/img/bg-blue-wave.svg" alt="Slimrate product image" class="who-bg-top">
<img src="assets/img/bg-blue-wave.svg" alt="Slimrate product image" class="who-bg-bottom">
<div class="container">
    <div class="container-header">
        <h2 class="section-title">For whom?</h2>
        <p class="section-descr">
            Cloud-based POS & management solution for restaurants of all sizes. Built to make your
            restaurant perform better
        </p>
    </div>
    <div class="who-cards">
        <div class="who-card">
            <div class="who-card__img"><i class="las la-wine-glass"></i></div>
            <h4 class="who-card__title">Liquor Stores</h4>
            <p class="who-card__descr">Transform your checkout process into a lifelong customer relationship
            </p>
        </div>
        <div class="who-card">
            <div class="who-card__img"><i class="las la-tshirt"></i></div>
            <h4 class="who-card__title">Clothing and Apparel Stores</h4>
            <p class="who-card__descr">Increase your sales and profits with a hassle-free POS solution
            </p>
        </div>
        <div class="who-card">
            <div class="who-card__img"><i class="las la-fish"></i></div>
            <h4 class="who-card__title">Grocery and Convenience Stores</h4>
            <p class="who-card__descr">Integrated POS solution to run and grow your business from a single
                cloud-based dashboard
            </p>
        </div>
        <div class="who-card">
            <div class="who-card__img"><i class="las la-dice-d6"></i></div>
            <h4 class="who-card__title">Specialty Stores</h4>
            <p class="who-card__descr">Manage your inventory and grow your business with an all-in-one high
                performance POS solution
            </p>
        </div>
    </div>
</div>
</section>`;

class RWhoCards extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(rWhoCardsTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("r-who-cards", RWhoCards);