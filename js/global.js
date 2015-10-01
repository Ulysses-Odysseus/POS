// Sticky Header :: Shows up only in scroll up.
// $(window).scroll(function() {
// if ($(this).scrollTop() > 1){  
//     $('header').addClass("sticky");
//   }
//   else{
//     $('header').removeClass("sticky");
//   }
// });

var wgTitle = $('.white-section .gradientTitle');
var wgTitleCtx = wgTitle.getContext("2d");
// Create gradient
var gradient=wgTitleCtx.createLinearGradient(0,0,wgTitle.width,0);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1.0","red");
// Fill with gradient
wgTitleCtx.fillStyle=gradient;
wgTitleCtx.fillText("Big smile!",10,90);