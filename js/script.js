/*alert('Hello Gulp!');*/

/*function testWebP(callback) {
	var webP = new image();
	webP.onload = webP.onerror = function (){
		callback(webP.height == 2);
	};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});*/

$(document).ready(function() {
	$(window).scroll(function(event) {
			var s = $(this).scrollTop();
			var w = $(this).outerWidth();
			var h = $('.content').outerHeight();
			var h_b = $('.parallax').outerHeight();
			var p = s/h*100;
			var p_b = s/h_b*100;
			var o = 1-1/100*p_b;

			var z_1= 1 + (w/10000*p_b);
		$('.parallax__fog').css('transform','scale('+z_1+')');
		$('.parallax__fog').css('opacity',o);

			var z_2= 1 + (w/5000000*p_b);
		$('.parallax__mountain_1').css('transform','scale('+z_2+')');

			var hr = w/2000*p_b;
			var z_3 = 1+(w*0.00004*p_b)
		$('.parallax__mountain_2').css('transform','translate3d('+hr+'px,0,0) scale('+z_3+')');

			var hr_2 = w/1500*p_b;
			var z_4 = 1+(w*0.00003*p_b)
		$('.parallax__mountain_3').css('transform','translate3d('+hr_2+'px,0,0) scale('+z_4+')');


	});
});