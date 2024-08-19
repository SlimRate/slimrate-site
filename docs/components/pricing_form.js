const pricingFormTemplate = document.createElement('template');
pricingFormTemplate.innerHTML = `
<section class="contact" id="get_demo">
<img src="assets/img/custom-bg-2.svg" alt="" class="custom-bg">
<img src="assets/img/bg-top-2.svg" alt="" class="bg-top">
<img src="assets/img/bg-bot-2.svg" alt="" class="bg-bottom">
<div class="container">
    <div class="contact__left">
        <h2 class="section-title">Contact us</h2>
        <p class="section-descr">Get in Touch - Your Questions, Our Answers. 
        Let's Connect!
        </p>
    </div>
    <div class="contact__right">
        <form id="my-form"  class="contact__form form" action="#" onsubmit="onSubmit();return false" >
            <div class="form__select">
                <h4 class="form__select-title">Business type?</h4>
                <div class="form__select-body">
                    <input type="radio" name="type" class="form__select-item form_type" id="restaurant"
                        value="Restaurant" checked="">
                    <label for="restaurant">Restaurant</label>
                    <input type="radio" name="type" class="form__select-item form_type" id="retail"
                        value="Retail">
                    <label for="retail">Retail</label>
                </div>
            </div>
            

            <div class="form-inputs">
                <div class="form__input-body">
                    <input type="input" id="first-and-last-name" name="first-and-last-name"
                        class="form__input">
                    <label for="first-and-last-name">First and Last Name</label>
                </div>
                <div class="form__input-body">
                    <input type="input" id="email" name="email" class="form__input">
                    <label for="email">Email</label>
                </div>
                <div class="form__input-body">
                    <input type="input" id="phone-number" name="phone-number" class="form__input">
                    <label for="phone-number">Phone Number</label>
                </div>
                <div class="form__input-body">
                    <input type="input" id="company" name="company-place-name" class="form__input">
                    <label for="company">Company Name</label>
                </div>
                <div class="form__input-body">
                    <input type="input" id="index" name="index" class="form__input">
                    <label for="index">Zip Code</label>
                </div>
            </div>
            <input class="form__btn" type="submit">
            </input>
        </form>
       <!-- <p class="contact__privacy">By requesting a demo, you agree to receive automated text messages from
            Slimrate. We’ll handle your info according to our <a href="privacy.html">privacy statement.</a>
        </p> -->
    </div>
</div>
</section>`;

class PricingForm extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(pricingFormTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("pricing-form", PricingForm);
function onSubmit() {
    const formData = {
        requestType: "test",
        fullName: $('#first-and-last-name').val(),
        email: $('#email').val(),
        phoneNumber: $('#phone-number').val(),
        companyPlaceType: $('input[name="type"]:checked').val(),
        companyPlaceName: $('#company-place-name').val(),
        zipCode: $('#index').val()
    };

    console.log(JSON.stringify(formData));

    $.ajax({
        url: 'https://dev.slimrate.com/v1/feedback',
        // url: 'https://prod.slimrate.com/v1/feedback',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function () {
            alert('Thank you! We will get back to you shortly');
            $('#my-form').each(function () {
                this.reset();
            });
        }
    });

    return false;
};
const form = document.getElementById('my-form');

form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
    form.reset();
});