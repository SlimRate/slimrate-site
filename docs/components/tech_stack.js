const techStackTemplate = document.createElement('template');
techStackTemplate.innerHTML = `
<section class="tech-stack">
<div class="container">
    <div class="tech-stack__left">
        <h2 class="section-title">Our
            <span style="color:#ef2b23;">Technological stack</span>
        </h2>
        <p class="section-descr">We have all the necessary specialists onboard — from business analysts and project managers, to UX/UI designers, to engineers with a broad technological skill set.
        </p>
    </div>
    <div class="tech-stack__right">
        <div class="tech-stack-cards swiper">
            <div class="tech-stack-swiper swiper-wrapper">
                <div class="swiper-slide">
                    <div class="tech-stack-card">
                        <!-- <div class="we-support-card__img"><img src="assets/img/support-icons/emv.svg" alt="Slimrate product image">
                        </div> -->
                        <h4 class="we-support-card__title">C++</h4>
                        <p class="tech-stack-card__descr">Solutions:
                            <br> IoT, AR, VR, AdTech, Blockchain
                            <br> Services:
                            <br> Mobile, Databases, Desktop applications
                            <br> Domains:
                            <br> Healthcare, Automotive, Media, Education, Fintech</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="tech-stack-card">
                        <!-- <div class="we-support-card__img"><img src="assets/img/support-icons/emv.svg" alt="Slimrate product image">
                        </div> -->
                        <h4 class="we-support-card__title">PHP</h4>
                        <p class="tech-stack-card__descr">Solutions:
                            <br> IoT, E-commerce, AdTech, Blockchain
                            <br> Services:
                            <br> Back-end web development
                            <br> Domains:
                            <br> Healthcare, Media, Automotive, Education, Fintech</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="tech-stack-card">
                        <!-- <div class="we-support-card__img"><img src="assets/img/support-icons/emv.svg" alt="Slimrate product image">
                        </div> -->
                        <h4 class="we-support-card__title">Python</h4>
                        <p class="tech-stack-card__descr">Solutions:
                            <br> IoT, AR, VR, Blockchain, E-commerce
                            <br> Services:
                            <br> Back-end web development, desktop application development
                            <br> Domains:
                            <br> Fintech, Healthcare, Automotive, Media, Education</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="tech-stack-card">
                        <!-- <div class="we-support-card__img"><img src="assets/img/support-icons/emv.svg" alt="Slimrate product image">
                        </div> -->
                        <h4 class="we-support-card__title">Java</h4>
                        <p class="tech-stack-card__descr">Solutions:
                            <br> IoT, E-commerce, AdTech, AR, VR, Blockchain
                            <br> Services:
                            <br> Back-end web development, desktop application development
                            <br> Domains:
                            <br> Automotive, Fintech, Education, Healthcare, Media</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="tech-stack-card">
                        <!-- <div class="we-support-card__img"><img src="assets/img/support-icons/emv.svg" alt="Slimrate product image">
                        </div> -->
                        <h4 class="we-support-card__title">Swift</h4>
                        <p class="tech-stack-card__descr">Solutions:
                            <br> IoT, VR, AR, Games, E-commerce, CRM, ERP
                            <br> Services:
                            <br> Mobile application development, front-end and back-end web development
                            <br> Domains:
                            <br> Education, Automotive, Fintech, Games, Media, Healthcare</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="tech-stack-card">
                        <!-- <div class="we-support-card__img"><img src="assets/img/support-icons/emv.svg" alt="Slimrate product image">
                        </div> -->
                        <h4 class="we-support-card__title">.NET</h4>
                        <p class="tech-stack-card__descr">Solutions:
                            <br> VR, AR, IoT, E-commerce, CRM, ERP, Games
                            <br> Services:
                            <br> Web, mobile and desktop application development
                            <br> Domains:
                            <br> Games, Media, Education, Automotive, Fintech, Healthcare</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="tech-stack-card">
                        <!-- <div class="we-support-card__img"><img src="assets/img/support-icons/emv.svg" alt="Slimrate product image">
                        </div> -->
                        <h4 class="we-support-card__title">Unity</h4>
                        <p class="tech-stack-card__descr">Solutions:
                            <br> VR, AR, 2D and 3D Games
                            <br> Services:
                            <br> Mobile and desktop application development
                            <br> Domains:
                            <br> Games, Media, Education, Automotive</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="tech-stack-card">
                        <!-- <div class="we-support-card__img"><img src="assets/img/support-icons/emv.svg" alt="Slimrate product image">
                        </div> -->
                        <h4 class="we-support-card__title">Xamarin</h4>
                        <p class="tech-stack-card__descr">Solutions:
                            <br> VR, AR, IoT, E-commerce, CRM, ERP, Games
                            <br> Services:
                            <br> Mobile application development
                            <br> Domains:
                            <br> Games, Media, Education, Automotive, Fintech, Healthcare</p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="tech-stack-card">
                        <!-- <div class="we-support-card__img"><img src="assets/img/support-icons/emv.svg" alt="Slimrate product image">
                        </div> -->
                        <h4 class="we-support-card__title">
                            Ruby on Rails</h4>
                        <p class="tech-stack-card__descr">Solutions:
                            <br> ERP, CRM, Blockchain, E-commerce
                            <br> Services:
                            <br> Web application development
                            <br> Domains:
                            <br> Media, Education, Automotive, Fintech, Healthcare</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>`;

class TechStack extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(techStackTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
        if (window.fixAssetPaths) window.fixAssetPaths(this);
    }
}
customElements.define("tech-stack", TechStack);