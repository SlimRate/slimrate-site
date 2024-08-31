const tariffsTemplate = document.createElement('template');
tariffsTemplate.innerHTML = `
<section class="tariff">
            <div class="container">
                <div class="container-header">
                    <h2 class="section-title">Slimrate rates</h2>
                    <!-- <p class="section-descr">Choose the rate that suits your business type</p> -->
                    <!--<ul class="tariff-descr">
                        <li>Flexible payment options</li>
                        <li>Offline mode</li>
                        <li>Inventory management</li>
                        <li>Marketing tools</li>
                    </ul>-->
                </div>
                <div class="tariff-cards">
                    <div class="swiper-slide">
                        <div class="tariff-card">
                            <h4 class="tariff-card__title">Basic Plan
                            </h4>
                            <p class="tariff-card__text">For businesses starting out or needing essential POS functionality, our Basic Plan covers all your core needs.
                            </p>
                            <ul>
                                <li>Standard POS software with essential sales and inventory management
                                </li>
                                <li>Basic reporting and analytics
                                </li>
                                <li>Access to standard hardware options (POS display, receipt printers, cash drawers)
                                </li>
                                <li>Integrated payment processing with competitive rates
                                </li>
                                <li>24/7 live customer support
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
                                <li>All Basic Plan features plus advanced inventory management
                                </li>
                                <li>Multi-location and multi-user management
                                </li>
                                <li>Enhanced reporting and custom analytics dashboards
                                </li>
                                <li>Loyalty programs and customer relationship management (CRM)
                                </li>
                                <li>Access to expanded hardware options and integrations
                                </li>
                                <li>Priority support with dedicated account management
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
                                <li>Completely customized software tailored to your business operations
                                </li>
                                <li>Integration with existing systems and third-party applications
                                </li>
                                <li>Personalized hardware and software configuration
                                </li>
                                <li>Advanced analytics and reporting customized to your business
                                </li>
                                <li>Dedicated project manager and ongoing support
                                </li>
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