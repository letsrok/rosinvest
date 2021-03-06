/* Menu Begin */

const point = 988,
	animDuratoion = 250;
/*
$(document).ready(() => {
	$('.nav__item').each(function(){
		if($(this).has('ul').length ) {
			$(this).addClass('nav__item_parent');
		}
	})
});*/

$('.nav__link_parent').hover(
	function () {
		let ww = $(window).width();
		if( ww >= point) {
			$(this).siblings('.nav__drop').addClass('nav__drop_desktop-active');
		}
	},
	function () {
		let ww = $(window).width();
		if( ww >= point) {
			setTimeout(function(){
				$(this).siblings('.nav__drop').removeClass('nav__drop_desktop-active');
			}, 100)
			
		}
	}
);

$('.nav__drop').hover(
	function(){
		let ww = $(window).width();
		if( ww >= point) {
			$(this).addClass('nav__drop_desktop-active');
			console.log(13)
		}
	},
	function(){
		let ww = $(window).width();
		if( ww >= point) {
			$(this).removeClass('nav__drop_desktop-active');
		}
	}
)

$('.nav__item_drop').hover(
	function () {
		let ww = $(window).width();
		if( ww >= point) {
			$(this).children('.nav__sub').addClass('nav__sub_desktop-active');
		}
	},
	function () {
		let ww = $(window).width();
		if( ww >= point) {
			$(this).children('.nav__sub').removeClass('nav__sub_desktop-active');
		}
	}
);

$('.nav__link_parent').on('click', function(e){
	let ww = $(window).width();
	if( ww < point ) {
		e.preventDefault();
		if( $(this).siblings('ul').hasClass('nav__drop')){
			$(this).siblings('ul').addClass('nav__drop_active');
			$('.nav__prev').addClass('nav__prev_active')
				.fadeIn(animDuratoion);
		} else if ($(this).siblings('ul').hasClass('nav__sub')){
			$(this).siblings('ul').addClass('nav__sub_active');
		}
	}
});

$('.nav__prev').on('click', function() {
	if( $('.nav__sub').hasClass('nav__sub_active') ) {
		$('.nav__sub').removeClass('nav__sub_active')
	} else if ($('.nav__drop').hasClass('nav__drop_active')) {
		$('.nav__drop').removeClass('nav__drop_active');
		$(this).fadeOut(animDuratoion);
	}
});


$('.burger').on('click', () => {
	$('.nav').toggleClass('nav_active');
	$('.burger').toggleClass('burger_active');
	$('body').toggleClass('body_freeze');
});

$(window).on('resize', () => {
	if( $(window).width() >= point ) {
		$('body').removeClass('body_freeze');
		$('.nav').removeClass('nav_active');
		$('.burger').removeClass('burger_active');
	}
})

/* Menu End */