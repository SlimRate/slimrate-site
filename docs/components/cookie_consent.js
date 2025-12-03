// Cookie Consent Banner Component
const cookieConsentTemplate = document.createElement('template');
cookieConsentTemplate.innerHTML = `
<style>
.cookie-consent {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #1a1a2e;
    color: #ffffff;
    padding: 16px 24px;
    padding-right: 100px; /* Space for Zendesk chat button */
    z-index: 99999;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    line-height: 1.5;
}

.cookie-consent.hidden {
    display: none !important;
}

.cookie-consent__text {
    flex: 1;
    min-width: 280px;
    margin: 0;
}

.cookie-consent__text a {
    color: #407AF4;
    text-decoration: underline;
}

.cookie-consent__text a:hover {
    color: #6b9aff;
}

.cookie-consent__buttons {
    display: flex;
    gap: 12px;
    flex-shrink: 0;
}

.cookie-consent__btn {
    padding: 10px 24px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}

.cookie-consent__btn--accept {
    background: #407AF4;
    color: #ffffff;
}

.cookie-consent__btn--accept:hover {
    background: #3066d4;
}

.cookie-consent__btn--decline {
    background: transparent;
    color: #ffffff;
    border: 1px solid #555;
}

.cookie-consent__btn--decline:hover {
    background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
    .cookie-consent {
        padding-right: 24px;
        padding-bottom: 70px; /* Space for Zendesk on mobile */
    }
}

@media (max-width: 600px) {
    .cookie-consent {
        flex-direction: column;
        text-align: center;
        padding: 20px 16px 80px 16px;
    }
    
    .cookie-consent__buttons {
        width: 100%;
        justify-content: center;
    }
    
    .cookie-consent__btn {
        flex: 1;
        max-width: 150px;
    }
}
</style>

<div class="cookie-consent hidden" id="cookieConsent" role="dialog" aria-labelledby="cookieConsentTitle">
    <p class="cookie-consent__text" id="cookieConsentTitle">
        We use cookies to enhance your browsing experience and analyze site traffic. 
        By clicking "Accept", you consent to our use of cookies. 
        <a href="cookie.html">Learn more</a>
    </p>
    <div class="cookie-consent__buttons">
        <button class="cookie-consent__btn cookie-consent__btn--decline" id="cookieDecline">Decline</button>
        <button class="cookie-consent__btn cookie-consent__btn--accept" id="cookieAccept">Accept</button>
    </div>
</div>
`;

class CookieConsent extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(cookieConsentTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        this.appendChild(this._contents);
        this.initConsent();
    }

    initConsent() {
        const banner = this.querySelector('#cookieConsent');
        const acceptBtn = this.querySelector('#cookieAccept');
        const declineBtn = this.querySelector('#cookieDecline');

        // Check if user already made a choice (use localStorage as primary, cookie as fallback)
        const consent = this.getConsent();
        
        if (!consent) {
            // Show banner if no choice made
            banner.classList.remove('hidden');
            // Disable analytics until consent
            this.disableAnalytics();
        } else if (consent === 'accepted') {
            // Keep banner hidden and enable analytics if previously accepted
            this.enableAnalytics();
        } else {
            // Declined - keep banner hidden
            this.disableAnalytics();
        }

        acceptBtn.addEventListener('click', () => {
            this.setConsent('accepted');
            banner.classList.add('hidden');
            banner.style.display = 'none'; // Force hide
            this.enableAnalytics();
        });

        declineBtn.addEventListener('click', () => {
            this.setConsent('declined');
            banner.classList.add('hidden');
            banner.style.display = 'none'; // Force hide
            this.disableAnalytics();
            this.removeAnalyticsCookies();
        });
    }

    // Use localStorage as primary storage (works with file:// protocol)
    // Fall back to cookies for production
    setConsent(value) {
        try {
            localStorage.setItem('cookie_consent', value);
        } catch (e) {
            // localStorage not available, use cookie
        }
        this.setCookie('cookie_consent', value, 365);
    }

    getConsent() {
        try {
            const localValue = localStorage.getItem('cookie_consent');
            if (localValue) return localValue;
        } catch (e) {
            // localStorage not available
        }
        return this.getCookie('cookie_consent');
    }

    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }

    getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    enableAnalytics() {
        // Re-enable Google Analytics
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    }

    disableAnalytics() {
        // Disable Google Analytics
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
        window['ga-disable-G-42Y6GNN6DE'] = true;
    }

    removeAnalyticsCookies() {
        // Remove Google Analytics cookies
        const gaCookies = ['_ga', '_gat', '_gid', '_ga_42Y6GNN6DE'];
        gaCookies.forEach(cookie => {
            document.cookie = `${cookie}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
            document.cookie = `${cookie}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        });
    }
}

customElements.define('cookie-consent', CookieConsent);
