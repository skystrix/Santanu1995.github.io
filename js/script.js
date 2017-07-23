$(document).ready(function(){

	$(window).scroll(function(){
//   PRO PIC DOWN MOVING ANIMATION --------------------------------------------------------
		var wScroll = $(this).scrollTop();

		if (wScroll<=1000) {
			$('.back-img').show();
			$('.back-img').css({
	      'transform' : 'translate(0px, '+ wScroll /4.2 +'%)'
	    });
		}
		if (wScroll>1000) {
			$('.back-img').hide();
		}
		if (wScroll>1000) {
			$('.skill-back').css({
	      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
	    });
		}

//  WORKS---------------------------------------------------------------------------------

		if(wScroll > $('.works').offset().top - ($(window).height() / 2)) {

    		$('.works figure').each(function(i){

      		setTimeout(function(){
        		$('.works figure').eq(i).addClass('is-showing');
      			}, (700 * (Math.exp(i * 0.14))) - 700);
    		});

  		}
		
//	periscope...............................................................................  		

	}) //END OF WINDOW SCROLL
var wScroll = $(window).scrollTop();
	if(wScroll > $('.property').offset().top) {

	    	$('.count').each(function(){
					$(this).prop('Counter',0).animate({
						Counter:$(this).text()
					},{
						duration:1000,
						easing:'swing',
						step: function(now){
							$(this).text(Math.ceil(now));
						}
					
					})
			})

	  	}	
	




});


