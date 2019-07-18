// Slider Begin

$(document).ready(function(){
  const slider = new Swiper('.info-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.slider__button_next',
      prevEl: '.slider__button_prev',
    }
  });

  const sliderOtzyv = new Swiper('.slider-otzyv', {
    slidesPerView: 3,
    speed: 1000,
    loop: true,
    spaceBetween: 24,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.otzyv-btn-next',
      prevEl: '.otzyv-btn-prev',
    },
    breakpoints: {
      878: {
        slidesPerView: 2,
      },
      685: {
        autoHeight: true,
        slidesPerView: 1,
      }
    }
  });

  const ww = 998

  function calcHide(){
    let windowWidth = $(window).width();
    if(windowWidth >= ww) {$('.info__calc').addClass('hide');}
    
  }
  function calcShow(){
    
    let windowWidth = $(window).width();
    if(windowWidth >= ww) {$('.info__calc').removeClass('hide');}
  }

  $('.slider__button, .slider__title, .slider__more').hover(
  () => {calcHide()},
  () => {calcShow()})

});

// Slider End
