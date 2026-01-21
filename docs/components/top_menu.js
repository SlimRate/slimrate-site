const productMenuElementId = 'dropmenu__product';
const businessTypeMenuElementId = 'dropmenu__business-types';
const pricingMenuElementId = 'dropmenu__pricing';
const companyMenuElementId = 'dropmenu__company';

const topMenuTeplate = document.createElement('template');
topMenuTeplate.innerHTML = `
<header class="header">

<div class="container">
<a class="header-logo" href="index.html">
    <img src="assets/img/logo.svg" alt="Slimrate logo">
</a>
<div class="header-nav">
    <ul>
    <li id='${productMenuElementId}'><a href="javascript:void(0)">Solutions</a></li>
      <li id='${businessTypeMenuElementId}'><a href="javascript:void(0)">Business Types</a></li>
      <li ><a href="pricing.html" id='${pricingMenuElementId}'>Pricing</a></li>
      <li><a href="company.html" id ='${companyMenuElementId}'>Company</a></li>
    </ul>
    <a href="company.html#get_demo" id="careersLink" class="btn btn-red">Careers</a>
    <a href="https://ap.slimrate.com/#" class="btn btn-blue">Login</a>
</div>
</div>
</header>
<header class="mobile_header">
<div class="hamburger-menu">
<input id="menu__toggle" type="checkbox" />
<label class="menu__btn" for="menu__toggle">
    <span></span>
</label>

<div class="menu__box menuContainer">
<div>
    <div class="menu__item i1" id="menu1">
      <div class="flexContainer">
        <a >Solutions</a>
        <img class="menu_arrow_rotate r1" src="assets/img/arrow-right.svg" alt="Arrow icon">
      </div>
        <div class="more m1">
            <a class="more_head">Industry leading point of sale and management tools to separate you from your competition. Live
            support to ensure your questions are always answered.</a>
            <ul>
                <li class="divider">
                </li>
                <li>
                    <div class="menu__item i5" id="menu5">
                        <div class="flexContainer">
                          <a >Software</a>
                          <img class="menu_arrow_rotate r5" src="assets/img/arrow-right.svg" alt="Arrow icon">
                        </div>
                        <div class="more m5">
                            <a class="more_head">Increase revenue, streamline operations, and build customer loyalty with powerful cloud-based software.
                            </a>
                            <ul>
                                <li>
                                    <a href="software.html" class='lastLink'>POS Software</a>
                                </li>
                                <li>
                                    <a href="payment_processing.html" class='lastLink'>Payment Processing</a>
                                </li>
                                <li>
                                    <a href="mobile-app.html" class='lastLink'>Mobile App</a>
                                </li>
                                <li>
                                    <a href="admin-panel.html" class='lastLink'>Admin Panel</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="menu__item i6" id="menu6">
                       <div class="flexContainer">
                        <a >Hardware</a>
                        <img class="menu_arrow_rotate r6" src="assets/img/arrow-right.svg" alt="Arrow icon">
                       </div>
                        <div class="more m6">
                            <a class="more_head">Deliver a seamless user experience with durable hardware and built-in powerful technology</a>
                            <ul>
                                <li>
                                    <a href="hardware.html" class='lastLink'>All Hardware</a>
                                </li>
                                <li style="font-weight: 600; padding: 8px 0; color: #666;">Tablets</li>
                                <li>
                                    <a href="sr-falcon.html" class='lastLink'>SR Falcon</a>
                                </li>
                                <li>
                                    <a href="sr-swan.html" class='lastLink'>SR Swan</a>
                                </li>
                                <li>
                                    <a href="sr155-duo.html" class='lastLink'>SR155 Duo</a>
                                </li>
                                <li>
                                    <a href="sr155-solo.html" class='lastLink'>SR155 Solo</a>
                                </li>
                                <li style="font-weight: 600; padding: 8px 0; color: #666;">Printers</li>
                                <li>
                                    <a href="sr-trp1.html" class='lastLink'>SR-TRP1</a>
                                </li>
                                <li style="font-weight: 600; padding: 8px 0; color: #666;">Cash Drawer</li>
                                <li>
                                    <a href="sr-410.html" class='lastLink'>SR-410</a>
                                </li>
                                <li style="font-weight: 600; padding: 8px 0; color: #666;">Scanners</li>
                                <li>
                                    <a href="sr-ds1.html" class='lastLink'>SR-DS1</a>
                                </li>
                                <li>
                                    <a href="sr-wlhs1.html" class='lastLink'>SR-WLHS1</a>
                                </li>
                                <li>
                                    <a href="sr-whs1.html" class='lastLink'>SR-WHS1</a>
                                </li>
                                <li style="font-weight: 600; padding: 8px 0; color: #666;">EMV Terminals</li>
                                <li>
                                    <a href="a35.html" class='lastLink'>A35</a>
                                </li>
                                <li>
                                    <a href="a920.html" class='lastLink'>A920</a>
                                </li>
                                <li style="font-weight: 600; padding: 8px 0; color: #666;">Scales</li>
                                <li>
                                    <a href="digital-scale.html" class='lastLink'>Digital Scale</a>
                                </li>
                                <li>
                                    <a href="aiscale-pos-s625.html" class='lastLink'>AIScale POS S625</a>
                                </li>
                                <li>
                                    <a href="aiscale-label-printing-s130.html" class='lastLink'>AIScale Label S130</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="menu__item i7" id="menu7">
                       <div class="flexContainer">
                        <a >Integrations</a>
                        <img class="menu_arrow_rotate r7" src="assets/img/arrow-right.svg" alt="Arrow icon">
                       </div>
                        <div class="more m7">
                            <a class="more_head">Connect seamlessly with your favorite tools and services</a>
                            <ul>
                                <li>
                                    <a href="homebase.html" class='lastLink'>Homebase</a>
                                </li>
                                <li>
                                    <a href="liquor-control.html" class='lastLink'>Liquor Control</a>
                                </li>
                                <li>
                                    <a href="tobacco-scan-data.html" class='lastLink'>Tobacco Scan Data</a>
                                </li>
                                <li>
                                    <a href="hikvision.html" class='lastLink'>Hikvision</a>
                                </li>
                                <li>
                                    <a href="barcode-lookup.html" class='lastLink'>Barcode Lookup</a>
                                </li>
                                <li>
                                    <a href="woocommerce.html" class='lastLink'>WooCommerce</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
              
            </ul>
        </div>


    </div>

    
    <div class="divider"></div>
    <div class="menu__item i2" id="menu2">
        <div class="flexContainer">
          <a >Business Types</a>
          <img class="menu_arrow_rotate r2" src="assets/img/arrow-right.svg" alt="Arrow icon">
        </div>
        <div class="more m2">
            <a class="more_head">Modern payment and point of sale technology for a variety of applications</a>
            <ul>
            <div class="divider"></div>
                </li>

                <li>
                    <div class="menu__item i3" id="menu3">
                        <div class="flexContainer">
                          <a >Restaurant POS</a>
                          <img class="menu_arrow_rotate r3" src="assets/img/arrow-right.svg" alt="Arrow icon">
                        </div>
                        <div class="more m3">
                            <a class="more_head">Cloud-based POS & management solution for restaurants of
                                all sizes. Built to make your restaurant perform better
                            </a>
                            <ul>
                                <li>
                                    <a href="restaurant.html" class='lastLink'>Restaurant POS</a>
                                </li>

                                <li>
                                    <a href="h-bars.html" class='lastLink'>Bars & Nightclubs</a>
                                </li>
                                <li>
                                    <a href="h-casual.html" class='lastLink'>Casual Dining</a>
                                </li>
                                <li>
                                    <a href="h-fine.html" class='lastLink'>Fine Dining</a>
                                </li>
                                <li>
                                    <a href="h-quick.html" class='lastLink'>Quick Service Restaurants (QSR)</a>
                                </li>
                                <li>
                                    <a href="h-coffee.html" class='lastLink'>Coffee Shops & Bakeries</a>
                                </li>
                                <li>
                                    <a href="h-truck.html" class='lastLink'>Food Trucks</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="menu__item i4" id="menu4">
                       <div class="flexContainer">
                        <a >Retail POS</a>
                        <img class="menu_arrow_rotate r4" src="assets/img/arrow-right.svg" alt="Arrow icon">
                       </div>
                        <div class="more m4">
                            <a class="more_head">Sell in-style with an integrated retail POS solution that
                                makes it easy to sell online and in-store</a>
                            <ul>
                                <li>
                                    <a href="r-liquor.html" class='lastLink'>Liquor Stores</a>
                                </li>
                                <li>
                                    <a href="r-clothing.html" class='lastLink'>Clothing and Apparel Stores</a>
                                </li>
                                <li>
                                    <a href="r-grocery.html" class='lastLink'>Grocery and Convenience Stores</a>
                                </li>
                                <li>
                                    <a href="r-specialty.html" class='lastLink'>Specialty Stores</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="menu__item i8" id="menu8">
                       <div class="flexContainer">
                        <a >Public Sector</a>
                        <img class="menu_arrow_rotate r8" src="assets/img/arrow-right.svg" alt="Arrow icon">
                       </div>
                        <div class="more m8">
                            <a class="more_head">Modern POS, payments & digital commerce for government, education & nonprofits</a>
                            <ul>
                                <li>
                                    <a href="public-sector.html" class='lastLink'>Public Sector Overview</a>
                                </li>
                                <li>
                                    <a href="public-sector.html#government" class='lastLink'>Government & Municipal</a>
                                </li>
                                <li>
                                    <a href="public-sector.html#k12" class='lastLink'>Education (K-12 & Higher Ed)</a>
                                </li>
                                <li>
                                    <a href="public-sector.html#healthcare" class='lastLink'>Healthcare & Public Health</a>
                                </li>
                                <li>
                                    <a href="public-sector.html#museums" class='lastLink'>Museums & Nonprofits</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="divider"></div>
   <a href="pricing.html" class="menu__item-link">
      <div class="menu__item">
        <div class="flexContainer">
          <span>Pricing</span>
          <img class="menu_arrow_rotate r1" src="assets/img/arrow-right.svg" alt="Arrow icon">
        </div>
      </div>
   </a>
   <div class="divider"></div>
   <a href="company.html" class="menu__item-link">
      <div class="menu__item">
        <div class="flexContainer">
          <span>Company</span>
          <img class="menu_arrow_rotate r1" src="assets/img/arrow-right.svg" alt="Arrow icon">
        </div>
      </div>
   </a>
      <div class="divider"></div>
  <a href="company.html#get_demo" class="menu__item-link" id="mobileCareersLink">
  <div class="menu__item">
    <div class="flexContainer">
      <span style="color: #2B6BF3">Careers</span>
      <img class="menu_arrow_rotate r1" src="assets/img/arrow-right.svg" alt="Arrow icon">
    </div>
  </div>
</a>
    <div class="divider"></div>
    <div>
        <div class="menu-buttons">
          <a href="https://ap.slimrate.com/#" target="blank">
            <button class="btn btn-blue">Login</button>
          </a>
          <a href="#get_demo">
            <button onclick="uncheck()" class="btn btn-red">Get a Demo</button>
          </a>
        </div>
    </div>
</div>
</div>
</header>
`;
class TopMenu extends HTMLElement {
  constructor() {
    super();
    this._contents = new DocumentFragment();
    this._contents.appendChild(topMenuTeplate.content.cloneNode(true));
  }
  connectedCallback() {
    this.appendChild(this._contents);
    // Fix asset paths for language subdirectories
    if (window.fixAssetPaths) {
      window.fixAssetPaths(this);
    }
    initDropment();
    this.initEventListeners();
  // Capture UTM params once component mounts (present on most pages)
  try { captureUtmParams(); } catch(e) { /* silent */ }
  }
  initEventListeners() {
    // const careersLink = this.querySelector('#careersLink');
    // if (careersLink) {
    //   careersLink.addEventListener('click', this.handleCareersClick.bind(this));
    // }
    const mobileCareersLink = this.querySelector('#mobileCareersLink');
    if (mobileCareersLink) {
      mobileCareersLink.addEventListener('click', this.handleMobileCareersClick.bind(this));
    }
  }
  handleCareersClick(event) {
    if (document.getElementById('get_demo')) {
      event.preventDefault();
      document.getElementById('get_demo').scrollIntoView({ behavior: 'smooth' });
    } else {
    }
  }
  handleMobileCareersClick(event) {
    const menuToggle = this.querySelector('#menu__toggle');
    if (menuToggle) {
      menuToggle.checked = false;
    }
  }
}

