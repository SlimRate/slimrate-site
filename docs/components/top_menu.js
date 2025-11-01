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
        <img class="menu_arrow_rotate r1" src=" assets/img/arrow-right.svg" alt="Arrow icon">
      </div>
        <div class="more m1">
            <a class="more_head">Industry leading point of sale and management tools to separate you from your competition. Live
            support to ensure your questions are always answered.</a>
            <ul>
                <li class="divider">
                </li>
                <li>
                    <a href="software.html" class='lastLink'>Software</a>
                </li>
                <li>
                    <a href="hardware.html" class='lastLink'>Hardware</a>
                </li>
                <li>
                    <a href="payment_processing.html" class='lastLink'>Payment Processing</a>
                </li>
              
            </ul>
        </div>


    </div>

    
    <div class="divider"></div>
    <div class="menu__item i2" id="menu2">
        <div class="flexContainer">
          <a >Business Types</a>
          <img class="menu_arrow_rotate r2" src=" assets/img/arrow-right.svg" alt="Arrow icon">
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
                          <img class="menu_arrow_rotate r3" src=" assets/img/arrow-right.svg" alt="Arrow icon">
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
                        <img class="menu_arrow_rotate r4" src=" assets/img/arrow-right.svg" alt="Arrow icon">
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
          <img class="menu_arrow_rotate r1" src=" assets/img/arrow-right.svg" alt="Arrow icon">
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
      <p class="dropmenu-descr">Industry leading point of sale and management tools to separate you from your competition. Live
      support to ensure your questions are always answered.</p>
      `,
    navContentHtmlStr: `
      <div class="dropmenu-nav">
      <ul>
      <li>
          <a href="software.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-desktop"></i></div>
                  <div>Software<span><br>Increase revenue, streamline
      operations, and build customer loyalty with powerful cloud-based
      software.
              </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="hardware.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-server"></i></div>
                  <div>Hardware<span><br>Deliver a seamless user experience
                    with durable hardware and built-in powerful technology
            </span></div>
              </div>
          </a>
      </li>
      <li>
          <a href="payment_processing.html">
              <div class="nav-body">
                  <div class="nav-el-i"><i class="nav-el las la-money-check-alt"></i></div>
                  <div>Payment Processing<span><br>Full suite of
                    payment acceptance tools - in-store, online and mobile. Designed to
                    help build and grow your business.
          </span></div>
              </div>
          </a>
      </li>
      <li>
         
      </li>
  </ul>
        <!-- <a href="">Overview→</a> -->
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

    $('.t1 ').hover(
      function () {
        $('.n1').removeClass('hidden');
        $('.n2').addClass('hidden');
        $('.t2').removeClass('active');
        $('.t1').addClass('active');
      },
      function () {}
    );

    $('.t2 ').hover(
      function () {
        $('.n2').removeClass('hidden');
        $('.n1').addClass('hidden');
        $('.t1').removeClass('active');
        $('.t2').addClass('active');
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
