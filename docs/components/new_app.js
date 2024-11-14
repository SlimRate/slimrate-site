const equipCompanyTemplate = document.createElement('template');
equipCompanyTemplate.innerHTML = `
<section class="equip company-equip">
            <img src="assets/img/custom-bg-2.svg" alt="" class="custom-bg">
            <img src="assets/img/bg-top-1.svg" alt="" class="bg-top">
            <img src="assets/img/whiteWave.svg" alt="" class="bg-bottom bg-bottom2" style="z-index: 999">
            <div class="container">
                <div class="block-left">
                    <h2 class="section-title-app">NEW<h1>
                    <h2 class="section-title-app" style="margin-bottom: 20px">PRODUCT<h1>
                    <h2 class="section-title" style="text-align: left">Mobile App <br></h2>
                    <p class="equip-text" style="text-align: left; font-size: 19px">
                        Manage your store from your phone! <br>
                        Convenient management<br>
                        and analysis with Slimrate!
                    </p>
                    <div class="equip-buttons equip-buttons2" >
                        <a href="#get_demo"><button class="form__btn">Try NOW!</button></a>
                    </div>
                </div>

                <div class="block-right block-right2" style=" display: flex;justify-content: center; margin-top: 60px">
                <img src="assets/img/icons/screens.png" alt="" style="height: 100%; ">
                </div>
            </div>
        </section>
`;

class EquipCompany extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(equipCompanyTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("new-app", EquipCompany);