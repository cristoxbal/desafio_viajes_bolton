// SCRIPTS
// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
});

// Navbar-scrolled
window.addEventListener("scroll", function () {
  document.querySelector("#navbar-primary").classList.toggle("navbar-Scroll", window.scrollY >= 60); 
})

window.addEventListener("scroll", function cambiarLogo() {
  $("#logo").attr("src","img/logo2.png", window.scrollY >= 60);
})


//BTN Go-TOP
addEventListener('DOMContentLoaded', () => {
  const btn_go_top = document.querySelector('#goTop')
  
  const get_start_pixels = () => document.documentElement.scrollTop || document.body.scrollTop // Contar pixeles desde el Top

   const indicarScroll = () => { // Oculta y muestra btn_goTop
     if (get_start_pixels() > 300) { btn_go_top.className = 'mostrar'} 
       else { btn_go_top.className = 'ocultar'}
   }
  btn_go_top.addEventListener('click', goTop)
  window.addEventListener('scroll', indicarScroll)
})


// TOOLTIPS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})