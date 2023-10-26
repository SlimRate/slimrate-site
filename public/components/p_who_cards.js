const pWhoCardsTemplate = document.createElement('template');
pWhoCardsTemplate.innerHTML = `
<section class="who">
            <img src="assets/img/bg-blue-wave.svg" alt="" class="who-bg-top">
            <img src="assets/img/bg-blue-wave.svg" alt="" class="who-bg-bottom">
            <div class="container">
                <div class="container-header">
                    <h2 class="section-title">Simple and Secure Payment Processing</h2>
                    <p class="section-descr">
                    </p>
                </div>
                <div class="who-cards">
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-hand-holding-usd"></i></div>
                        <h4 class="who-card__title">Next Day Funding</h4>
                        <p class="who-card__descr">
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-comments-dollar"></i></div>
                        <h4 class="who-card__title">Transparent, Low-Cost Processing</h4>
                        <p class="who-card__descr">
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-file-invoice-dollar"></i></div>
                        <h4 class="who-card__title">E-invoicing </h4>
                        <p class="who-card__descr">
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-sort-amount-up"></i></div>
                        <h4 class="who-card__title">Simplified Batch Processing</h4>
                        <p class="who-card__descr">
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-cash-register"></i></div>
                        <h4 class="who-card__title">Virtual Terminal and Payment Gateway</h4>
                        <p class="who-card__descr">
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-landmark"></i></div>
                        <h4 class="who-card__title">Seamless Transition and Boarding</h4>
                        <p class="who-card__descr">
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-credit-card"></i></div>
                        <h4 class="who-card__title">Cash Discount Program</h4>
                        <p class="who-card__descr">
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-money-check-alt"></i></div>
                        <h4 class="who-card__title">Bill Customers via Email or Text</h4>
                        <p class="who-card__descr">
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-receipt"></i></div>
                        <h4 class="who-card__title">ACH/Check Processing</h4>
                        <p class="who-card__descr">
                        </p>
                    </div>
                    <div class="who-card">
                        <div class="who-card__img"><i class="las la-file-upload"></i></div>
                        <h4 class="who-card__title">Reoccurring Billing</h4>
                        <p class="who-card__descr">
                        </p>
                    </div>
                    <div class="who-card">
                    <div class="who-card__img"><i class="lab la-cc-apple-pay"></i></div>
                    <h4 class="who-card__title">Contactless Payments</h4>
                    <p class="who-card__descr">
                    </p>
                </div>
                <div class="who-card">
                    <div class="who-card__img"><i class="las la-file-upload"></i></div>
                    <h4 class="who-card__title">PCI DSS Compliant</h4>
                    <p class="who-card__descr">
                    </p>
                </div>
                </div>
            </div>
        </section>`;

class PWhoCards extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(pWhoCardsTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("p-who-cards", PWhoCards);