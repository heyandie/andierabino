var caption = "";
var captionLength=0;
var elem;
var typed = 0;
var count=0;
var captions=[];

function type(){
	var deferred = $.Deferred();
	
	if(typed<toType.length)
		if(captionLength < caption.length+1){
			if(typed<toType.length-1)
				elem.html(caption.substr(0,captionLength++));
			else
				elem.html(caption.substr(0,captionLength++));

			var humanize = Math.round(Math.random() * (200 - 30)) + 30;
			setTimeout('type()',humanize);
		}else{
		

			captionLength=0;
			caption="";
			typed++;
			if(typed<toType.length){

				elem = toType[typed];
				caption = captions[typed];
				
			}
			deferred.resolve();
			
		}


	return deferred;
}


function erase(){
	var deferred = $.Deferred();

	elem.html(caption.substr(0,captionLength--) );
	if(captionLength >=0 && typed<toType.length){
		var humanize = Math.round(Math.random() * (200 - 30)) + 30;
		setTimeout('erase()',humanize);
	}else{

		captionLength=0;
		caption="";
		typed--;
		
		if(typed<toType.length){
			elem = toType[typed];
			caption = captions[typed];
		    captionLength = caption.length;
		}

		


		deferred.resolve();
		
	}

	

	return deferred;
}


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
    $(window).load(function(){

	    toType = [$(".hi"),$("#name-1"),$("#name-2"),$("#name-3"),$("#title-1"),$("#title-2")];
		$.each(toType,function(){
			captions.push($(this).html())
			$(this).html("");
		})

		
		elem = toType[typed];
		caption = captions[typed]
		maintyping = $.each(toType,function(index){
			if(index<toType.length){
				type().promise().done(type);
			}
				
			
		});
    });
   
	

});