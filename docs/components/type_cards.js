
const typesTemplate = document.createElement('template');
// TODO: add right text
typesTemplate.innerHTML = `
<section class="types">
    <div class="container">
        <div class="types-card">
            <div class="types-card__img">
                <img src="assets/img/rest.jpeg" alt="">
            </div>
            <div class="types-card__text">
                <h4 class="section-title">Business Types</h4>
                <p class="section-descr">Specifically designed for retail, restaurant and specialty
                    applications. </p>
            </div>
        </div>
        <div class="types-card">
            <div class="types-card__img">
                <img src="assets/img/retail.jpeg" alt="">
            </div>
            <div class="types-card__text">
                <h4 class="section-title">Payment Proseccing</h4>
                <p class="section-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                    vulputate blandit fermentum. Duis tempor nec tortor sed ultricies. Ut facilisis condimentum
                    purus, vestibulum porta sapien ornare at. Donec facilisis vel arcu ac
                    dictum. Ut pretium venenatis interdum. Vivamus odio velit, ultricies ac dolor et, venenatis
                    fermentum odio.</p>
            </div>
        </div>
    </div>
</section>`;

class Types extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(typesTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("type-cards", Types);