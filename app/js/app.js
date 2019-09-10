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

$('#calc__summ, #calc__mouth').on('keyup', function () {
	$(this).val($(this).val().replace (/\D/, ''));
	calcMain()
});

function calcMain(){
	let userSumm = +$('#calc__summ').val(),
		userMouth = +$('#calc__mouth').val(),
		stavka = 10,
		ndfl = 13,
		days = 365,
		summMouth = userSumm/userMouth;


	if(userSumm>0 && userMouth> 0) {
		/*Считаем остаток долга*/
		let ostatokDolga = [];  

		for(let i=1; i<=userMouth; i++){
			ostatokDolga.push(userSumm - (i*summMouth));
			console.log(i)
		}

		console.log(ostatokDolga)

		/* Считаем доход в месяц */

		let proc = userSumm/365*stavka/100

		let dohod = proc*31*userMouth;
		let dohodMouth = proc*31;
		let total = dohod + userSumm;

		$('#calc__proc').val(dohodMouth.toFixed(2));
		$('#calc__proc-total').val(dohod.toFixed(2));
		$('#calc__total-summ').val(total.toFixed(2));
		
		

		console.log(proc,proc*30,dohod)

	}

		
}