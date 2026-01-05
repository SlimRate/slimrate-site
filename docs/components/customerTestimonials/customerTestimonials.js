const testimonials = [
  {
    image: 'assets/img/gallery/h-bars/1.webp',
    title: 'Bar',
    challenge:
      'Tracking drink inventory, managing tabs, and running promotions manually was slow and error-prone.',
    solution:
      'Our POS system integrates inventory tracking, tab management, and promotions, making bar operations faster and more accurate.',
    stats: [
      {
        label: 'Increased Revenue',
        value: '20%',
        info: 'Rise in drink sales',
      },
      {
        label: 'Enhanced Customer Experience',
        value: '16%',
        info: 'Quicker tab management',
      },
      // { label: 'Increased Memberships', value: '25%', info: 'growth in memberships' }
    ],
  },
  {
    image: 'assets/img/gallery/c-testimonials/image (2).png',
    title: 'Supermarket',
    challenge:
      'Inventory management, long checkout times, and lack of data insights with an unscalable system.',
    solution:
      'Advanced inventory management, efficient checkout processes, and robust data analytics with our POS system.',
    stats: [
      {
        label: 'Inventory Accuracy',
        value: '50%',
        info: 'reduction in stockouts and overstock situations',
      },
      {
        label: 'Faster Checkouts',
        value: '30%',
        info: 'improvement in checkout speed',
      },
      // { label: 'Increased Memberships', value: '35%', info: 'growth in memberships' }
    ],
  },
  {
    image: 'assets/img/gallery/c-testimonials/image (3).png',
    title: 'Quick Service Restaurant',
    challenge:
      'Slow order processing, inconsistent food quality, and difficulties in managing location with legacy systems.',
    solution:
      'A unified POS platform for order processing, kitchen management, and multi-location control.',
    stats: [
      {
        label: 'Faster Order Processing',
        value: '25%',
        info: 'reduction in processing time',
      },
      {
        label: 'Revenue Growth',
        value: '15%',
        info: 'increase in sales through efficient upselling',
      },
    ],
  },
  {
    image: 'assets/img/gallery/c-testimonials/image (4).png',
    title: 'Convenience Store/Gas Station',
    challenge:
      'Managing inventory, sales reporting, and customer loyalty programs with manual processes.',
    solution:
      'Advanced inventory management, efficient checkout processes, and accurate accounting tools with our POS system.',
    stats: [
      {
        label: 'Cost Savings',
        value: '20%',
        info: 'reduction in monthly POS/processing costs',
      },
      {
        label: 'Increased Upselling',
        value: '15%',
        info: 'increase in sales of promotional items',
      },
      {
        label: 'Faster Checkouts',
        value: '25%',
        info: 'faster checkout speeds',
      },
    ],
  },
  {
    image: 'assets/img/gallery/c-testimonials/image (5).png',
    title: 'Retail Boutique',
    challenge:
      'Managing inventory, sales reporting, and customer loyalty programs with manual processes.',
    solution:
      'Integrated inventory management, sales reporting, and customer loyalty programs with our POS system.',
    stats: [
      {
        label: 'Inventory Management',
        value: '40%',
        info: 'reduction in stock discrepancies',
      },
      {
        label: 'Reduced Monthly Fees',
        value: '80%',
        info: 'reduction in fees',
      },
    ],
  },
  {
    image: 'assets/img/gallery/r-liquor/1.webp',
    title: 'Liquor Store',
    challenge:
      'Keeping track of inventory, processing sales, and managing customer loyalty programs manually was time-consuming and prone to errors.',
    solution:
      'Our POS system integrates inventory management, sales reporting, and customer loyalty programs, streamlining operations and saving time.',
    stats: [
      {
        label: 'Improved Efficiency',
        value: '40%',
        info: 'reduction in administrative time',
      },
      {
        label: 'Accurate Tracking',
        value: '80%',
        info: 'reduction in errors with real-time updates',
      },
    ],
  },
];

let currentSlide = 0;

function renderTestimonial(slideIndex) {
  const testimonial = testimonials[slideIndex];
  const testimonialContent = document.getElementById(
    'testimonial-content'
  );

  const isMobile = window.innerWidth <= 767;
  testimonialContent.classList.remove('activeSlider');

  setTimeout(() => {
    const firstLevelClass = isMobile ? 'mobile-first-level' : '';
    const secondLevelClass = isMobile ? 'mobile-second-level' : '';
    const thirdLevelClass = isMobile ? 'mobile-third-level' : '';

    if (isMobile) {
      testimonialContent.innerHTML = `
<div class="${firstLevelClass}">
  <div class="image-container relative">
    <img src="${testimonial.image}" alt="${testimonial.title}" />
    <span class="font-bold">${testimonial.title}</span>
  </div>
  <div class="testimonial-text-container">
    <p class="text-blue h2Text margin-top-none">Challenge:</p>
    <p class="margin-top-small">${testimonial.challenge}</p>
  </div>
</div>

<div class="${secondLevelClass}">
  <p class="h2Text text-green margin-top-medium">Solution:</p>
  <p class="margin-top-small">${testimonial.solution}</p>
</div>

<div class="${thirdLevelClass}">
  ${testimonial.stats
    .map(
      (stat) => `
    <div>
      <p class="font-bold">${stat.label}</p>
      <div class="stats-box">
        <p class="stats-value">${stat.value}</p>
        <p class="rise-info">${stat.info}</p>
      </div>
    </div>
  `
    )
    .join('')}
</div>
`;
    } else {
      testimonialContent.innerHTML = `
      <div class="image-container relative">
        <img src="${testimonial.image}" alt="${testimonial.title}" />
        <span class="font-bold">${testimonial.title}</span>
      </div>
      <div class="flex-1 testimonial-text-container desctopColumn">
        <div>
        <div>
        <p class="text-blue h2Text margin-top-none">Challenge:</p>
        <p class="margin-top-small">${testimonial.challenge}</p>
        </div>
        <div>
        <p class="h2Text text-green margin-top-medium">Solution:</p>
        <p class="margin-top-small">${testimonial.solution}</p>
        </div>
        </div>
        <div class="flex ">
          ${testimonial.stats
            .map(
              (stat) => `
            <div>
              <p class="font-bold">${stat.label}</p>
              <div class="stats-box">
                <p class="stats-value">${stat.value}</p>
                <p class="rise-info">${stat.info}</p>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `;
    }

    testimonialContent.classList.add('activeSlider');
  }, 300);
}

function renderDots() {
  const sliderDots = document.getElementById('slider-dots');
  sliderDots.innerHTML = testimonials
    .map(
      (_, index) => `
    <div class="slider-dot ${
      index === currentSlide ? 'activeSlider' : ''
    }" onclick="goToSlide(${index})"></div>
  `
    )
    .join('');
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  renderTestimonial(currentSlide);
  renderDots();
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % testimonials.length; 
  renderTestimonial(currentSlide);
  renderDots();
}

renderTestimonial(currentSlide);
renderDots();

setInterval(nextSlide, 5000);