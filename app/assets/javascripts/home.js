
$(function(){
	$jpreOptions = { splashID: "#jpreSplash", loaderVPos: "50%" ,showSplash: true}
    $('body').jpreLoader($jpreOptions);
	$(".toggle-menu").on('click',function(){
		if($(this).hasClass('toggle-to-close')){
			$("#menu-toggled").removeClass('displayed');
			$(this).removeClass('toggle-to-close');
		}
			
		else{
			$("#menu-toggled").addClass('displayed');
			$(this).addClass('toggle-to-close');
		}
			

	});
	$(".banner-text").css("opacity","0");
	$("#main-nav").css("top","-100%");
	
    $(window).load(function(){
    	
	  
		
		setTimeout(function(){

			$(".banner-text").animate({
					opacity: "1"
				},500,"swing");
		},1000);
		setTimeout(function(){

			$("#main-nav").animate({
					top: 0
				},1000,"swing");
		},400);
    });
   

	

});