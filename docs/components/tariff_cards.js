const tariffsTemplate = document.createElement('template');
tariffsTemplate.innerHTML = `
<section class="tariff">
            <div class="container">
                <div class="container-header">
                    <h2 class="section-title">Slimrate rates</h2>
                    <!-- <p class="section-descr">Choose the rate that suits your business type</p> -->
                    <ul class="tariff-descr">
                        <li>Flexible payment options</li>
                        <li>Offline mode</li>
                        <li>Inventory management</li>
                        <li>Marketing tools</li>
                    </ul>
                </div>
                <div class="tariff-cards">
                    <div class="swiper-slide">
                        <div class="tariff-card">
                            <h4 class="tariff-card__title">Basic Plan
                            </h4>
                            <p class="tariff-card__text">For businesses starting out or needing essential POS functionality, our Basic Plan covers all your core needs.
                            </p>
                            <ul>
                                <li>Cloud-based point of sale</li>
                                <li>Hardware configuration including one terminal. (Additional charges apply for
                                    subsequent devices.)
                                </li>
                            </ul>
                            <p class="tariff-card__priceTitle">Starting at</p>
                            <div class="tariff-card__price"><span>$0</span>/month</div>
                            <a href="#get_demo"><button class="btn btn-red">Shop Now</button></a>
                            <a class="price-off" href="pricing.html">View all featres →</a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="tariff-card">
                            <h4 class="tariff-card__title">Premium Plan
                            </h4>
                            <p class="tariff-card__text">Unlock advanced features and boost your business operations with our Premium Plan. This plan offers enhanced capabilities to streamline your workflow and grow your business.
                            </p>
                            <ul>
                                <li>Cloud-based point of sale</li>
                                <li>Hardware configuration including three terminal. (Additional charges apply for
                                    subsequent devices.)
                                </li>
                            </ul>
                            <p class="tariff-card__priceTitle">Starting at</p>
                            <div class="tariff-card__price"><span>$99</span>/month</div>
                            <a href="#get_demo"><button class="btn btn-red">Shop Now</button></a>
                            <a class="price-off" href="pricing.html">View all featres →</a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="tariff-card">
                            <h4 class="tariff-card__title">Custom Plan
                            </h4>
                            <p class="tariff-card__text">For businesses with unique needs, our Custom Plan provides a fully tailored POS experience. Work with our in-house software team to build a solution that aligns perfectly with your business requirements.
                            </p>
                            <ul>
                                <li>Cloud-based point of sale</li>
                                <li>Hardware configuration including more terminal. (Additional charges apply for
                                    subsequent devices.)
                            </ul>
                            <p class="tariff-card__priceTitle">Starting at</p>
                            <div class="tariff-card__price"><span>Custom price</span></div>
                            <a href="#get_demo"><button class="btn btn-red">Shop Now</button></a>
                            <a class="price-off" href="pricing.html">View all featres →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

class Tariffs extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(tariffsTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("tariff-cards", Tariffs);