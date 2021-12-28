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


//PROGRESS-BAR
addEventListener('DOMContentLoaded', () => {
  const btn_go_top = document.querySelector('#goTop')
  const progress_bar = document.querySelector('.indicator-scroll')
  
  const get_start_pixels = () => document.documentElement.scrollTop || document.body.scrollTop // Contar pixeles desde el Top

  // const goTop = () => {
  //   if (get_start_pixels() > 0) {
  //     requestAnimationFrame(goTop)
  //     // scrollTo(0, get_start_pixels() - (get_start_pixels() / 0.5)) // Animación del scrollTop
  //     scrollTo(0,0) // Animación del scrollTop
  //   }
  // }

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