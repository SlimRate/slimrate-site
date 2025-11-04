const mobileAppFeaturesTemplate = document.createElement('template');
mobileAppFeaturesTemplate.innerHTML = `
<section class="features mobile-app-features" id="features">
    <div class="container">
        <div class="container-header">
            <h2 class="section-title">Key <span>Features</span></h2>
            <p class="section-descr">Everything you need to manage your business on the go</p>
        </div>
        <div class="products-cards">
            <div class="products-card">
                <div class="products-card__img"><i class="las la-sync"></i></div>
                <h2 class="products-card__title">Real-Time Sync</h2>
                <div class="products-card__descr">Instant synchronization with your POS system. All data updates in real-time across all devices.</div>
            </div>
            <div class="products-card">
                <div class="products-card__img"><i class="las la-boxes"></i></div>
                <h2 class="products-card__title">Inventory Management</h2>
                <div class="products-card__descr">Track stock levels, add or edit products on the go, and receive low stock alerts instantly.</div>
            </div>
            <div class="products-card">
                <div class="products-card__img"><i class="las la-users-cog"></i></div>
                <h2 class="products-card__title">Employee Management</h2>
                <div class="products-card__descr">Monitor staff performance, manage shifts and schedules, track clock-ins and time worked.</div>
            </div>
            <div class="products-card">
                <div class="products-card__img"><i class="las la-chart-line"></i></div>
                <h2 class="products-card__title">Sales Analytics</h2>
                <div class="products-card__descr">Access real-time sales reports, revenue tracking, and comprehensive performance metrics.</div>
            </div>
            <div class="products-card">
                <div class="products-card__img"><i class="las la-credit-card"></i></div>
                <h2 class="products-card__title">Payment Processing</h2>
                <div class="products-card__descr">Accept payments anywhere with multiple payment methods and secure transaction processing.</div>
            </div>
            <div class="products-card">
                <div class="products-card__img"><i class="las la-user-friends"></i></div>
                <h2 class="products-card__title">Customer Management</h2>
                <div class="products-card__descr">Access customer data, view purchase history, and manage loyalty programs seamlessly.</div>
            </div>
            <div class="products-card">
                <div class="products-card__img"><i class="las la-clock"></i></div>
                <h2 class="products-card__title">24/7 Access</h2>
                <div class="products-card__descr">Monitor your business anytime, anywhere with remote management and push notifications.</div>
            </div>
            <div class="products-card">
                <div class="products-card__img"><i class="las la-store-alt"></i></div>
                <h2 class="products-card__title">Multi-Location</h2>
                <div class="products-card__descr">Manage multiple stores, compare performance across locations, and centralize control.</div>
            </div>
        </div>
    </div>
</section>
`;

class MobileAppFeatures extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(mobileAppFeaturesTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("mobile-app-features", MobileAppFeatures);
