// SCRIPTS
// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
});

// SMOOTH SCROLL JQUERY
$('html, body').animate({
    scrollTop: $('section').offset().top
  }, 550);