const miniFAQTemplate = document.createElement('template');
miniFAQTemplate.innerHTML = 
<section class="faq faq--compact">
    <div class="container">
        <div class="faq-block__left">
            <h2 class="section-title">FAQ</h2>
            <p class="faq-block__lead">Haven't found the answer?</p>
            <a class="faq__cta btn btn-blue" href="company.html#faq">More Answers to Your Questions</a>
            <div class="faq-block__contact">
                <p class="faq-block__hint">Need more help?</p>
                <a class="faq-block__email" href="mailto:info@slimrate.com">info@slimrate.com</a>
                <a class="faq-block__phone" href="tel:(888)9774533">(888)977-4533</a>
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
                <p class="faq-question__title">Why are you asking me to choose a business type?</p>
                <p class="faq-question__descr">We offer many customizable solutions for a variety of business types.
                </p>
            </div>
            <div class="faq-question">
                <p class="faq-question__title">Do you offer equipment leasing?</p>
                <p class="faq-question__descr">
                Yes. Please contact your sales representative for details.
                </p>
            </div>
        </div>
    </div>
</section>
;

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
