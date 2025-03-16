(function ($) {
	"use strict";
	
	// Hero slider
	$('.js-hero-slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		arrows: false,
		fade: true,
		speed: 800
	});
	
	$(document).ready(function() {
	
    	setTimeout(function(){
    		$('body').addClass('loaded');
    		document.getElementById("loader").style.visibility = "hidden";
    	}, 3000);
    	
    });
	
	$(document).ready(function(){
		$('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
	});
	
	$(window).on('scroll', function () {
        if ($(this).scrollTop() > 150) {
            $('#buttonmusic').fadeIn('fast');
        }else {
            $('#buttonmusic').fadeOut('fast');
        }
    });

	/* COUNTDOWN*/
	var $countdown = $('.js-counter');
	var $date = $countdown.attr('data-date');

	$countdown.countdown($date, function(event) {
		$('.js-counter-days').html(event.strftime('%D'));
		$('.js-counter-hours').html(event.strftime('%H'));
		$('.js-counter-minutes').html(event.strftime('%M'));
		$('.js-counter-seconds').html(event.strftime('%S'));
	});

	/* ANIMASI */
	AOS.init({
		disable: false,
		easing: 'ease', 
		once: false,
		mirror: true,
		duration: 900
	});


	/* MASONRY GRID */
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		//columnWidth: '.grid-sizer',
		gutter: '.gutter-sizer',
	});

	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});
	
    jQuery('.story-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
	
	$(document).ready(function(){
		$(document).bind("contextmenu",function(e){
			return false;
		});
	});
	
	var btnmodal = document.getElementById("btn-open");
	var btnmusic = document.getElementById("buttonmusic");
	var audio = document.getElementById("player");
	var videonya = document.getElementById("videonya");
	
	audio.loop = true;

	btnmodal.addEventListener("click", function(){
		$('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
	    
	    if(audio.paused){
	        audio.play();
	        btnmusic.innerHTML = "<ion-icon name='volume-high-outline'></ion-icon>";
	    }
	    
	    $('#btn-open').removeAttr('id');
		
		return false;
	});
	
	btnmusic.addEventListener("click", function(){
		if(audio.paused){
			audio.play();
			btnmusic.innerHTML = "<ion-icon name='volume-high-outline'></ion-icon>";
		} else {
			audio.pause();
			btnmusic.innerHTML = "<ion-icon name='volume-mute-outline'></ion-icon>";
		}
	});
	
	videonya.onplay = function(){
	    audio.pause();
	    btnmusic.innerHTML = "<ion-icon name='volume-mute-outline'></ion-icon>";
	};
	videonya.onpause = function(){
	    audio.play();
	    btnmusic.innerHTML = "<ion-icon name='volume-high-outline'></ion-icon>";};

}(jQuery));
