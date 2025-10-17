const miniFAQTemplate = document.createElement('template');
miniFAQTemplate.innerHTML = `
<section class="faq">
            <div class="container faq__layout">
                <div class="faq-block__left">
                    <h2 class="faq-heading">FAQ</h2>
                    <p class="faq-subtitle">Haven’t find the answer?</p>
                    <a class="btn-blue faq-cta" href="company.html#faq">More Answers to Your Questions</a>
                    <div class="faq-contact">
                        <a class="faq-contact__link" href="mailto:info@slimrate.com">info@slimrate.com</a>
                        <a class="faq-contact__link" href="tel:(888)9774533">(888) 977-4533</a>
                    </div>
                </div>
                <div class="faq-block__right">
                    <div class="faq-question">
                        <p class="faq-question__title">Does hardware come with a warranty?</p>
                        <p class="faq-question__descr">
                        Yes. All Slimrate branded hardware carries a 12-month limited warranty.
                        </p>
                    </div>
                    <div class="faq-question">
                        <p class="faq-question__title">Why are you asking me to choose a business type??</p>
                        <p class="faq-question__descr">We offer many customizable solutions for a variety of business types.
                        </p>
                    </div>
                    <div class="faq-question">
                        <p class="faq-question__title">
                        Do you offer equipment leasing?</p>
                        <p class="faq-question__descr">
                        Yes. Please contact your sales representative for details.
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