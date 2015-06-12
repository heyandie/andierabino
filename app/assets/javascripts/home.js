
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

    	$("span.skill").each(function(index){


    		var count = $(this).data('count');
			var str = ''; 
			for(var cnt=0; cnt < count; cnt++){ 
				 if(index%2!=0)
				 	str += '<span class="indicator red active">★</span>'; 
				 else
			     	str += '<span class="indicator active">★</span>'; 
			} 

			for(var cnt=0; cnt < 10-count; cnt++){ 
			     str += '<span class="indicator">★</span>'; 
			} 
			$(this).after(str);
		});
    	
	  	$('a[href^="#"]').on('click',function(){
			

			var target = $(this).attr("href");
			var $target = $(target);

			$('html,body').animate({
				scrollTop:$target.offset().top
			},500,"swing");

			if($('.toggle-menu').hasClass('toggle-to-close'))
				toggleClose();
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
		var controller = new ScrollMagic.Controller();
		
		new ScrollMagic.Scene({
			triggerHook: "onLeave",
			triggerElement: '#about',
			duration:100,
			offset: -450
		})
		.setTween(new TimelineMax().add(
			[TweenMax.to("#home-banner",0.5,{opacity:0.5}),
			TweenMax.to("#link-up",1,{opacity:1,visibility:'visible'})]))
		.addTo(controller);


		$(".subsection-illustration.illus-left,.subsection-illustration.illus-right").each(function(){
			var elem = $(this);
			new ScrollMagic.Scene({
				triggerElement:this,
				triggerHook:"onLeave",
				offset:-350,
				reverse: true
			})
			.setTween(new TimelineMax().add([
				 TweenMax.to(elem.parents('.subsection').find('.subsection-heading').first(),0.5,{opacity:1,delay:0}),
				 TweenMax.to(elem.parents('.subsection').find('.section-p').first(),0.7,{opacity:1,delay:0}),
				 TweenMax.to(elem.find('img').first(),0.3,{left:0,opacity:1,delay:0})
				]))
			.addTo(controller)
			.on("start", function (event) {


				$heading=elem.parents('.subsection').find('.subsection-heading');
				

				$p=elem.parents('.subsection').find('.section-p').first();
				$text=$heading.text();
				$heading.shuffleText($text);
		
			
			});

		});

		new ScrollMagic.Scene({
			triggerElement: "#contact",
			triggerHook:"onEnter",
			reverse:true,
			offset:-150
		})
		.setTween(new TimelineMax().add([
			TweenMax.to("#contact",1,{'background-color':"#00a99d"}),
			TweenMax.to("#contact",0.3,{'opacity':"1"}),
			TweenMax.to("#link-up",1,{color:"#fff"})
			]))
		.addTo(controller);


	
    });


    

	

});