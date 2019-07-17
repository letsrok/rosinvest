"use strict";

// Feedback Begin
$('.feedback__input_requied').on('change', function () {
  verifyForm($(this));
});
$('.feedback__input[type="phone"]').on('keyup', function () {
  $(this).val($(this).val().replace(/\D/, ''));
});

function verifyForm(target) {
  var value = target.val().trim().length;

  if (value < 1) {
    target.addClass('feedback__input_error');
    target.prev('.feedback__placeholder').addClass('feedback__placeholder_error');
    return false;
  } else {
    target.removeClass('feedback__input_error');
    target.prev('.feedback__placeholder').removeClass('feedback__placeholder_error');
    return 1;
  }
}

$('.js-feedback-send').on('click', function () {
  $('.feedback__input_requied').each(function () {
    verifyForm($(this));
  });

  if ($('.feedback__placeholder_error').length > 0) {
    if ($('.feedback__done').is(':visible') || $('.feedback__load-wrap').is(':visible')) {
      $('.feedback__error').delay(500).fadeIn(500);
      $('.feedback__done, .feedback__load-wrap').fadeOut(500);
    } else {
      $('.feedback__error').fadeIn(500);
    }
  } else {
    if ($('.feedback__done').is(':visible') || $('.feedback__error').is(':visible')) {
      $('.feedback__load-wrap').delay(500).fadeIn(500);
      $('.feedback__error, .feedback__done').fadeOut(500);
    } else {
      $('.feedback__load-wrap').fadeIn(500);
    }
  }
}); // Feedback End

/*Form Begin*/

$('.js-datepicker').each(function () {
  var el = $(this);
  el.datepicker();
});

if ($('.js-select').length) {
  var choices = new Choices('.js-select', {
    searchEnabled: false,
    itemSelectText: ''
  });
}

$(document).on('click', '.js-numberbox-minus, .js-numberbox-plus', function (e) {
  e.preventDefault();
  var input = $(this).parent().find('.js-numberbox-input');
  var val = +input.val();
  var minus = $(this).attr('class').includes('minus') || false;

  if (!val.length) {
    input.val(1);
  }

  if (minus) {
    input.val(val > 0 ? val -= 1 : 0);
  } else {
    input.val(val += 1);
  }
});
$(document).on('keyup change', '.js-numberbox-input', function () {
  this.value = this.value.replace(/[^\d]/, '');
  if ($(this).val() < 0) $(this).val(0);
});
/*Form End*/

/* eslint-disable */

function freeze() {
  var h = $('html');

  if (h.css('position') !== 'fixed') {
    var top = h.scrollTop() ? h.scrollTop() : $('body').scrollTop();

    if (window.innerWidth > h.width()) {
      h.css('overflow-y', 'scroll');
    }

    h.css({
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: -top
    });
  }
}

function unfreeze() {
  var h = $('html');

  if (h.css('position') === 'fixed') {
    h.css('position', 'static');
    $('html, body').scrollTop(-parseInt(h.css('top'), 10));
    h.css({
      position: '',
      width: '',
      height: '',
      top: '',
      'overflow-y': ''
    });
  }
}
/* eslint-enable */

/* Menu Begin */


var point = 988,
    animDuratoion = 250;
/*
$(document).ready(() => {
	$('.nav__item').each(function(){
		if($(this).has('ul').length ) {
			$(this).addClass('nav__item_parent');
		}
	})
});*/

