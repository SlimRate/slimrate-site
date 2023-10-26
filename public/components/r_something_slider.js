const rSomethingSliderTemplate = document.createElement('template');
rSomethingSliderTemplate.innerHTML = `
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
                <p class="something-card__descr">We make all financial operations smooth, simple, and
                    secure. </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-search-location"></i></div>
                <h4 class="something-card__title">Offline mode</h4>
                <p class="something-card__descr">Save actions in an emergency without a network
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-tags"></i></div>
                <h4 class="something-card__title">Barcode and scale integration </h4>
                <p class="something-card__descr">Universal search and inventory of goods in the system
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-warehouse"></i></div>
                <h4 class="something-card__title">Inventory management</h4>
                <p class="something-card__descr">Maximum warehouse automation for convenient management
                    and inventory analysis </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-user"></i></div>
                <h4 class="something-card__title">Employee scheduling and payroll </h4>
                <p class="something-card__descr">Customize payroll calculation easily with different
                    types of employee schedules </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-fingerprint"></i></div>
                <h4 class="something-card__title">ID scanning and age verification</h4>
                <p class="something-card__descr">Security compliance and employee identification at each
                    entrance</p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-shield-alt"></i></div>
                <h4 class="something-card__title">Fraud and loss prevention</h4>
                <p class="something-card__descr">Track and save all activities to prevent fraud and loss
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-gift"></i></div>
                <h4 class="something-card__title">Gift cards and loyalty programs</h4>
                <p class="something-card__descr">It is easy to activate a gift card or promotional code
                    in the system
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-poll-h"></i></div>
                <h4 class="something-card__title">Business accounting and reporting</h4>
                <p class="something-card__descr">Convenient reporting for accounting and tracking
                    business progress
                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-map-marked-alt"></i></div>
                <h4 class="something-card__title">Manage multiple locations</h4>
                <p class="something-card__descr">Monito workflow and manage multiple locations from one
                    account

                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-tools"></i></div>
                <h4 class="something-card__title">Customizable menus and modifiers</h4>
                <p class="something-card__descr">Individual system settings for each business for
                    maximum productivity in sales

                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-chart-pie"></i></div>
                <h4 class="something-card__title">Marketing tools </h4>
                <p class="something-card__descr">Extensive options for setting up promotions and
                    discounts in the restaurants or retails

                </p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-project-diagram"></i></div>
                <h4 class="something-card__title">Integrations</h4>
                <p class="something-card__descr">We support integrations with popular services and often
                    add new features
                </p>
            </div>
        </div>
    </div>
</div>
</div>
</section>
`;

class RSomethingSlider extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(rSomethingSliderTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("r-something-slider", RSomethingSlider);