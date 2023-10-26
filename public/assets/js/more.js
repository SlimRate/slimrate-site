$('.something-wrapper').slick({
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
        settings: {
            slidesToShow: 1,
        }
    }]
});

$('.we-support-swiper').slick({
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
        settings: {
            slidesToShow: 3,
        }
    }]
});

$('.hardware-cards').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
        }
    }]
});

$('.tech-stack-swiper').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 1199,
        settings: {
            slidesToShow: 1,
        }
    }, {
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
        }
    }]
});

$('.tariff-cards').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
        }
    }]
});

$('.gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
});

document.body.addEventListener('click', function(event) {
    const parent = event.target.closest('.menu__item');
    if (parent) {
        parent.classList.toggle('open');
    }
}, true);

$(".t1 ").hover(function() {
    $('.n1').removeClass('hidden');
    $('.n2').addClass('hidden');
    $('.t2').removeClass('active');
    $('.t1').addClass('active');
}, function() {

});

$(".t2 ").hover(function() {
    $('.n2').removeClass('hidden');
    $('.n1').addClass('hidden');
    $('.t1').removeClass('active');
    $('.t2').addClass('active');
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