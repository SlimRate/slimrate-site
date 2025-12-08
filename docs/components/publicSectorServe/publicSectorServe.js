const publicSectorServeTemplate = document.createElement('template');
publicSectorServeTemplate.innerHTML = `
<section class="public-sector-serve">
    <div class="container">
        <div class="container-header">
            <h2 class="section-title">Who We Serve</h2>
            <p class="section-descr">Slimrate supports organizations across the public-sector landscape</p>
        </div>
        
        <div class="serve-cards">
            <div class="serve-card serve-card--left" id="government">
                <div class="serve-card__content">
                    <h3 class="serve-card__title"><i class="las la-city"></i> Municipal & County Governments</h3>
                    <p class="serve-card__descr">Streamline fee collection and revenue management across departments</p>
                    <p class="serve-card__text">From utility billing and permit fees to parking and code enforcement, municipal governments handle thousands of daily transactions across multiple departments. Slimrate provides a unified platform that consolidates all payment touchpoints, enables department-level permissions, and delivers real-time financial visibility for budget officers and administrators. Our GL code mapping and fund accounting support ensure seamless integration with existing financial systems.</p>
                </div>
                <div class="serve-card__icon">
                    <i class="las la-city"></i>
                </div>
            </div>

            <div class="serve-card serve-card--right" id="k12">
                <div class="serve-card__icon">
                    <i class="las la-school"></i>
                </div>
                <div class="serve-card__content">
                    <h3 class="serve-card__title"><i class="las la-school"></i> K–12 School Districts</h3>
                    <p class="serve-card__descr">Cafeterias, bookstores, and student services all in one platform</p>
                    <p class="serve-card__text">School districts need simple, reliable payment solutions that work across cafeterias, bookstores, athletics, and administrative offices. Slimrate delivers an easy-to-use system that staff can learn quickly, with centralized reporting for district finance teams. Our platform supports meal account management, fee collection, and event ticketing—all while maintaining the security and compliance standards that schools require.</p>
                </div>
            </div>

            <div class="serve-card serve-card--left" id="university">
                <div class="serve-card__content">
                    <h3 class="serve-card__title"><i class="las la-university"></i> Colleges & Universities</h3>
                    <p class="serve-card__descr">Campus-wide payment solutions for dining, parking, and services</p>
                    <p class="serve-card__text">Higher education institutions operate complex, multi-location environments with dining halls, bookstores, parking systems, athletic facilities, and student service centers. Slimrate scales to support unlimited locations and stations, providing real-time dashboards for campus administrators. Our platform integrates with student ID systems, supports mobile payments, and delivers the analytics needed to optimize campus operations.</p>
                </div>
                <div class="serve-card__icon">
                    <i class="las la-university"></i>
                </div>
            </div>

            <div class="serve-card serve-card--right" id="airports">
                <div class="serve-card__icon">
                    <i class="las la-plane-departure"></i>
                </div>
                <div class="serve-card__content">
                    <h3 class="serve-card__title"><i class="las la-plane-departure"></i> Airports & Convention Centers</h3>
                    <p class="serve-card__descr">High-volume transaction handling for public venues</p>
                    <p class="serve-card__text">Large public venues demand payment systems that can handle peak traffic without slowdowns or failures. Slimrate's enterprise-grade infrastructure is built for high-volume environments, with redundant systems and 24/7/365 support to ensure uninterrupted operations. From concessions and retail to parking and services, our platform keeps transactions flowing smoothly even during the busiest periods.</p>
                </div>
            </div>

            <div class="serve-card serve-card--left" id="state-agencies">
                <div class="serve-card__content">
                    <h3 class="serve-card__title"><i class="las la-landmark"></i> State Agencies & Authorities</h3>
                    <p class="serve-card__descr">Enterprise-scale solutions with full audit compliance</p>
                    <p class="serve-card__text">State-level agencies require payment systems that meet stringent compliance requirements while serving constituents across wide geographic areas. Slimrate aligns with NIST 800-53 and ISO/IEC 27002 frameworks, providing the security controls and audit trails that state auditors expect. Our platform supports complex organizational structures with role-based access controls and comprehensive transaction logging.</p>
                </div>
                <div class="serve-card__icon">
                    <i class="las la-landmark"></i>
                </div>
            </div>

            <div class="serve-card serve-card--right" id="public-safety">
                <div class="serve-card__icon">
                    <i class="las la-ambulance"></i>
                </div>
                <div class="serve-card__content">
                    <h3 class="serve-card__title"><i class="las la-ambulance"></i> Public Safety & Emergency Services</h3>
                    <p class="serve-card__descr">Reliable payment systems for critical service departments</p>
                    <p class="serve-card__text">Fire departments, EMS, and public safety agencies collect fees for permits, inspections, reports, and services. These departments need payment systems that are reliable, secure, and easy to use in the field. Slimrate provides mobile POS capabilities for on-site collections, with offline mode to ensure transactions complete even when connectivity is limited.</p>
                </div>
            </div>

            <div class="serve-card serve-card--left" id="parks">
                <div class="serve-card__content">
                    <h3 class="serve-card__title"><i class="las la-tree"></i> Parks, Recreation & Community Centers</h3>
                    <p class="serve-card__descr">Manage registrations, rentals, and facility fees with ease</p>
                    <p class="serve-card__text">Parks and recreation departments serve their communities through programs, facilities, and events that generate diverse payment needs. From pool passes and program registrations to facility rentals and concession sales, Slimrate handles it all. Our mobile POS solutions are perfect for outdoor events and seasonal operations, while online payment options make it easy for residents to register and pay from home.</p>
                </div>
                <div class="serve-card__icon">
                    <i class="las la-tree"></i>
                </div>
            </div>

            <div class="serve-card serve-card--right" id="healthcare">
                <div class="serve-card__icon">
                    <i class="las la-hospital"></i>
                </div>
                <div class="serve-card__content">
                    <h3 class="serve-card__title"><i class="las la-hospital"></i> Public Health & Hospital Systems</h3>
                    <p class="serve-card__descr">Patient convenience payments and facility services</p>
                    <p class="serve-card__text">Public hospitals and health systems operate gift shops, cafeterias, parking facilities, and patient payment services that all require secure, compliant payment processing. Slimrate delivers PCI-DSS compliant solutions with encrypted data handling and role-based access controls. Our platform integrates smoothly into healthcare environments while maintaining the security standards these sensitive settings demand.</p>
                </div>
            </div>

            <div class="serve-card serve-card--left" id="museums">
                <div class="serve-card__content">
                    <h3 class="serve-card__title"><i class="las la-palette"></i> Museums & Cultural Institutions</h3>
                    <p class="serve-card__descr">Admissions, memberships, gift shops, and special events</p>
                    <p class="serve-card__text">Museums, libraries, and cultural institutions create memorable experiences for visitors while managing complex revenue streams. Slimrate supports admission sales, membership programs, gift shop transactions, facility rentals, and special event ticketing—all from one integrated platform. Digital wallet support and contactless payments provide the modern checkout experience today's visitors expect.</p>
                </div>
                <div class="serve-card__icon">
                    <i class="las la-palette"></i>
                </div>
            </div>

            <div class="serve-card serve-card--right" id="tribal">
                <div class="serve-card__icon">
                    <i class="las la-users"></i>
                </div>
                <div class="serve-card__content">
                    <h3 class="serve-card__title"><i class="las la-users"></i> Tribal Governments & Enterprises</h3>
                    <p class="serve-card__descr">Comprehensive payment solutions for tribal operations</p>
                    <p class="serve-card__text">Tribal governments and enterprises operate diverse businesses and services with unique governance structures and tax considerations. Slimrate provides fully configurable solutions with GL code mapping, tax exemption handling, and enterprise-wide reporting that respects tribal sovereignty. Our platform adapts to the specific needs of tribal operations while delivering the same robust functionality available to any government entity.</p>
                </div>
            </div>
        </div>
    </div>
</section>
`;

class PublicSectorServe extends HTMLElement {
    constructor() {
        super();
        this._contents = new DocumentFragment();
        this._contents.appendChild(publicSectorServeTemplate.content.cloneNode(true));
    }
    connectedCallback() {
        this.appendChild(this._contents);
    }
}

customElements.define('public-sector-serve', PublicSectorServe);