customElements.define('top-menu', TopMenu);

// ---- UTM Tracking Utilities ----
const SLIMRATE_UTM_KEY = 'slimrate_utm';

function parseQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const wanted = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid'];
  const data = {};
  let has = false;
  wanted.forEach(k => {
    if (params.has(k)) { data[k] = params.get(k); has = true; }
  });
  return has ? data : null;
}

function captureUtmParams() {
  if (!window.sessionStorage) return;
  const existing = safeGetUtm();
  const nowParams = parseQueryParams();
  if (!existing) {
    const ref = document.referrer && !document.referrer.startsWith(location.origin) ? document.referrer : '';
    const base = {
      firstTouchTs: Date.now(),
      landingPage: location.href.split('#')[0],
      referrer: ref,
    };
    const merged = Object.assign(base, nowParams || {});
    sessionStorage.setItem(SLIMRATE_UTM_KEY, JSON.stringify(merged));
    window.__slimrateUtm = merged;
  } else if (nowParams) {
    // Update only additive (keep original landing / firstTouch)
    const merged = Object.assign({}, existing);
    Object.entries(nowParams).forEach(([k,v]) => { if (!merged[k]) merged[k] = v; });
    sessionStorage.setItem(SLIMRATE_UTM_KEY, JSON.stringify(merged));
    window.__slimrateUtm = merged;
  } else {
    window.__slimrateUtm = existing;
  }
}

