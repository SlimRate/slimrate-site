const softwareAdvantagesTemplate = document.createElement('template');
softwareAdvantagesTemplate.innerHTML = `
<section class="advantages advantages-allPage">
    <div class="container">
        <div class="container-header">
            <p class="section-descr small">
            
            </p>
            <h2 class="section-title">Comprehensive, Easy-to-use Software</h2>
            <p class="section-text">
            Powerful restaurant and retail software for restaurants and retail stores of all sizes
            </p>
        </div>
        <div class="advantages-cards">
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-wallet"></i></div>
                <h2 class="advantages-card__title">Simple and Easy-to-use </h2>
                Easy-to-use POS solution built to simplify operations with a lightning-fast interface
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-chart-bar"></i></div>
                <h2 class="advantages-card__title">Seamless Onboarding</h2>
                The easiest way to start a business and get our system up and running in the fastest way possible
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-hourglass-half"></i></div>
                <h2 class="advantages-card__title">Industry Leading Customer Support</h2>
                Above and beyond when it comes to customer care. 24/7/365 live support
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-chart-pie"></i></div>
                <h2 class="advantages-card__title">Training</h2>
                Online and in-person training so you can get help when you need it
            </div>
        </div>
    </div>
</section>`;

class SoftwareAdvantages extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(softwareAdvantagesTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("software-advantages", SoftwareAdvantages);