const pricingFormTemplate = document.createElement('template');
pricingFormTemplate.innerHTML = `
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
  transform: translateX(-50%); /* Центрирование по ширине */
  bottom: 30px; /* Нижнее расположение */
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
  background-color: #4CAF50; /* Зеленый для успеха */
}

.toast.error {
  background-color: #f44336; /* Красный для ошибки */
}

/* Тост для верхней части страницы */
.toast.top {
  bottom: auto;
  top: 30px; /* Верхнее расположение */
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
    <div id="toast" class="toast">
        <span id="toast-message"></span>
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
            <input class="form__btn" type="submit" id="submitBtn">
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
        requestType: "newCompany",
        fullName: $('#first-and-last-name').val(),
        email: $('#email').val(),
        phoneNumber: $('#phone-number').val(),
        companyPlaceType: $('input[name="type"]:checked').val(),
        companyPlaceName: $('#company').val(),
        zipCode: $('#index').val()
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
    
    // Удаляем все предыдущие классы
    toast.className = "toast";

    // Добавляем класс для стиля успеха или ошибки
    toast.classList.add("show", type);

    // Выбираем позицию тоста (верх или низ)
    if (position === 'top') {
        toast.classList.add("top");
        toast.style.animation = "fadein-top 0.5s, fadeout-top 0.5s 2.5s";
    } else {
        toast.style.animation = "fadein 0.5s, fadeout 0.5s 2.5s";
    }

    // Убираем тост через 3 секунды
    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

form.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
    form.reset();
});