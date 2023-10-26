const companyFormTemplate = document.createElement('template');
companyFormTemplate.innerHTML = `
<section class="contact" id="get_demo">
<img src="assets/img/custom-bg-2.svg" alt="" class="custom-bg">
<img src="assets/img/bg-top-2.svg" alt="" class="bg-top">
<img src="assets/img/bg-bot-2.svg" alt="" class="bg-bottom">
<div class="container">
    <div class="contact__left">
        <h2 class="section-title">Join #TeamSlimrate</h2>
        <p class="section-descr">
        </p>
    </div>
    <div class="contact__right">
        <form id="my-form"  class="contact__form form" action="#" onsubmit="onSubmit();return false" >
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
                    <label for="company">Company/Place Name</label>
                </div>
                <div class="form__input-body">
                    <input type="input" id="subject" name="subject" class="form__input">
                    <label for="subject">Subject</label>
                </div>
                <div class="form__input-body">
                    <input type="input" id="additional-information" name="additional-information"
                        class="form__input">
                    <label for="first-and-last-name">Additional Information</label>
                </div>
            </div>
            <input class="form__btn" type="submit">
            </input>
        </form>
        
    </div>
</div>
</section>`;

class CompanyForm extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(companyFormTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("company-form", CompanyForm);
function onSubmit() {
    console.log($('#my-form').serialize());

    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbxFduAr5KBCWk6z7QEMrao6oity5QVlKbTZq9CcMwO7D0lTsPyxBjggd4LfgNQPBKwT/exec',
        type: 'post',
        data: $('#my-form').serialize(),
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