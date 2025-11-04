const miniFAQTemplate = document.createElement('template');
miniFAQTemplate.innerHTML = `
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
                <p class="faq-question__title">Can I export reports?</p>
                <p class="faq-question__descr">
                    Yes.
                </p>
            </div>
            <div class="faq-question">
                <p class="faq-question__title">What do I do if I need support?</p>
                <p class="faq-question__descr">
                Please call <a style="color:black;font-weight:bold" href="tel:+18889774533">(888)
                977-4533</a> or email us at <a
                style="color:black;font-weight:bold"
                href="mailto:info@slimrate.com">info@slimrate.com</a>.
                </p>
            </div>
            <div class="faq-question">
                <p class="faq-question__title">
                Will I be able to transfer my current data?</p>
                <p class="faq-question__descr">
                Yes. In most cases, data from your old POS can be imported.
                </p>
            </div>
            <div class="faq-question">
                <p class="faq-question__title">
                Is it possible to operate POS software from a home desktop?</p>
                <p class="faq-question__descr">
                Slimrate is cloud-based. You can access the dashboard from anywhere in the world as long as you have internet access.
                </p>
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
