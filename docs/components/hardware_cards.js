const hardwareCardsTemplate = document.createElement('template');
hardwareCardsTemplate.innerHTML = `
<section class="hardware">
            <div class="container">
                <div class="container-header">
                    <h2 class="section-title">Slimrate Hardware</h2>
                </div>
                <div class="hardware-cards">
                    <div class="hardware-card">
                        <div class="hardware-card__img"><img src="assets/img/products/hardware/All-in-one  touchscreen tablet.png" alt="All-in-one touchscreen tablet"></div>
                        <h4 class="hardware-card__title">All-in-one touchscreen tablet </h4>
                        <p class="hardware-card__descr">Quickly access all of Slimrate’s tools and features
                        </p>
                        
                    </div>
                    <div class="hardware-card">
                        <div class="hardware-card__img"><img src="assets/img/products/hardware/Customer facing monitor.png" alt="Customer facing monitor"></div>
                        <h4 class="hardware-card__title">Customer facing monitor </h4>
                        <p class="hardware-card__descr">Ensure order accuracy, allow customer signature and display
                            promotional content
                        </p>
                        
                    </div>
                    <div class="hardware-card">
                        <div class="hardware-card__img"><img src="assets/img/products/hardware/terminal.webp" alt="Payment terminal"></div>
                        <h4 class="hardware-card__title">Payment terminals </h4>
                        <p class="hardware-card__descr">Let your customers pay how they want. Credit or debit. Swipe,
                            dip or tap
                        </p>
                        
                    </div>
                    <div class="hardware-card">
                        <div class="hardware-card__img"><img src="assets/img/products/hardware/Thermal  Printer.png" alt="Thermal printer"></div>
                        <h4 class="hardware-card__title">Thermal printer </h4>
                        <p class="hardware-card__descr">Plug and play printer for easy use
                        </p>
                        
                    </div>
                    <div class="hardware-card">
                        <div class="hardware-card__img"><img src="assets/img/products/hardware/Cash Drawer.png" alt="Cash drawer"></div>
                        <h4 class="hardware-card__title">Cash drawer </h4>
                        <p class="hardware-card__descr">Keep your cash safe and organized
                        </p>
                        
                    </div>
                    <div class="hardware-card">
                        <div class="hardware-card__img"  ><img src="assets/img/products/hardware/Scanner1.png" alt="Barcode scanner"></div>
                        <h4  class="hardware-card__title">Scanner</h4>
                        <p class="hardware-card__descr">Speed up checkout and get your customers on the road
                        </p>
                        
                    </div>
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