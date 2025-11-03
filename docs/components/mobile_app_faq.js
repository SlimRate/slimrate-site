const mobileAppFaqTemplate = document.createElement('template');
mobileAppFaqTemplate.innerHTML = `
<section class="faq faq--compact mobile-app-faq">
    <div class="container">
        <div class="faq-block__left">
            <h2 class="section-title">Frequently Asked <span>Questions</span></h2>
            <p class="faq-block__lead">Everything you need to know about the Slimrate Business mobile app</p>
            <div class="faq-block__contact">
                <p class="faq-block__hint">Need more help?</p>
                <a class="faq-block__email" href="mailto:info@slimrate.com">info@slimrate.com</a>
                <a class="faq-block__phone" href="tel:(888)9774533">(888) 977-4533</a>
            </div>
        </div>
        <div class="faq-block__right">
            <div class="faq-question">
                <p class="faq-question__title">What devices are supported?</p>
                <p class="faq-question__descr">
                    The Slimrate Business app is available for iOS devices running iOS 13.0 or later and Android devices running Android 6.0 or later. It works on both smartphones and tablets.
                </p>
            </div>
            <div class="faq-question">
                <p class="faq-question__title">Do I need a Slimrate POS to use the app?</p>
                <p class="faq-question__descr">
                    Yes, the Slimrate Business app is designed to work seamlessly with your Slimrate POS system. You'll need an active Slimrate POS subscription and account to log in and access your business data.
                </p>
            </div>
            <div class="faq-question">
                <p class="faq-question__title">Can multiple users access the app?</p>
                <p class="faq-question__descr">
                    Yes, multiple team members can use the app with their individual login credentials. Access permissions can be controlled through your Slimrate POS system settings.
                </p>
            </div>
            <div class="faq-question">
                <p class="faq-question__title">How secure is my data?</p>
                <p class="faq-question__descr">
                    We take security seriously. All data is encrypted during transmission and storage. We use industry-standard security protocols and comply with PCI DSS requirements for payment data protection.
                </p>
            </div>
            <div class="faq-question">
                <p class="faq-question__title">How do I get support if I have issues?</p>
                <p class="faq-question__descr">
                    Our support team is available 24/7. You can contact us at <a href="mailto:info@slimrate.com">info@slimrate.com</a> or call <a href="tel:8889774533">(888) 977-4533</a>. You can also access help resources directly within the app.
                </p>
            </div>
        </div>
    </div>
</section>

<style>
.mobile-app-faq {
    margin-bottom: 165px;
}
</style>
`;

class MobileAppFaq extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(mobileAppFaqTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("mobile-app-faq", MobileAppFaq);
