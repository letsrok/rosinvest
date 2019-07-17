//=require ../blocks/**/*.js

// адаптация видео

$(document).ready(function(){
	widthVid ();
	headerFix();
	videoPlay();
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

function videoPlay(){
	const playlist  = [
		'images/test-2.mp4', 'images/test-1.mp4',
	];
	const videoLen = playlist.length;
	const videoDiv = $('.video-main');

	if(videoDiv.length >= 1) {
		let i = 1;

		videoDiv.attr('src', playlist[i-1]);

		videoDiv.get(0).play();

		videoDiv.on('ended', function(){
			i++;
			if (i > videoLen) { i = 1};
			
			videoDiv.attr('src', playlist[i-1]);
			videoDiv.get(0).load();
			videoDiv.get(0).play();
	})
	}
	

}