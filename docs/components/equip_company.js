const equipCompanyTemplate = document.createElement('template');
equipCompanyTemplate.innerHTML = `
<section class="equip company-equip allinone" id="slimrate-pos">
    <img src="assets/img/custom-bg-1.svg" alt="Slimrate decorative background" class="custom-bg">
    <img src="assets/img/bg-top-1.svg" alt="Slimrate decorative background" class="bg-top">
    <img src="assets/img/bg-bot-1.svg" alt="Slimrate decorative background" class="bg-bottom">
    <div class="container allinone__wrap">
        <div class="block-left allinone__card">
            <div class="bg-decor-left"></div>
            <h2 class="allinone__title">Slimrate POS:<span>Your All-in-One Business Solution</span></h2>
            <p class="allinone__text">
                Streamline your business operations with Slimrate POS. From accepting payments to managing employees and
                inventory, our system simplifies it all. Get insights with powerful reporting, and customize it to your unique
                needs. We prioritize security and reliability, so you can focus on growth.
            </p>
            <p class="allinone__text">
                Experience the difference with Slimrate POS – your path to a smarter, more efficient, and profitable future.
                Start today!
            </p>
            <a href="#get_demo" class="btn btn-red allinone__cta">Get Demo</a>
        </div>
        <div class="block-right">
            <div class="bg-decor-right"></div>
            <div class="equip-card">
                <img src="assets/img/icons/checkMashine.svg" alt="Slimrate payment terminal" class="equip-img">
                <img src="assets/img/icons/scanner.svg" alt="Slimrate barcode scanner" class="equip-img">
                <img src="assets/img/icons/equip-3.svg" alt="Slimrate POS station" class="equip-img">
                <img src="assets/img/icons/phone.svg" alt="Slimrate mobile app" class="equip-img">

                <div class="equip-img equip-label equip-label--processing">
                    <a href="payment_processing.html">Payment Processing</a><a href="payment_processing.html"><img src="assets/img/icons/equip-btn.svg" alt="Open payment processing" class="equip-btn"></a>
                </div>
                <div class="equip-img equip-label equip-label--software">
                    <a href="software.html">POS Software</a><a href="software.html"><img src="assets/img/icons/equip-btn.svg" alt="Open POS software" class="equip-btn"></a>
                </div>
                <div class="equip-img equip-label equip-label--hardware">
                    <a href="hardware.html">POS Hardware</a><a href="hardware.html"><img src="assets/img/icons/equip-btn.svg" alt="Open POS hardware" class="equip-btn"></a>
                </div>
                <div class="equip-img equip-label equip-label--mobile">
                    <a href="mobile-app.html">Mobile App</a><a href="mobile-app.html"><img src="assets/img/icons/equip-btn.svg" alt="Open mobile app info" class="equip-btn"></a>
                </div>
            </div>
            <img src="assets/img/circle.svg" alt="Slimrate decorative circle" class="block-img-circle">
        </div>
    </div>
</section>
`;

if (!customElements.get("equip-company-el")) {
    class EquipCompany extends HTMLElement {
        constructor() {
            super();
            this._contents = new DocumentFragment();
            this._contents.appendChild(equipCompanyTemplate.content.cloneNode(true));
        }
        connectedCallback() {
            this.appendChild(this._contents);
            this.setRandomBackgrounds();
        }
        setRandomBackgrounds() {
            const bgImages = [
                '1669.jpg',
                '16939.jpg',
                '19205.jpg',
                '1967.jpg',
                '2149081077.jpg',
                '41208.jpg',
                '5204.jpg',
                'ChatGPT Image 16 ╨╕╤Ä╨╜. 2025 ╨│ 2.png',
                'Frame 33738020.png',
                'Frame 33738021.png',
                'pexels-imin-technology-276315592-12935050 ╨║╨╛╨┐╨╕╤Å.png',
                'pexels-imin-technology-276315592-12935051.png',
                'pexels-imin-technology-276315592-12935064.png',
                'pexels-imin-technology-276315592-12935069 2.png',
                'slim 2.png'
            ];
            
            const blockLeft = this.querySelector('.block-left');
            const blockRight = this.querySelector('.block-right');
            
            if (blockLeft) {
                const bgDecorLeft = blockLeft.querySelector('.bg-decor-left');
                if (bgDecorLeft) {
                    const randomLeft = bgImages[Math.floor(Math.random() * bgImages.length)];
                    bgDecorLeft.style.backgroundImage = `url('assets/BGs/${randomLeft}')`;
                }
            }
            
            if (blockRight) {
                const bgDecorRight = blockRight.querySelector('.bg-decor-right');
                if (bgDecorRight) {
                    const randomRight = bgImages[Math.floor(Math.random() * bgImages.length)];
                    bgDecorRight.style.backgroundImage = `url('assets/BGs/${randomRight}')`;
                }
            }
        }
    }

    customElements.define("equip-company-el", EquipCompany);
}