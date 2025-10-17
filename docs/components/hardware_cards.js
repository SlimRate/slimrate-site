const hardwareCardsTemplate = document.createElement('template');
hardwareCardsTemplate.innerHTML = `
<section class="hardware">
    <div class="container">
        <div class="container-header">
            <h2 class="section-title">Slimrate Hardware</h2>
        </div>
        <div class="hardware-cards">
            <div class="hardware-card hardware-card--tablet">
                <div class="hardware-card__meta">
                    <span class="hardware-card__sku">SR155 DUO</span>
                    <span class="hardware-card__category">TABLET</span>
                </div>
                <h4 class="hardware-card__title">All-in-one touchscreen tablet</h4>
                <p class="hardware-card__descr">Quickly access all of Slimrate’s tools and features.</p>
                <a class="hardware-card__cta btn-red" href="hardware.html">More Tablets</a>
            </div>
            <div class="hardware-card hardware-card--display">
                <div class="hardware-card__meta">
                    <span class="hardware-card__sku">CUSTOMER FACING DISPLAY</span>
                    <span class="hardware-card__category">DISPLAY</span>
                </div>
                <h4 class="hardware-card__title">Customer facing monitor</h4>
                <p class="hardware-card__descr">Ensure order accuracy, allow customer signature and display promotional content.</p>
                <a class="hardware-card__cta btn-red" href="hardware.html">More Displays</a>
            </div>
            <div class="hardware-card hardware-card--terminal">
                <div class="hardware-card__meta">
                    <span class="hardware-card__sku">A920</span>
                    <span class="hardware-card__category">TERMINAL</span>
                </div>
                <h4 class="hardware-card__title">Payment terminals</h4>
                <p class="hardware-card__descr">Let your customers pay how they want. Credit or debit. Swipe, dip or tap.</p>
                <a class="hardware-card__cta btn-red" href="hardware.html">More Terminals</a>
            </div>
            <div class="hardware-card hardware-card--printer">
                <div class="hardware-card__meta">
                    <span class="hardware-card__sku">SR-TRP1</span>
                    <span class="hardware-card__category">PRINTER</span>
                </div>
                <h4 class="hardware-card__title">Thermal printer</h4>
                <p class="hardware-card__descr">Plug and play printer for easy use.</p>
                <a class="hardware-card__cta btn-red" href="hardware.html">More Printers</a>
            </div>
            <div class="hardware-card hardware-card--drawer">
                <div class="hardware-card__meta">
                    <span class="hardware-card__sku">SR-410</span>
                    <span class="hardware-card__category">CASH DRAWER</span>
                </div>
                <h4 class="hardware-card__title">Cash drawer</h4>
                <p class="hardware-card__descr">Keep your cash safe and organized.</p>
                <a class="hardware-card__cta btn-red" href="hardware.html">More Cash Drawers</a>
            </div>
            <div class="hardware-card hardware-card--scanner">
                <div class="hardware-card__meta">
                    <span class="hardware-card__sku">SR-WHS1</span>
                    <span class="hardware-card__category">SCANNER</span>
                </div>
                <h4 class="hardware-card__title">Scanner</h4>
                <p class="hardware-card__descr">Speed up checkout and get your customers on the road.</p>
                <a class="hardware-card__cta btn-red" href="hardware.html">More Scanners</a>
            </div>
        </div>
    </div>
</section>`;

class HardwareCards extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(hardwareCardsTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("hardware-cards", HardwareCards);