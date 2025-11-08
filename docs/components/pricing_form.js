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
  transform: translateX(-50%); /* Center horizontally */
  bottom: 30px; /* Bottom position */
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
  background-color: #4CAF50; /* Green for success */
}

.toast.error {
  background-color: #f44336; /* Red for error */
}

/* Toast for top of page */
.toast.top {
  bottom: auto;
  top: 30px; /* Top position */
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
<div class="container">
    <div class="contact__left">
        <div class="contact__left-inner">
            <h2 class="section-title">Contact us</h2>
            <p class="section-descr">Get in Touch - Your Questions, Our Answers. 
            Let's Connect!
            </p>
        </div>
    </div>
    <div id="toast" class="toast">
        <span id="toast-message"></span>
    </div>
    <div class="contact__right">
    <!-- Removed inline onsubmit to avoid global handler collisions -->
    <form id="pricing-form"  class="contact__form form" action="#" novalidate>
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
            <input class="form__btn" type="submit" id="submitBtn" value="Submit">
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
    
    // Remove all previous classes
    toast.className = "toast";

    // Add class for success or error style
    toast.classList.add("show", type);

    // Choose toast position (top or bottom)
    if (position === 'top') {
        toast.classList.add("top");
        toast.style.animation = "fadein-top 0.5s, fadeout-top 0.5s 2.5s";
    } else {
        toast.style.animation = "fadein 0.5s, fadeout 0.5s 2.5s";
    }

    // Remove toast after 3 seconds
    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}