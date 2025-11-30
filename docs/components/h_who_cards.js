const hWhoCardsTemplate = document.createElement('template');
hWhoCardsTemplate.innerHTML = `
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
                    <a href="h-bars.html"><div class="who-card">
                        <div class="who-card__img"><i class="las la-cocktail"></i></div>
                        <h4 class="who-card__title">Bars and Nightclubs</h4>
                        <p class="who-card__descr">All in one POS solution designed specifically for bars and
                            nightclubs.
                        </p>
                    </div></a>
                    <a href="h-casual.html"><div class="who-card">
                        <div class="who-card__img"><i class="las la-apple-alt"></i></div>
                        <h4 class="who-card__title">Casual Dining </h4>
                        <p class="who-card__descr">Fully integrated POS solution to help turn tables faster.
                        </p>
                    </div></a>
                    <a href="h-fine.html"><div class="who-card">
                        <div class="who-card__img"><i class="las la-cheese"></i></div>
                        <h4 class="who-card__title">Fine Dining</h4>
                        <p class="who-card__descr">Fine dining specialized POS solution delivers an exceptional customer
                            experience with the latest ordering and payment technology
                        </p>
                    </div></a>
                    <a href="h-quick.html"><div class="who-card">
                        <div class="who-card__img"><i class="las la-pizza-slice"></i></div>
                        <h4 class="who-card__title">Quick Service Restaurants</h4>
                        <p class="who-card__descr">Quick service tools and features designed to outperform your
                            competition
                        </p>
                    </div></a>
                    <a href="h-coffee.html"><div class="who-card">
                        <div class="who-card__img"><i class="las la-coffee"></i></div>
                        <h4 class="who-card__title">Coffee Shop and Bakeries</h4>
                        <p class="who-card__descr">All-in-one software built to simplify operations and delight your
                            customers
                        </p>
                    </div></a>
                    <a href="h-truck.html"><div class="who-card">
                        <div class="who-card__img"><i class="las la-hamburger"></i></div>
                        <h4 class="who-card__title">Food Truck</h4>
                        <p class="who-card__descr">Order and payment technology for your mobile kitchen
                        </p>
                    </div></a>
                    <a href="r-liquor.html"><div class="who-card">
                        <div class="who-card__img"><i class="las la-wine-bottle"></i></div>
                        <h4 class="who-card__title">Liquor Stores</h4>
                        <p class="who-card__descr">The comprehensive and
                        user-friendly wine and spirits solution to build customer loyalty
                        and keep them coming back
                        </p>
                    </div></a>
                    <a href="r-clothing.html"><div class="who-card">
                        <div class="who-card__img"><i class="las la-tshirt"></i></div>
                        <h4 class="who-card__title">Clothing and Apparel Stores</h4>
                        <p class="who-card__descr">Best in class
                        point of sale solution for clothing and apparel stores.
                        </p>
                    </div></a>
                    <a href="r-grocery.html"><div class="who-card">
                        <div class="who-card__img"><i class="las la-shopping-basket"></i></div>
                        <h4 class="who-card__title">Grocery and Convenience Stores</h4>
                        <p class="who-card__descr">Turn more
                        customers with a seamless checkout process. Customizable reward and
                        loyalty programs to engage your customers
                        </p>
                    </div></a>
                    <a href="r-specialty.html"><div class="who-card">
                        <div class="who-card__img"><i class="las la-store-alt"></i></div>
                        <h4 class="who-card__title">Specialty Stores</h4>
                        <p class="who-card__descr">Product and management
                        solutions that will help You run your business
                        </p>
                    </div></a>
                </div>
            </div>
        </section>`;

class HWhoCards extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(hWhoCardsTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("h-who-cards", HWhoCards);