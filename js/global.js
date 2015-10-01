$(document).ready(function(){
   $('.testimonials-slider').slick({
		arrows: false,
		centerMode: true,
		centerPadding: '10px',
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 5000,

		responsive: [
		{
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '10px',
			  slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '1px',
			  slidesToShow: 1
			}
		}
		]
   });
});