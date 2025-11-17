// Unified Slick Slider Configuration
const slickConfigs = {
    'something-wrapper': {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        infinite: true,
        easing: 'ease-in-out',
        dots: true,
        responsive: [{
            breakpoint: 991,
            settings: { slidesToShow: 1 }
        }]
    },
    'we-support-swiper': {
        slidesToShow: 7,
        slidesToScroll: 3,
        rows: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: true,
        responsive: [{
            breakpoint: 991,
            settings: { slidesToShow: 3 }
        }]
    },
    'hardware-cards': {
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 991,
            settings: { slidesToShow: 1 }
        }]
    },
    'tech-stack-swiper': {
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1199,
            settings: { slidesToShow: 1 }
        }, {
            breakpoint: 991,
            settings: { slidesToShow: 1 }
        }]
    },
    'gallery': {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000
    }
};

// Initialize all sliders
function initSliders() {
    Object.keys(slickConfigs).forEach(selector => {
        const $element = $(`.${selector}`);
        if ($element.length && typeof $element.slick === 'function') {
            $element.slick(slickConfigs[selector]);
        }
    });
}

// Initialize when DOM is ready
if (typeof $ !== 'undefined' && $.fn.slick) {
    $(document).ready(initSliders);
} else {
    // Fallback for deferred scripts
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSliders);
    } else {
        initSliders();
    }
}

document.body.addEventListener('click', function(event) {
    const parent = event.target.closest('.menu__item');
    if (parent) {
        parent.classList.toggle('open');
    }
}, true);

$(".t1 ").hover(function() {
    $('.n1').removeClass('hidden');
    $('.n2, .n3').addClass('hidden');
    $('.t2, .t3').removeClass('active');
    $('.t1').addClass('active');
}, function() {

});

$(".t2 ").hover(function() {
    $('.n2').removeClass('hidden');
    $('.n1, .n3').addClass('hidden');
    $('.t1, .t3').removeClass('active');
    $('.t2').addClass('active');
}, function() {

});

$(".t3 ").hover(function() {
    $('.n3').removeClass('hidden');
    $('.n1, .n2').addClass('hidden');
    $('.t1, .t2').removeClass('active');
    $('.t3').addClass('active');
}, function() {

});

function uncheck() {
    document.getElementById("menu__toggle").checked = false;
}

const whyBlockAnimation = () => {
    let img = document.querySelector('.why-block__img')
    let listItems = document.querySelectorAll('.why-block__list li')
    let list = document.querySelector('.why-block__list')

    listItems.forEach((listItem, index) => {
        listItem.addEventListener('mouseover', ()=>{
            img.classList.add(`animation-st-${index + 1}`)
            list.classList.add(`animation-st-${index + 1}`)
            listItems.forEach((item, i)=>{
                if(i != index) item.classList.add('unactive') 
            })
        })
        listItem.addEventListener('mouseout', ()=>{
            img.classList.remove(`animation-st-${index + 1}`)
            list.classList.remove(`animation-st-${index + 1}`)
            listItems.forEach(item => item.classList.remove('unactive'))
        })
    })
}

whyBlockAnimation()