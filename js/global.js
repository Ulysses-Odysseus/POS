$(document).ready(function(){

	// Nav
	var nav = responsiveNav("#nav-collapse", { // Selector
		animate: true, // Boolean: Use CSS3 transitions, true or false
		transition: 284, // Integer: Speed of the transition, in milliseconds
		label: null, // String: Label for the navigation toggle
		insert: "before", // String: Insert the toggle before or after the navigation
		customToggle: ".mobile-menu", // Selector: Specify the ID of a custom toggle
		closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
		openPos: "relative", // String: Position of the opened nav, relative or static
		navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
		navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
		jsClass: "js", // String: 'JS enabled' class which is added to  element
		init: function(){}, // Function: Init callback
		open: function(){ $('.header').addClass('header--in-content'); }, // Function: Open callback
		close: function(){} // Function: Close callback
  	});

	// Behavior for mobile Navigation
  	var wScrollBefore	= 0,
		 wScrollDiff	= 0;

	;( function( $, window, document, undefined ){
		'use strict';

		var $document		 = $( document ),
			 $window			 = $( window ),
			 // dHeight			 = 0,
			 // wHeight			 = 0,
			 wScrollCurrent = 0,
			 wScrollBefore	 = 0//,
			 // wScrollDiff	 = 0,
			 // elHeight		 = 0;

		$window.on( 'scroll', function(){
			// elHeight			= $('.header').outerHeight();
			// dHeight			= $document.height();
			// wHeight			= $window.height();
			wScrollCurrent	= $window.scrollTop();
			wScrollDiff		= wScrollBefore - wScrollCurrent;
			
			//If scrolling up
			if( wScrollCurrent > wScrollBefore){
				nav.close();
				// console.log('Going Down!');
			}
			// console.log(
				// 'Current Scroll:' + wScrollCurrent,
				// '- Scroll Diff:' + wScrollDiff,
				// '- Window Height:' + wHeight,
				// '- Document Height:' + dHeight,
				// '- Element Height:' + elHeight
			// );
		});
	})( jQuery, window, document );

	// Slider
   $('.testimonials-slider').slick({
		arrows: false,
		centerMode: true,
		// respondTo: 
		centerPadding: '0px',
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,

		responsive: [
		{
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  slidesToShow: 1
			}
		}
		]
   });

   // Video Aspect Ratio
   // Find all YouTube Vimeo/videos
	var $allVideos = $(".video iframe"),

    // The element that is fluid width
    $fluidEl = $("body");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		// $(this)
		// 	// jQuery .data does not work on object/embed elements
		// 	.data('aspectRatio', this.height / this.width)

		// 	// and remove the hard coded width/height
		// 	.removeAttr('height')
		// 	.removeAttr('width');

	});

	// When the window is resized
	$(window).resize(function() {

  		var newWidth = $fluidEl.width();

  		// Video full width (100%) will be on breakpoint
  		var breakpoint = '640';
  		if(newWidth < breakpoint){
		  	// Resize all videos according to their own aspect ratio
		  	$allVideos.each(function() {

		  		$(this)
				// jQuery .data does not work on object/embed elements
				.data('aspectRatio', this.height / this.width)

				// and remove the hard coded width/height
				.removeAttr('height')
				.removeAttr('width');

			   var $el = $(this);
			   $el
			     .width(newWidth)
			     .height(newWidth * $el.data('aspectRatio'));
			});
	  };
		console.log($allVideos + ' How many: ' + $allVideos.length);
	// Kick off one resize to fix all videos on page load
	}).resize();
});