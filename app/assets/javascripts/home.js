
$(function(){
	$jpreOptions = { splashID: "#jpreSplash", loaderVPos: "50%" ,showSplash: true}
    $('body').jpreLoader($jpreOptions);
	$(".toggle-menu").on('click',function(){
		if($(this).hasClass('toggle-to-close')){
			toggleClose();
		}
			
		else{
			$("#menu-toggled").addClass('displayed');
			$(this).addClass('toggle-to-close');
			$('body').css({'height':'100%'});

			$('body').on('scroll touchmove mousewheel', function(e){
			  e.preventDefault();
			  e.stopPropagation();
			  return false;
			});
		}
			

	});

	function toggleClose(){
		$("#menu-toggled").removeClass('displayed');
		$('.toggle-menu').removeClass('toggle-to-close');
		$('body').css({'overflow-y':'auto','height':'auto'});
		$('body').off('scroll touchmove mousewheel');
	}

	$(window).resize(function(){
		toggleClose();
	})
	$(".banner-text").css("opacity","0");
	$("#main-nav").css("top","-100%");

	
	
    $(window).load(function(){
    	
	  	$('a[href^="#"]').on('click',function(){
			

			var target = $(this).attr("href");
			var $target = $(target);

			$('html,body').animate({
				scrollTop:$target.offset().top
			},500,"swing");
			$(".toggle-menu").click();
			return false;
			

		});
		$(".banner-bg").addClass('animated-banner');
		setTimeout(function(){

			$(".banner-text").animate({
					opacity: "1"
				},800,"swing");
		},1300);
		setTimeout(function(){

			$("#main-nav").animate({
					top: 0
				},800,"swing");
		},700);

		// init controller
		var controller = new ScrollMagic.Controller({
			globalSceneOptions:{
				triggerHook: 'onLeave'
			}
		});
		
		new ScrollMagic.Scene({
			triggerElement: '#about',
			duration:100,
			offset: -450
		})
		.setTween("#home-banner",0.5,{opacity:0.5})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#about-hello-content",
			triggerHook:"onCenter",
			offset:-400,
			reverse:true
		});

		$(".subsection-illustration.illus-left,.subsection-illustration.illus-right").each(function(){
			var elem = $(this);
			new ScrollMagic.Scene({
				triggerElement:this,
				triggerHook:"onCenter",
				offset:-400,
				reverse: true
			})
			.setTween(new TimelineMax().add([
				 TweenMax.to(elem.find('img').first(),0.5,{left:0}),
				 TweenMax.to(elem.parents('.subsection').find('.subsection-content').first(),0.8,{opacity:1})
				]))
			.addTo(controller);
		});
		
	
		

	
    });


    

	

});