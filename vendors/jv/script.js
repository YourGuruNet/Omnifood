$(document).ready(function() {
 /*Sticky navigation----------------------------------------------*/

    $('.JS--section-futures').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        }, {
            offset: '25%'
 });

 /*Scrool on button*/
    $('.js--scrole-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);


    });
    $('.js--scrole-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.JS--section-futures').offset().top}, 1000);


    });
    // Select all links with hashes
 $('a[href*="#"]')
 // Remove links that don't actually link to anything
 .not('[href="#"]')
 .not('[href="#0"]')
 .click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
 });
 /*mobil nav------*/

 $('.js--mobile-nav-open').click(function() {
 var nav = $('.js--main-nav');
 var icon = $('.js--mobile-nav-open i');

 nav.slideToggle(200);
 if (icon.hasClass('fas fa-align-justify')) {
   icon.addClass('far fa-times-circle');
   icon.removeClass('fas fa-align-justify');
 } else {
 icon.addClass('fas fa-align-justify');
   icon.removeClass('far fa-times-circle');
 }
  });
      
});