const hAdvantagesTemplate = document.createElement('template');
hAdvantagesTemplate.innerHTML = `
<section class="advantages advantages-allPage" style="padding-top: 60px">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        .contact-info {
            display: flex;
            align-items: center;
            margin-top: 10px;
            font-size: 20px;
            line-height: 22px;
            font-weight: 400;
        }

        .contact-info i {
            font-size: 20px;
            margin-right: 10px;
        }
    </style>
    <div class="container">
        <div class="container-header">
            <h2 class="section-title" style="color: #0066CC">Confirmed</h2>
            <p class="section-text" style="margin-bottom: 20px">
                We care about your safety! Our Slimrate Salesmen will provide all the necessary information about our product. 
                Ask any question to your personal Slimrate Salesman:
            </p>
    
            <p class="user-info" style="line-height: 22px; font-weight: 400; font-size: 20px;"></p>
    
            <div class="contact-info">
                <i class="fa-solid fa-address-book"></i>
                <p class="user-phone"></p>
            </div>
    
            <div class="contact-info">
                <i class="fa-solid fa-at"></i>
                <p class="user-email"></p>
            </div>
        </div>
    </div>
</section>`;

class hEmployerConfirm extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(hAdvantagesTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        const userName = this.getAttribute('name') || 'No Name Provided';
        const userId = this.getAttribute('id') || 'No ID Provided';
        const userPhone = this.getAttribute('phone') || 'No Phone Provided';
        const userEmail = this.getAttribute('email') || 'No Email Provided';

        this._contents.querySelector('.user-info').textContent = `${userName} (ID: ${userId})`;
        this._contents.querySelector('.user-phone').textContent = userPhone;
        this._contents.querySelector('.user-email').textContent = userEmail;

        this.appendChild(this._contents);
    }
}

customElements.define("h-employer-confirm", hEmployerConfirm);
