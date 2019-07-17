//=require ../blocks/**/*.js

// адаптация видео

$(document).ready(function(){
	widthVid ();
	headerFix();
});

$(window).on('resize', function(){
	widthVid ();
	headerFix();
})

$(window).on('scroll', () => {
	headerFix();
})

function widthVid () {
	var widthVideo = $('.video-block').width()
	$('.video-block').css('height', (widthVideo*532/1280) - 2  + 'px' );
}

function headerFix(){
	let haeaderHeight = $('.header').height(),
			windowScroll = $(window).scrollTop();
	
	if(windowScroll >= haeaderHeight) {
		$('.menu__wrapper').addClass('fixed');
	} else {
		$('.menu__wrapper').removeClass('fixed');
	}
}