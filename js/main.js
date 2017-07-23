$(document).ready(function(){

	(function(document){
			var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));

			_bars.map(function(bar,index){
				setTimeout(function(){
					bar.style.width = bar.dataset.percent;
				}, index*500);
			})
				})(document);

	var _bars = $(".bar-inner");
	

	

  }




});