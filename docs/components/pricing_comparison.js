const pricingComparisonTemplate = document.createElement('template');
pricingComparisonTemplate.innerHTML = `
<section class="pricing-comparison">
    <div class="pricing-comparison-container">
        <div class="pricing-comparison__header">
            <p class="pricing-comparison__subtitle">Want a side-by-side comparison?</p>
            <h2 class="pricing-comparison__title">Compare Plans</h2>
        </div>
        
        <div class="pricing-comparison__table-wrapper">
            <table class="pricing-comparison__table">
                <thead>
                    <tr>
                        <th class="feature-column">Features & Benefits</th>
                        <th class="plan-column">Basic</th>
                        <th class="plan-column">Premium</th>
                        <th class="plan-column">Custom</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Core POS Features -->
                    <tr>
                        <td class="feature-name">POS Terminal with Customer Display</td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark special">✓ MULTIPLE</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Sales & Inventory Management</td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Reporting Dashboard</td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark special">✓ ADVANCED</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Payment Processing Integration</td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Receipt Printer & Cash Drawer</td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    
                    <!-- Support -->
                    <tr>
                        <td class="feature-name">24/7 Customer Support</td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Priority Support</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Dedicated Account Manager</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    
                    <!-- Advanced Features -->
                    <tr>
                        <td class="feature-name">Multi-Location Management</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Multi-User Management</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Advanced Inventory Management</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Customer Loyalty Programs</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Customer Relationship Management (CRM)</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Custom Analytics Dashboards</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    
                    <!-- Enterprise Features -->
                    <tr>
                        <td class="feature-name">Custom Software Development</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Third-Party Integration Support</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Personalized Hardware Configuration</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Dedicated Project Manager</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr>
                        <td class="feature-name">Custom Training & Onboarding</td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="no-check">—</span></td>
                        <td class="plan-feature"><span class="checkmark">✓</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>`;

class PricingComparison extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(pricingComparisonTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}
customElements.define("pricing-comparison", PricingComparison);