function safeGetUtm() {
  try {
    const raw = sessionStorage.getItem(SLIMRATE_UTM_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}

// Public accessor for other components
window.getSlimrateUtmData = function() { return window.__slimrateUtm || safeGetUtm() || {}; };

function initDropment() {
  const productHtmlObj = {
    infoHtmlStr: `
      <h2 class="dropmenu-title">Solutions</h2>
      <a class="header__tab t1 active" href="javascript:void(0)">Software<span>Increase revenue, streamline
      operations, and build customer loyalty with powerful cloud-based
      software.
            </span></a>
        <a class="header__tab t2" href="javascript:void(0)">Hardware<span>Deliver a seamless user experience
                    with durable hardware and built-in powerful technology
            </span></a>
        <a class="header__tab t3" href="javascript:void(0)">Integrations<span>Connect seamlessly with your favorite tools and services
            </span></a>
      `,
    navContentHtmlStr: `
      <div class="dropmenu-nav n1">
      <ul>
      <li>
          <a href="software.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-desktop"></i></div>
                  <div>POS Software<span><br>Powerful point of sale system for restaurants and retail
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="payment_processing.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-money-check-alt"></i></div>
                  <div>Payment Processing<span><br>Full suite of payment acceptance tools
          </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="mobile-app.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-mobile"></i></div>
                  <div>Mobile App<span><br>Manage your business from anywhere
          </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="admin-panel.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-cog"></i></div>
                  <div>Admin Panel<span><br>Complete control and insights for your business
          </span></div>
              </div>
          </a>
      </li>
  </ul>
      </div>
      <div class="dropmenu-nav n2 hidden">
      <ul>
      <li>
          <a href="hardware.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-server"></i></div>
                  <div>All Hardware<span><br>Complete range of POS hardware solutions
              </span></div>
              </div>
          </a>
      </li>
      <li class="divider-title">Tablets</li>
      <li>
          <a href="sr-falcon.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-tablet"></i></div>
                  <div>SR Falcon<span><br>Flagship performance tablet
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="sr-swan.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-tablet"></i></div>
                  <div>SR Swan<span><br>Sleek fanless tablet POS
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="sr155-duo.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-tablet"></i></div>
                  <div>SR155 Duo<span><br>Double display POS system
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="sr155-solo.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-tablet"></i></div>
                  <div>SR155 Solo<span><br>Single display touchscreen
              </span></div>
              </div>
          </a>
      </li>
      <li class="divider-title">Printers</li>
      <li>
          <a href="sr-trp1.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-print"></i></div>
                  <div>SR-TRP1<span><br>Thermal receipt printer
              </span></div>
              </div>
          </a>
      </li>
      <li class="divider-title">Cash Drawer</li>
      <li>
          <a href="sr-410.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-cash-register"></i></div>
                  <div>SR-410<span><br>Secure cash drawer
              </span></div>
              </div>
          </a>
      </li>
      <li class="divider-title">Scanners</li>
      <li>
          <a href="sr-ds1.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-barcode"></i></div>
                  <div>SR-DS1<span><br>Desktop scanner
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="sr-wlhs1.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-barcode"></i></div>
                  <div>SR-WLHS1<span><br>Wireless handheld scanner
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="sr-whs1.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-barcode"></i></div>
                  <div>SR-WHS1<span><br>Wired handheld scanner
              </span></div>
              </div>
          </a>
      </li>
      <li class="divider-title">EMV Terminals</li>
      <li>
          <a href="a35.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-credit-card"></i></div>
                  <div>A35<span><br>Payment terminal
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="a920.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-credit-card"></i></div>
                  <div>A920<span><br>Mobile payment terminal
              </span></div>
              </div>
          </a>
      </li>
      <li class="divider-title">Scales</li>
      <li>
          <a href="digital-scale.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-weight"></i></div>
                  <div>Digital Scale<span><br>Precise measurements
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="aiscale-pos-s625.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-weight"></i></div>
                  <div>AIScale POS S625<span><br>Tablet with integrated scales
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="aiscale-label-printing-s130.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-weight"></i></div>
                  <div>AIScale Label S130<span><br>Smart labeling scale
              </span></div>
              </div>
          </a>
      </li>
  </ul>
      </div>
      <div class="dropmenu-nav n3 hidden">
      <ul>
      <li>
          <a href="homebase.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-user-clock"></i></div>
                  <div>Homebase<span><br>Employee scheduling and time tracking
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="liquor-control.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-wine-bottle"></i></div>
                  <div>Liquor Control<span><br>Alcohol compliance and inventory management
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="tobacco-scan-data.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-smoking"></i></div>
                  <div>Tobacco Scan Data<span><br>Tobacco product compliance tracking
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="hikvision.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-video"></i></div>
                  <div>Hikvision<span><br>Security camera integration
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="barcode-lookup.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-search"></i></div>
                  <div>Barcode Lookup<span><br>Product information and pricing
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="woocommerce.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-shopping-cart"></i></div>
                  <div>WooCommerce<span><br>E-commerce platform integration
              </span></div>
              </div>
          </a>
      </li>
  </ul>
      </div>
    `,
  };

  const businessTypesHtmlObj = {
    infoHtmlStr: `
        <h2 class="dropmenu-title">Business Types</h2>
        <a class="header__tab t1 active" href="javascript:void(0)">Restaurant POS<span>Cloud-based
                POS & management solution for restaurants of all sizes. Built to make your
                restaurant perform better.
            </span></a>
        <a class="header__tab t2" href="javascript:void(0)">Retail POS<span>Sell in-style with an integrated retail
                POS solution that makes it easy to sell online and in-store
            </span></a>
        <a class="header__tab t3" href="javascript:void(0)">Public Sector<span>Modern POS, payments & digital commerce
                for government, education & nonprofits
            </span></a>
      `,
    navContentHtmlStr: `
      <div class="dropmenu-nav n1">
        <ul>

          <li><a href="h-bars.html"><div class="nav-body">
          <div class="nav-el-i"><i class="nav-el las la-cocktail"></i></div><div>Bars & Nightclubs<span><br>Powerful bar and club point
                      of sale solution to ignite your business
                  </span></div></div></a></li>

          <li><a href="h-casual.html"><div class="nav-body">
          <div class="nav-el-i"><i class="nav-el las la-apple-alt"></i></div><div>Casual Dining<span><br>Enhance efficiency,
          profitability, and customer service with our all-in-one cloud based
          solution</span></div></div></a></li>


          <li><a href="h-fine.html"><div class="nav-body">
          <div class="nav-el-i"><i class="nav-el las la-cheese"></i></div><div>Fine Dining<span><br>Enhance customer experience with our
          feature-rich, easy to use software, durable hardware, and seamless
          payments
                  </span></div></div></a></li>

          <li><a href="h-quick.html"><div class="nav-body">
          <div class="nav-el-i"><i class="nav-el las la-pizza-slice"></i></div><div>Quick Service Restaurants (QSR)<span><br>Maximize performance
          with smart, easy to use technology
                  </span></div></div></a></li>

          <li><a href="h-coffee.html"><div class="nav-body">
          <div class="nav-el-i"><i class="nav-el las la-coffee"></i></div><div>Coffee Shops & Bakeries<span><br>Build customer loyalty
                  with tools curated for an excellent customer experience
          </span></div></div></a></li>
      
          <li><a href="h-truck.html"><div class="nav-body">
          <div class="nav-el-i"><i class="nav-el las la-hamburger"></i></div><div>Food Trucks<span><br>A simple, reliable technology partner
          to get you up and running while you’re on the go
                  </span></div></div></a></li>

          
      </div>
      <div class="dropmenu-nav n2 hidden">
      <ul>

      <li><a href="r-liquor.html"><div class="nav-body">
      <div class="nav-el-i"><i class="nav-el las la-wine-glass"></i></div><div>Liquor Stores<span><br>The comprehensive and
      user-friendly wine and spirits solution to build customer loyalty
      and keep them coming back
              </span></div></div></a></li>

      <li><a href="r-clothing.html"><div class="nav-body">
      <div class="nav-el-i"><i class="nav-el las la-tshirt"></i></div><div>
      Clothing and Apparel Stores
      <span><br>
      Best in class point of sale solution for clothing and apparel stores
              </span></div></div></a></li>

      <li><a href="r-grocery.html"><div class="nav-body">
      <div class="nav-el-i"><i class="nav-el las la-fish"></i></div><div>
      Grocery and Convenience Stores
      <span><br>
      Turn more customers with a seamless checkout process. Customizable reward and
                      loyalty programs to engage your customers
              </span></div></div></a></li>

              <li><a href="r-specialty.html"><div class="nav-body">
              <div class="nav-el-i"><i class="nav-el las la-dice-d6"></i></div><div>
              Specialty Stores
              <span><br>
              Product and management solutions that will help You run your business
                      </span></div></div></a></li>
      
      <!-- <a href="">Overview→</a> -->
      </div>
      <div class="dropmenu-nav n3 hidden">
      <ul>

      <li><a href="public-sector.html"><div class="nav-body">
      <div class="nav-el-i"><i class="nav-el las la-landmark"></i></div><div>Public Sector Overview<span><br>Complete POS and payment solutions for public agencies
              </span></div></div></a></li>

      <li><a href="public-sector.html#government"><div class="nav-body">
      <div class="nav-el-i"><i class="nav-el las la-city"></i></div><div>Government & Municipal<span><br>Streamline fee collection and revenue management
              </span></div></div></a></li>

      <li><a href="public-sector.html#k12"><div class="nav-body">
      <div class="nav-el-i"><i class="nav-el las la-graduation-cap"></i></div><div>Education (K-12 & Higher Ed)<span><br>Campus-wide payment solutions
              </span></div></div></a></li>

      <li><a href="public-sector.html#healthcare"><div class="nav-body">
      <div class="nav-el-i"><i class="nav-el las la-hospital"></i></div><div>Healthcare & Public Health<span><br>Patient convenience payments and facility services
              </span></div></div></a></li>

      <li><a href="public-sector.html#museums"><div class="nav-body">
      <div class="nav-el-i"><i class="nav-el las la-palette"></i></div><div>Museums & Nonprofits<span><br>Admissions, memberships, and special events
              </span></div></div></a></li>

      </ul>
      </div>
      `,
  };

  var isHeaderHovered = false;

  const header = document.getElementsByClassName('header')[0];
  header.addEventListener('mouseenter', () => {
    isHeaderHovered = true;
  });
  header.addEventListener('mouseleave', () => {
    isHeaderHovered = false;
  });

  document
    .getElementById(productMenuElementId)
    .addEventListener('mouseenter', () => {
      openProductMenu();
    });
  document
    .getElementById(businessTypeMenuElementId)
    .addEventListener('mouseenter', () => {
      openBusinessTypesMenu();
    });

  document
    .getElementById(pricingMenuElementId)
    .addEventListener('mouseenter', () => {
      const el = document.getElementsByClassName('dropmenu')[0];
      if (el != null) {
        onRemoveForce(el);
      }
    });
  document
    .getElementById(companyMenuElementId)
    .addEventListener('mouseenter', () => {
      const el = document.getElementsByClassName('dropmenu')[0];
      if (el != null) {
        onRemoveForce(el);
      }
    });

  var productMenu;

  function openProductMenu() {
    businessTypeMenu = null;
    if (productMenu != null) return;
    destroyElement();
    productMenu = createDropmenu({
      ...productHtmlObj,
      parentId: productMenuElementId,
    });
  }
  var businessTypeMenu;

  function openBusinessTypesMenu() {
    productMenu = null;
    if (businessTypeMenu != null) return;
    destroyElement();
    businessTypeMenu = createDropmenu({
      ...businessTypesHtmlObj,
      parentId: businessTypeMenuElementId,
    });
  }

  function destroyElement() {
    const els = document.getElementsByClassName('dropmenu');
    if (els.length > 0) {
      for (const el of els) {
        if (el.parentElement) {
          el.parentElement.removeChild(el);
        }
      }
    }
  }

  function createDropmenu({ infoHtmlStr, navContentHtmlStr, parentId }) {
    const fragment = document.createDocumentFragment();

    const element = document.createElement('div');

    element.innerHTML = `
      <div class="dropmenu hovered">
          <div class="dropmenu-container">
              <div class="dropmenu-info">
                  ${infoHtmlStr}
              </div>
              ${navContentHtmlStr}
          </div>
      </div>
    `;

    while (element.childNodes[0]) {
      fragment.appendChild(element.childNodes[0]);
    }

    const parentElement = document.getElementById(parentId);

    parentElement.appendChild(fragment);
    const el = document.getElementsByClassName('dropmenu')[0];
    el.addEventListener('mouseleave', () => onRemove(el));

    // Tab switching for both Product (Solutions) and Business Types menus
    $('.t1').hover(
      function () {
        $('.n1').removeClass('hidden');
        $('.n2, .n3').addClass('hidden');
        $('.t2, .t3').removeClass('active');
        $('.t1').addClass('active');
      },
      function () {}
    );

    $('.t2').hover(
      function () {
        $('.n2').removeClass('hidden');
        $('.n1, .n3').addClass('hidden');
        $('.t1, .t3').removeClass('active');
        $('.t2').addClass('active');
      },
      function () {}
    );

    $('.t3').hover(
      function () {
        $('.n3').removeClass('hidden');
        $('.n1, .n2').addClass('hidden');
        $('.t1, .t2').removeClass('active');
        $('.t3').addClass('active');
      },
      function () {}
    );

    return fragment;
  }

  function onRemove(fragment) {
    if (!isHeaderHovered) return;
    setTimeout(function () {
      productMenu = null;
      businessTypeMenu = null;
      fragment.parentElement.removeChild(fragment);
      fragment.removeEventListener('mouseleave', onRemove);
    }, 100);
  }

  function onRemoveForce(fragment) {
    setTimeout(function () {
      productMenu = null;
      businessTypeMenu = null;
      fragment.parentElement.removeChild(fragment);
      fragment.removeEventListener('mouseleave', onRemove);
    }, 100);
  }
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}
