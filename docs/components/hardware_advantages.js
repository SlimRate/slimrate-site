const hardwareAdvantagesTemplate = document.createElement('template');
hardwareAdvantagesTemplate.innerHTML = `
<section class="advantages advantages-allPage">
    <div class="container">
        <div class="container-header">
            <p class="section-descr small">
            Reliable Hardware Designed to Perform
            </p>
            <h2 class="section-title">Powerful tool built to help you operate efficiently and effectively</h2>
            <p class="section-text">
                Industry leading point of sale and management tools to separate you from your competition. Live
                support to ensure your questions are always answered.
            </p>
        </div>
        <div class="advantages-cards">
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-sort-amount-up"></i></div>
                <h2 class="advantages-card__title">Durable and Reliable Hardware</h2>
                High-performance POS hardware built tough, specifically for restaurant and retail applications.
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-clock"></i></div>
                <h2 class="advantages-card__title">24/7/365 Tech Support </h2>
                Direct access to technical support 24 hour a day. 7 days a week. Available both online and by
                phone.
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-server"></i></div>
                <h2 class="advantages-card__title">Professional Installations and Trainings</h2>
                Professional installation by our Slimrate certified technicians. Live trainings to keep you up to
                speed on the latest features.
            </div>
            <div class="advantages-card">
                <div class="advantages-card__img"><i class="las la-list-alt"></i></div>
                <h2 class="advantages-card__title">Quality Guaranteed </h2>
                All Slimrate POS hardware includes a 12-month limited warranty.
            </div>
        </div>
    </div>
</section>`;

class HardareAdvantages extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(hardwareAdvantagesTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("hardware-advantages", HardareAdvantages);