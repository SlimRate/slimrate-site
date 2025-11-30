const restWhoCardsTemplate = document.createElement('template');
restWhoCardsTemplate.innerHTML = `
<section class="who">
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
                        <div class="who-card__img"><i class="las la-cocktail"></i></div>
                        <h4 class="who-card__title">Bars and nightclubs</h4>
                        <p class="who-card__descr">All in one POS solution designed specifically for bars and
                            nightclubs.
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-apple-alt"></i></div>
                        <h4 class="who-card__title">Casual Dining </h4>
                        <p class="who-card__descr">Fully integrated POS solution to help turn tables faster.
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-cheese"></i></div>
                        <h4 class="who-card__title">Fine dining</h4>
                        <p class="who-card__descr">Fine dining specialized POS solution delivers an exceptional customer
                            experience with the latest ordering and payment technology
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-pizza-slice"></i></div>
                        <h4 class="who-card__title">Quick service restaurant</h4>
                        <p class="who-card__descr">Quick service tools and features designed to outperform your
                            competition
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-coffee"></i></div>
                        <h4 class="who-card__title">Coffee Shop and Bakeries</h4>
                        <p class="who-card__descr">All-in-one software built to simplify operations and delight your
                            customers
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-hamburger"></i></div>
                        <h4 class="who-card__title">Food Truck</h4>
                        <p class="who-card__descr">Order and payment technology for your mobile kitchen
                        </p>
                    </div>
                </div>
            </div>
        </section>`;

class RestWhoCards extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(restWhoCardsTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("rest-who-cards", RestWhoCards);