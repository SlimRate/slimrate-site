const hardwareSomethingSliderTemplate = document.createElement('template');
if (window.innerWidth < 768) {
    hardwareSomethingSliderTemplate.innerHTML = `
<section class="something">
<div class="container">
<!--<div class="container-header">
    <h2 class="section-title">POS Hardware</h2>

</div>-->
<div class="something-cards swiper">
    <div class="something-wrapper swiper-wrapper">
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-sort-amount-up"></i></div>
                <h4 class="something-card__title">Durable and Reliable Hardware </h4>
                <p class="something-card__descr">High-performance POS hardware built tough, specifically for restaurant and retail applications.</p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-clock"></i></div>
                <h4 class="something-card__title">24/7/365 Tech Support </h4>
                <p class="something-card__descr">Direct access to technical support 24 hour a day. 7 days a week. Available both online and by
                phone</p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-server"></i></div>
                <h4 class="something-card__title">Professional Installations and Trainings </h4>
                <p class="something-card__descr">Professional installation by our Slimrate certified technicians. Live trainings to keep you up to
                speed on the latest features.</p>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="something-card">
                <div class="something-card__img"><i class="las la-list-alt"></i></div>
                <h4 class="something-card__title">Quality Guaranteed </h4>
                <p class="something-card__descr">All Slimrate POS hardware includes a 12-month limited warranty</p>
            </div>
        </div>
    </div>
</div>
</div>
</section>
`;
} else {

    hardwareSomethingSliderTemplate.innerHTML = `
    <section class="something">
        <div class="container">
            <!--<div class="container-header">
                <h2 class="section-title">POS Hardware</h2>

            </div>-->
            <div class="something-cards-hardware">
                <div class="something-wrapper-hardware">
                    <div class="something-card">
                        <div class="something-card__img"><i class="las la-sort-amount-up"></i></div>
                        <h4 class="something-card__title">Durable and Reliable Hardware </h4>
                <p class="something-card__descr">High-performance POS hardware built tough, specifically for restaurant and retail applications.</p>
            </div>
                    <div class="something-card">
                        <div class="something-card__img"><i class="las la-clock"></i></div>
                        <h4 class="something-card__title">24/7/365 Tech Support </h4>
                <p class="something-card__descr">Direct access to technical support 24 hour a day. 7 days a week. Available both online and by
                phone</p>
            </div>
                    <div class="something-card">
                        <div class="something-card__img"><i class="las la-server"></i></div>
                        <h4 class="something-card__title">Professional Installations and Trainings </h4>
                <p class="something-card__descr">Professional installation by our Slimrate certified technicians. Live trainings to keep you up to
                speed on the latest features.</p>
            </div>
                    <div class="something-card">
                        <div class="something-card__img"><i class="las la-list-alt"></i></div>
                        <h4 class="something-card__title">Quality Guaranteed </h4>
                <p class="something-card__descr">All Slimrate POS hardware includes a 12-month limited warranty</p>
            </div>
                </div>
            </div>
        </div>
    </section>`
}

class HardwareSomethingSlider extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(hardwareSomethingSliderTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("hardware-something-slider", HardwareSomethingSlider);