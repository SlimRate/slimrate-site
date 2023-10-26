const hSomethingSliderTemplate = document.createElement('template');
hSomethingSliderTemplate.innerHTML = `
<section class="something">
<div class="container">
<div class="container-header">
    <h2 class="section-title">Features</h2>

</div>
<div class="something-cards swiper">
    <div class="something-wrapper swiper-wrapper">
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-balance-scale-left"></i></div>
                <h4 class="something-card__title">Payment processing </h4>
                <p class="something-card__descr">Full suite of payment acceptance tools - in-store, online, and mobile </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-search-location"></i></div>
                <h4 class="something-card__title">Offline mode</h4>
                <p class="something-card__descr">Keep your business running, even if your internet isn’t
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-tags"></i></div>
                <h4 class="something-card__title">Barcode and scale integration </h4>
                <p class="something-card__descr">Easily scan and weigh products to streamline checkout and control inventory
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-warehouse"></i></div>
                <h4 class="something-card__title">Inventory management</h4>
                <p class="something-card__descr">Streamline back-office management with central access to track inventory across multiple
                channels and locations </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-user"></i></div>
                <h4 class="something-card__title">Employee scheduling and payroll </h4>
                <p class="something-card__descr">Built-in scheduling and payroll management tools</p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-fingerprint"></i></div>
                <h4 class="something-card__title">ID scanning and age verification</h4>
                <p class="something-card__descr">Enhance security and ensure compliance in your business</p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-shield-alt"></i></div>
                <h4 class="something-card__title">Fraud and loss prevention</h4>
                <p class="something-card__descr">Reduce or eliminate shrinkage, stock-outs, and inventory discrepancies
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-gift"></i></div>
                <h4 class="something-card__title">Gift cards and loyalty programs</h4>
                <p class="something-card__descr">Track and reward loyal customers. Promote your business with promotional codes and gift cards
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-poll-h"></i></div>
                <h4 class="something-card__title">Business accounting and reporting</h4>
                <p class="something-card__descr">Exportable detailed reporting for accounting and tracking business progress
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-map-marked-alt"></i></div>
                <h4 class="something-card__title">Manage multiple locations</h4>
                <p class="something-card__descr">Monitor workflow and manage multiple locations from one account
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-calendar-alt"></i></div>
                <h4 class="something-card__title">Table management and reservations</h4>
                <p class="something-card__descr">Manage and turn tables faster with easy-to-use table management tools
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-tools"></i></div>
                <h4 class="something-card__title">Customizable menus and modifiers</h4>
                <p class="something-card__descr">Your menu. Your way. Unlimited menu combinations
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-chart-pie"></i></div>
                <h4 class="something-card__title">Marketing tools </h4>
                <p class="something-card__descr">Engaging, smart technology that will turn every guest into a regular customer
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-project-diagram"></i></div>
                <h4 class="something-card__title">Integrations</h4>
                <p class="something-card__descr">Slimrate POS offers integrations with the most widely used software
                </p>
            </div>
        </div>
    </div>
</div>
</div>
</section>
`;

class HSomethingSlider extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(hSomethingSliderTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("h-something-slider", HSomethingSlider);