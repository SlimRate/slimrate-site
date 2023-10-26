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
                        <p class="faq-question__title">Who is Slimrate for?</p>
                        <p class="faq-question__descr">
                            Slimrate POS is built specifically for restaurant and retail applications; however, Slimrate
                            offers many specialized solutions for a variety of business types. Please speak with an
                            agent to find the best solution for your business.
                        </p>
                    </div>
                    <div class="faq-question">
                        <p class="faq-question__title">Is Slimrate POS cloud-based?</p>
                        <p class="faq-question__descr">
                            Yes. As a cloud-based solution, Slimrate accounts update in real time and can be accessed
                            anytime, anywhere.
                        </p>
                    </div>
                    <div class="faq-question">
                        <p class="faq-question__title">
                            What kind of hardware is needed for the POS system?
                        </p>
                        <p class="faq-question__descr">
                            All-in-one touchscreen tablet, thermal or impact printer, and a payment terminal.
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