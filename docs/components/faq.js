const miniFAQTemplate = document.createElement('template');
miniFAQTemplate.innerHTML = `
<section class="faq">
            <div class="container faq__layout">
                <div class="faq-block__left">
                    <h2 class="section-title">FAQ</h2>
                    <p class="section-descr">
                        Haven’t find the answer? <br /> Call us at
                    </p>
                    <a href="tel:(888)9774533">(888)977-4533</a>
                </div>
                <div class="faq-block__right">
                    <div class="faq-question">
                        <p class="faq-question__title">Who is Slimrate for?</p>
                        <p class="faq-question__descr">
                        Slimrate POS caters primarily to the restaurant and retail sectors, offering tailored solutions for these industries. However, our commitment to versatility means that we also provide specialized solutions for various other business types. To discover the ideal Slimrate solution for your business, we recommend connecting with one of our agents. They'll work with you to determine how our system can best meet your specific needs, ensuring you get the most out of your Slimrate experience.
                        </p>
                    </div>
                    <div class="faq-question">
                        <p class="faq-question__title">Is Slimrate POS cloud-based?</p>
                        <p class="faq-question__descr">
                        Indeed, Slimrate POS operates as a cloud-based solution. This means that your Slimrate accounts are continuously updated in real-time, and you can access them from virtually anywhere at any time. Whether you're in your store, at home, or on the go, you can seamlessly connect to your Slimrate POS system to oversee your business operations, make crucial decisions, and stay in control no matter where you are.
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