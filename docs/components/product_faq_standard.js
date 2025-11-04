// Product FAQ Components - Standard FAQ design with individual product questions
// Each product has its own custom element with product-specific questions from product-pages.js

const createProductFAQTemplate = (productId) => {
  const template = document.createElement('template');
  const product = window.productPagesData?.[productId];
  
  if (!product || !product.faq || !product.faq.show) {
    return template;
  }

  const questions = product.faq.questions || [];
  const questionsHTML = questions.map(q => `
    <div class="faq-question">
      <p class="faq-question__title">${q.question}</p>
      <p class="faq-question__descr">${q.answer}</p>
    </div>
  `).join('');

  template.innerHTML = `
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
          ${questionsHTML}
        </div>
      </div>
    </section>
  `;
  
  return template;
};

// SR Falcon FAQ
class SRFalconFAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('sr-falcon');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("sr-falcon-faq", SRFalconFAQ);

// SR Swan FAQ
class SRSwanFAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('sr-swan');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("sr-swan-faq", SRSwanFAQ);

// SR155 Duo FAQ
class SR155DuoFAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('sr155-duo');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("sr155-duo-faq", SR155DuoFAQ);

// SR155 Solo FAQ
class SR155SoloFAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('sr155-solo');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("sr155-solo-faq", SR155SoloFAQ);

// A35 FAQ
class A35FAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('a35');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("a35-faq", A35FAQ);

// A920 FAQ
class A920FAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('a920');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("a920-faq", A920FAQ);

// SR-TRP1 FAQ
class SRTRP1FAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('sr-trp1');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("sr-trp1-faq", SRTRP1FAQ);

// SR-DS1 FAQ
class SRDS1FAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('sr-ds1');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("sr-ds1-faq", SRDS1FAQ);

// SR-WLHS1 FAQ
class SRWLHS1FAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('sr-wlhs1');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("sr-wlhs1-faq", SRWLHS1FAQ);

// SR-WHS1 FAQ
class SRWHS1FAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('sr-whs1');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("sr-whs1-faq", SRWHS1FAQ);

// Digital Scale FAQ
class DigitalScaleFAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('digital-scale');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("digital-scale-faq", DigitalScaleFAQ);

// AIScale POS S625 FAQ
class AIScalePOSS625FAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('aiscale-pos-s625');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("aiscale-pos-s625-faq", AIScalePOSS625FAQ);

// AIScale Label Printing S130 FAQ
class AIScaleLabelPrintingS130FAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('aiscale-label-printing-s130');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("aiscale-label-printing-s130-faq", AIScaleLabelPrintingS130FAQ);

// SR-410 FAQ
class SR410FAQ extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    const template = createProductFAQTemplate('sr-410');
    this._contents.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
  }
}
customElements.define("sr-410-faq", SR410FAQ);