$('.nav__link_parent').hover(function () {
  var ww = $(window).width();

  if (ww >= point) {
    $(this).siblings('.nav__drop').addClass('nav__drop_desktop-active');
  }
}, function () {
  var ww = $(window).width();

  if (ww >= point) {
    setTimeout(function () {
      $(this).siblings('.nav__drop').removeClass('nav__drop_desktop-active');
    }, 100);
  }
});
$('.nav__drop').hover(function () {
  var ww = $(window).width();

  if (ww >= point) {
    $(this).addClass('nav__drop_desktop-active');
    console.log(13);
  }
}, function () {
  var ww = $(window).width();

  if (ww >= point) {
    $(this).removeClass('nav__drop_desktop-active');
  }
});
$('.nav__item_drop').hover(function () {
  var ww = $(window).width();

  if (ww >= point) {
    $(this).children('.nav__sub').addClass('nav__sub_desktop-active');
  }
}, function () {
  var ww = $(window).width();

  if (ww >= point) {
    $(this).children('.nav__sub').removeClass('nav__sub_desktop-active');
  }
});
$('.nav__link_parent').on('click', function (e) {
  var ww = $(window).width();

  if (ww < point) {
    e.preventDefault();

    if ($(this).siblings('ul').hasClass('nav__drop')) {
      $(this).siblings('ul').addClass('nav__drop_active');
      $('.nav__prev').addClass('nav__prev_active').fadeIn(animDuratoion);
    } else if ($(this).siblings('ul').hasClass('nav__sub')) {
      $(this).siblings('ul').addClass('nav__sub_active');
    }
  }
});
$('.nav__prev').on('click', function () {
  if ($('.nav__sub').hasClass('nav__sub_active')) {
    $('.nav__sub').removeClass('nav__sub_active');
  } else if ($('.nav__drop').hasClass('nav__drop_active')) {
    $('.nav__drop').removeClass('nav__drop_active');
    $(this).fadeOut(animDuratoion);
  }
});
$('.burger').on('click', function () {
  $('.nav').toggleClass('nav_active');
  $('.burger').toggleClass('burger_active');
  $('body').toggleClass('body_freeze');
});
$(window).on('resize', function () {
  if ($(window).width() >= point) {
    $('body').removeClass('body_freeze');
    $('.nav').removeClass('nav_active');
    $('.burger').removeClass('burger_active');
  }
});
/* Menu End */

/*Popups Begin eslint-disable*/

$(document).on('click', '.js-popup', function () {
  var popupTarget = $(this).attr('data-popup');
  $('.popups').addClass('popups_open');
  $(".".concat(popupTarget)).show().removeClass('popup_close').addClass('popup_open');
  freeze();
  return false;
});
$(document).on('click', '.popup__close, .popups__overlay', function () {
  $('.popup').addClass('popup_close').removeClass('popup_open');
  setTimeout(function () {
    $('.popup').hide();
  }, 500);
  setTimeout(function () {
    $('.popups').removeClass('popups_open');
  }, 500);
  unfreeze();
  return false;
});
/*Popups End eslint-enable*/
// Slider Begin

$(document).ready(function () {
  var slider = new Swiper('.info-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.slider__button_next',
      prevEl: '.slider__button_prev'
    }
  });
  var sliderOtzyvy = new Swiper('.slider_otzyvy', {
    slidesPerView: 3,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    spaceBetween: 24,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.slider__button_otz_prev',
      prevEl: '.slider__button_otz_next'
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
  var ww = 998;

  function calcHide() {
    var windowWidth = $(window).width();

    if (windowWidth >= ww) {
      $('.info__calc').addClass('hide');
    }
  }

  function calcShow() {
    var windowWidth = $(window).width();

    if (windowWidth >= ww) {
      $('.info__calc').removeClass('hide');
    }
  }

  $('.slider__button, .slider__title, .slider__more').hover(function () {
    calcHide();
  }, function () {
    calcShow();
  });
}); // Slider End
// адаптация видео

$(document).ready(function () {
  widthVid();
  headerFix();
  videoPlay();
});
$(window).on('resize', function () {
  widthVid();
  headerFix();
});
$(window).on('scroll', function () {
  headerFix();
});

function widthVid() {
  var widthVideo = $('.video-block').width();
  $('.video-block').css('height', widthVideo * 532 / 1280 - 2 + 'px');
}

function headerFix() {
  var haeaderHeight = $('.header').height(),
      windowScroll = $(window).scrollTop();

  if (windowScroll >= haeaderHeight) {
    $('.menu__wrapper').addClass('fixed');
  } else {
    $('.menu__wrapper').removeClass('fixed');
  }
}

function videoPlay() {
  var playlist = ['images/test-2.mp4', 'images/test-1.mp4'];
  var videoLen = playlist.length;
  var videoDiv = $('.video-main');

  if (videoDiv.length >= 1) {
    var i = 1;
    videoDiv.attr('src', playlist[i - 1]);
    videoDiv.get(0).play();
    videoDiv.on('ended', function () {
      i++;

      if (i > videoLen) {
        i = 1;
      }

      ;
      videoDiv.attr('src', playlist[i - 1]);
      videoDiv.get(0).load();
      videoDiv.get(0).play();
    });
  }
}