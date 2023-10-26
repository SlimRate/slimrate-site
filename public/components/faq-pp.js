const miniFAQTemplate = document.createElement('template');
miniFAQTemplate.innerHTML = `
<section class="faq">
            <div class="container">
                <div class="faq-block__left">
                    <h2 class="section-title">FAQ</h2>
                    <p class="section-descr">
                        Haven’t found the answer? <br /> Call us at
                    </p>
                    <a href="tel:(888)9774533">(888)977-4533</a>
                </div>
                <div class="faq-block__right">
                    <div class="faq-question">
                        <p class="faq-question__title">What is a cash discount program?</p>
                        <p class="faq-question__descr">
                        The Cash Discount Program allows merchants to eliminate 100% of processing fees. When a customer pays with a card, our fully automated software will isolate the processing fee included in the price and apply it to the merchant's processing cost.
                        </p>
                    </div>
                    <div class="faq-question">
                        <p class="faq-question__title">How long will onboarding take?</p>
                        <p class="faq-question__descr">
                        Standard onboarding takes about 2-3 business days.
                        </p>
                    </div>
                    <div class="faq-question">
                        <p class="faq-question__title">
                        Is there a credit check?</p>
                        <p class="faq-question__descr">
                        A soft credit check is required each time a merchant submits a merchant application. The information provided on the application, such as your identification and home address, is used to run the credit check. Your credit score is not affected by the check.
                        </p>
                    </div>
                    <div class="faq-question">
                        <p class="faq-question__title">
                        Can I change my pricing plan at any time?</p>
                        <p class="faq-question__descr">
                        Yes.
                        </p>
                    </div>

                    <div class="faq-contacts">
                        <div style=" position: relative; float: right;"><a href="company.html#faq">Learn more →</a>
                        </div>
                        <p class="section-descr">
                            Need more help?
                        </p>
                        <a href="mailto:info@slimrate.com">info@slimrate.com</a>
                        <br />
                        <a href="tel:(888)9774533">(888)977-4533</a>
                    </div>
                </div>
            </div>
        </section>
`;

class FAQ extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(miniFAQTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("mini-faq", FAQ);