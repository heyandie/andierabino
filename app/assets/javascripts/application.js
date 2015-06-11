// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require greensock/TweenMax.min
//= require jquery
//= require jquery_ujs
//= require scrollToPlugin
//= require jpreloader
//= require jquery.shuffleText.min
//= require home
//= require modernizr.custom.min
//= require scrollmagic/uncompressed/ScrollMagic
//= require scrollmagic/uncompressed/plugins/debug.addIndicators
//= require scrollmagic/uncompressed/plugins/animation.gsap
//= require application

$(function(){
	
	var $window = $(window);		//Window object
	
	var scrollTime = 0.8;			//Scroll time
	var scrollDistance = 200;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
	
});