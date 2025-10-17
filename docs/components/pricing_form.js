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
<img src="assets/img/custom-bg-2.svg" alt="Slimrate product image" class="custom-bg">
<img src="assets/img/bg-top-2.svg" alt="Slimrate product image" class="bg-top">
<img src="assets/img/bg-bot-2.svg" alt="Slimrate product image" class="bg-bottom">
<div class="container contact__layout">
    <div class="contact__left">
        <h2 class="contact__heading">Contact us</h2>
        <p class="contact__tagline">Get in Touch – Your Questions, Our Answers. Let’s Connect!</p>
    </div>
    <div id="toast" class="toast">
        <span id="toast-message"></span>
    </div>
    <div class="contact__right">
    <!-- Removed inline onsubmit to avoid global handler collisions -->
    <form id="pricing-form"  class="contact__form" action="#" novalidate>
            <div class="contact__segment">
                <p class="contact__segment-label">Business type?</p>
                <div class="contact__segment-options" role="radiogroup" aria-label="Business type">
                    <label class="contact__segment-pill">
                        <input type="radio" name="type" value="Restaurant" checked>
                        <span>Restaurant</span>
                    </label>
                    <label class="contact__segment-pill">
                        <input type="radio" name="type" value="Retail">
                        <span>Retail</span>
                    </label>
                </div>
            </div>

            <div class="contact__fields">
                <div class="contact__field contact__field--half">
                    <input type="text" id="first-and-last-name" name="first-and-last-name" placeholder="First and Last Name" required>
                </div>
                <div class="contact__field contact__field--half">
                    <input type="email" id="email" name="email" placeholder="Email" required>
                </div>
                <div class="contact__field contact__field--half">
                    <input type="tel" id="phone-number" name="phone-number" placeholder="Phone Number">
                </div>
                <div class="contact__field contact__field--half">
                    <input type="text" id="index" name="index" placeholder="Zip Code">
                </div>
                <div class="contact__field contact__field--full">
                    <input type="text" id="company" name="company-place-name" placeholder="Company Name">
                </div>
                <!-- Hidden UTM fields (populated dynamically) -->
                <input type="hidden" name="utm_source" id="utm_source" />
                <input type="hidden" name="utm_medium" id="utm_medium" />
                <input type="hidden" name="utm_campaign" id="utm_campaign" />
                <input type="hidden" name="utm_term" id="utm_term" />
                <input type="hidden" name="utm_content" id="utm_content" />
                <input type="hidden" name="gclid" id="gclid" />
                <input type="hidden" name="fbclid" id="fbclid" />
                <input type="hidden" name="firstTouchTs" id="firstTouchTs" />
                <input type="hidden" name="landingPage" id="landingPage" />
                <input type="hidden" name="referrer" id="referrer" />
            </div>
            <div class="contact__actions">
                <button class="btn-red contact__submit" type="submit" id="submitBtn">Send</button>
            </div>
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
        this.initForm();
    }
    initForm() {
        const form = this.querySelector('#pricing-form');
        if (!form) return;
        const submitBtn = form.querySelector('#submitBtn');
        // Populate UTM hidden inputs
        try {
            const utm = (window.getSlimrateUtmData && window.getSlimrateUtmData()) || {};
            ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid','firstTouchTs','landingPage','referrer']
                .forEach(k => { const el = form.querySelector('#'+k); if (el && utm[k]) el.value = utm[k]; });
        } catch(e) { /* silent */ }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic front-end validation (can be extended)
            const fullName = form.querySelector('#first-and-last-name').value.trim();
            const email = form.querySelector('#email').value.trim();
            if (!fullName || !email) {
                showToast('Name and Email are required.', 'error');
                return;
            }
            const formData = {
                requestType: 'newCompany',
                fullName,
                email,
                phoneNumber: form.querySelector('#phone-number').value.trim(),
                companyPlaceType: form.querySelector('input[name="type"]:checked')?.value || '',
                companyPlaceName: form.querySelector('#company').value.trim(),
                zipCode: form.querySelector('#index').value.trim(),
                utm: (window.getSlimrateUtmData && window.getSlimrateUtmData()) || {},
            };
            if (submitBtn) submitBtn.disabled = true;
            // Use fetch (smaller footprint than jQuery $.ajax)
            fetch('https://prod.slimrate.com/v1/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
                .then(r => {
                    if (!r.ok) throw new Error('Network response was not ok');
                    showToast('Thank you! Your request has been received.', 'success');
                    form.reset();
                })
                .catch(() => {
                    showToast('Oops! Something went wrong. Please resubmit the form.', 'error');
                })
                .finally(() => {
                    if (submitBtn) submitBtn.disabled = false;
                });
        });
    }
}
customElements.define('pricing-form', PricingForm);

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