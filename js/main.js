// SCRIPTS
// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
});

// SMOOTH SCROLL JQUERY
$('html, body').animate({
    scrollTop: $('section').offset().top
  }, 550);


// TOOLTIPS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})