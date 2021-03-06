/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 75) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


// $(function() {
  
//   $(document).on('scroll resize', function() {
    
//     var $d = $(document),
//         $w = $(window);
    
//     $('div#scroll-bar').width(
//       ($d.scrollTop() / ($d.height() - $w.height()) * $d.height()) + 'px');
    
//   });
 
// });
/*
const progressBar = document.getElementById("scroll-bar");
const progressFill = progressBar.firstElementChild;

window.addEventListener("scroll", () => {
	updateProgress();
});

function updateProgress() {
	let width = progressBar.clientWidth;
	let progress =
		window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
	// fill progress bar
	progressBar.style.width = Math.ceil(100 * progress) + "%";
}

updateProgress();*/

$('#supporter a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

// Can also be included with a regular script tag
//import Typed from 'typed.js';

var options = {
  strings: ['Guiding Instituition ^3000', 'Angel Investor ^3000', "Funding Organization ^3000","Developer ^3000","Benefactor ^3000","Contributor ^3000",],
  typeSpeed: 40,
  loop:true
};

var typed = new Typed('.supporter', options);