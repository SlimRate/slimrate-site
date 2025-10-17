const equipCompanyTemplate = document.createElement('template');
equipCompanyTemplate.innerHTML = `
<section class="equip company-equip company-equip--dual">
    <div class="company-equip__layout">
        <div class="company-equip__card company-equip__card--info">
            <h2 class="company-equip__title">Slimrate POS: Your All-in-One Business</h2>
            <p class="company-equip__description">Streamline every part of your operation with Slimrate POS.<br />Accept payments, manage staff, track inventory, and unlock insights with real-time reporting&#8212;all inside one secure platform tailored to your workflow.</p>
            <p class="company-equip__description">Experience the difference with Slimrate POS and build a smarter, more efficient, and profitable future for your team.</p>
            <div class="company-equip__actions">
                <a class="btn-red company-equip__cta" href="#get_demo">Get Demo</a>
            </div>
        </div>
        <div class="company-equip__card company-equip__card--feature">
            <span class="company-equip__marker company-equip__marker--software" aria-hidden="true">+</span>
            <span class="company-equip__marker company-equip__marker--hardware" aria-hidden="true">+</span>
            <span class="company-equip__marker company-equip__marker--processing" aria-hidden="true">+</span>
            <span class="company-equip__marker company-equip__marker--mobile" aria-hidden="true">+</span>
            <h3 class="company-equip__feature-heading">Everything you need to run better.</h3>
            <ul class="company-equip__feature-list">
                <li class="company-equip__feature-item company-equip__feature-item--processing">
                    <span class="company-equip__feature-icon">
                        <img src="assets/img/icons/checkMashine.svg" alt="Payment processing icon" />
                    </span>
                    <div class="company-equip__feature-content">
                        <p class="company-equip__feature-title">Payment Processing</p>
                        <a class="company-equip__feature-link" href="payment_processing.html">Explore payment options</a>
                    </div>
                </li>
                <li class="company-equip__feature-item company-equip__feature-item--software">
                    <span class="company-equip__feature-icon">
                        <img src="assets/img/icons/equip-3.svg" alt="POS software icon" />
                    </span>
                    <div class="company-equip__feature-content">
                        <p class="company-equip__feature-title">POS Software</p>
                        <a class="company-equip__feature-link" href="software.html">See software tools</a>
                    </div>
                </li>
                <li class="company-equip__feature-item company-equip__feature-item--hardware">
                    <span class="company-equip__feature-icon">
                        <img src="assets/img/icons/scanner.svg" alt="POS hardware icon" />
                    </span>
                    <div class="company-equip__feature-content">
                        <p class="company-equip__feature-title">POS Hardware</p>
                        <a class="company-equip__feature-link" href="hardware.html">Browse devices</a>
                    </div>
                </li>
                <li class="company-equip__feature-item company-equip__feature-item--mobile">
                    <span class="company-equip__feature-icon">
                        <img src="assets/img/icons/phone.svg" alt="Slimrate mobile app icon" />
                    </span>
                    <div class="company-equip__feature-content">
                        <p class="company-equip__feature-title">Mobile App</p>
                        <a class="company-equip__feature-link" href="software.html">Manage on the go</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
`;

class EquipCompany extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(equipCompanyTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("equip-company-el", EquipCompany);