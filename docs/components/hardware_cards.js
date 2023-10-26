const hardwareCardsTemplate = document.createElement('template');
hardwareCardsTemplate.innerHTML = `
<section class="hardware">
            <div class="container">
                <div class="container-header">
                    <h2 class="section-title">Slimrate Hardware</h2>
                </div>
                <div class="hardware-cards">
                <div class="swiper-slide">
                    <div class="hardware-card">
                        <div class="hardware-card__img"><img src="assets/img/products/hardware/stand.webp"></div>
                        <h4 class="hardware-card__title">All-in-one touchscreen tablet </h4>
                        <p class="hardware-card__descr">Quickly access all of Slimrate’s tools and features
                        </p>
                        
                    </div>
                    </div>
                    <div class="swiper-slide">
                    <div class="hardware-card">
                        <div class="hardware-card__img"><img src="assets/img/products/hardware/cfamon.png"></div>
                        <h4 class="hardware-card__title">Customer facing monitor </h4>
                        <p class="hardware-card__descr">Ensure order accuracy, allow customer signature and display
                            promotional content
                        </p>
                        
                    </div>
                    </div>
                    <div class="swiper-slide">
                    <div class="hardware-card">
                        <div class="hardware-card__img"><img src="assets/img/products/hardware/terminal.webp"></div>
                        <h4 class="hardware-card__title">Payment terminals </h4>
                        <p class="hardware-card__descr">Let your customers pay how they want. Credit or debit. Swipe,
                            dip or tap
                        </p>
                        
                    </div>
                    </div>
                    <div class="swiper-slide">
                    <div class="hardware-card">
                        <div class="hardware-card__img"><img src="assets/img/products/hardware/printert.webp"></div>
                        <h4 class="hardware-card__title">Thermal printer </h4>
                        <p class="hardware-card__descr">Plug and play printer for easy use
                        </p>
                        
                    </div>
                    </div>
                    <div class="swiper-slide">
                    <div class="hardware-card">
                        <div class="hardware-card__img"><img src="assets/img/products/hardware/printeri.webp"></div>
                        <h4 class="hardware-card__title">Impact printer </h4>
                        <p class="hardware-card__descr">Durable design, suitable for kitchen applications
                        </p>
                        
                    </div>
                    </div>
                    <div class="swiper-slide">
                    <div class="hardware-card">
                        <div class="hardware-card__img"><img src="assets/img/products/hardware/register.png"></div>
                        <h4 class="hardware-card__title">Cash drawer </h4>
                        <p class="hardware-card__descr">Keep your cash safe and organized
                        </p>
                        
                    </div>
                    </div>
                    <div class="swiper-slide">
                    <div class="hardware-card">
                        <div class="hardware-card__img"  ><img src="assets/img/products/hardware/scanner.png"></div>
                        <h4  class="hardware-card__title">Scanner</h4>
                        <p class="hardware-card__descr">Speed up checkout and get your customers on the road
                        </p>
                        
                    </div>
                    </div>
                    <!-- <div class="hardware-card__empty"></div> -->
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