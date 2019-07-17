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

    const sliderOtzyvy = new Swiper('.slider_otzyvy', {
      slidesPerView: 3,
      centeredSlides: true,
      speed: 1000,
      loop: true,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.slider__button_otz_prev',
        prevEl: '.slider__button_otz_next',
      },
      breakpoints: {
        988: {
          slidesPerView: 2,
          centeredSlides: false
        },
        685: {
          slidesPerView: 1,
          autoHeight: true
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
