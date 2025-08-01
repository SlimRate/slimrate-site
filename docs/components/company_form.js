const companyFormTemplate = document.createElement('template');
companyFormTemplate.innerHTML = `
<section class="contact" id="get_demo">
<style>
.toast {
  visibility: hidden;
  min-width: 250px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%); 
  bottom: 30px; 
  font-size: 17px;
}

.toast.show {
  visibility: visible;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

.toast.success {
  background-color: #4CAF50;
}

.toast.error {
  background-color: #f44336; 
}


.toast.top {
  bottom: auto;
  top: 30px; 
}

@keyframes fadein-top {
  from {top: 0; opacity: 0;} 
  to {top: 30px; opacity: 1;}
}

@keyframes fadeout-top {
  from {top: 30px; opacity: 1;} 
  to {top: 0; opacity: 0;}
}
</style>

<img src="assets/img/custom-bg-2.svg" alt="Slimrate product image" class="custom-bg">
<img src="assets/img/bg-top-2.svg" alt="Slimrate product image" class="bg-top">
<img src="assets/img/bg-bot-2.svg" alt="Slimrate product image" class="bg-bottom">
<div class="container">
    <div class="contact__left">
        <h2 class="section-title">Join</h2>
        <h2 class="section-title">#TeamSlimrate</h2>
        <p class="section-descr">
        We are looking for dedicated, customer-focused team members! Complete our form below and submit. Slimrate will get back to you shortly to discuss your application. Call us for more information or questions you may have.
        </p>
    </div>
    <div id="toast" class="toast">
        <span id="toast-message"></span>
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
                    <input type="input" id="additional-information" name="additional-information"
                        class="form__input">
                    <label for="first-and-last-name">Additional Information</label>
                </div>
            </div>
            <div style="display: flex; align-items: center;">
                <input class="form__btn" type="submit" style="margin-right: 10px;" id="submitBtn">
                <p class="submit-descr">Please fill out this brief application form and we'll contact you shortly.</p>
                </input>
            </div>
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
    const formData = {
        requestType: "newEmployer",
        fullName: $('#first-and-last-name').val(),
        email: $('#email').val(),
        phoneNumber: $('#phone-number').val(),
        message: $('#additional-information').val()
    };

    document.getElementById('submitBtn').disabled = true;
    console.log(JSON.stringify(formData));
    

    $.ajax({
        // url: 'https://dev.slimrate.com/v1/feedback',
        url: 'https://prod.slimrate.com/v1/feedback',
        // url: 'https://test.ds/v1/feedback',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function () {
            showToast("Thank you! Your request has been received.", "success", "bottom");
            document.getElementById('submitBtn').disabled = false;
            $('#my-form').each(function () {
                this.reset();
            });
        },
        error: function () {
            showToast("Oops! Something went wrong. Please resubmit the form.", "error", "bottom");
            document.getElementById('submitBtn').disabled = false;
        }
    });
    return false;
};
const form = document.getElementById('my-form');

function showToast(message, type, position = 'bottom') {
    var toast = document.getElementById("toast");
    var toastMessage = document.getElementById("toast-message");
    
    toastMessage.textContent = message;
    
    toast.className = "toast";

    toast.classList.add("show", type);

    if (position === 'top') {
        toast.classList.add("top");
        toast.style.animation = "fadein-top 0.5s, fadeout-top 0.5s 2.5s";
    } else {
        toast.style.animation = "fadein 0.5s, fadeout 0.5s 2.5s";
    }

    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
    form.reset();
});