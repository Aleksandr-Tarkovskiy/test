$(function() {

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 15,
		nav: true,
		dots: false,
		responsiveClass:true,
		responsive:{
				1:{
						items:2,
						nav:false
				},
				576:{
						items:3,
						nav:false
				},
				768:{
						items:4,
						nav:false
				},
				1024:{
						items:4,
						nav:true
				}
		}
})

$(document).ready(function() {
	$('.i-click-1').on('click', function() {
		$('.slide-1').slideToggle(250);
		$('.up-1').toggle();
	});
	$('.i-click-2').on('click', function() {
		$('.slide-2').slideToggle(250);
		$('.up-2').toggle();
	});
});


});
