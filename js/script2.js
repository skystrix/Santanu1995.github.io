$(document).ready(function(){

	// hide #back-top first
	$("#myBtn").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				$('#myBtn').fadeIn();
			} else {
				$('#myBtn').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#myBtn a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});


	$("#bio").click(function() {
    $('html, body').animate({
        scrollTop: $("#bio1").offset().top
    }, 700);
	});

	$("#skills").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills1").offset().top + 400
    }, 700);
	});

	$("#works").click(function() {
    $('html, body').animate({
        scrollTop: $("#works1").offset().top
    }, 700);
	});

	$("#timeline").click(function() {
    $('html, body').animate({
        scrollTop: $("#timeline1").offset().top
    }, 700);
	});

	$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact1").offset().top
    }, 700);
	});



});

