
// typing
var typed = new Typed('.element', {
  strings: ['', '<span class="text-info fs-1 fw-bolder">I&acute;m</span> Full Stack Developer','<span class="text-info fs-1 fw-bolder">I&acute;m</span> Front-End Developer' , '<span class="text-info fs-1 fw-bolder">I&acute;m</span> Back-End Developer'],
  smartBackspace: true, // Default value
  loop:true,
  backSpeed: 30,
  typeSpeed:30,
  fadeOut: true,
  
});


// loding

$(document).ready(function(){
  $('#spinnar').fadeOut(1000,function(){
    $('body').css('overflow','auto')
  })
})



// nav bar
let about=$('#about').offset().top
function nav(){
let scrollTop=$(window).scrollTop();
  if(scrollTop >about-200){
    $('.navbar').fadeIn('slow').css('display', 'flex');
    $('#btnUp').fadeIn('slow').css('display', 'flex')
  }
  else{
    $('.navbar').fadeOut('slow').css('display', 'none');
    $('#btnUp').fadeOut('slow').css('display', 'none')

  }
}
nav()
$(window).scroll(()=>{
  nav()
})

// click on link for nav

$('.nav-item a[href^="#"]').click(function(){
  let aHref =$(this).attr('href')
  let navItem = $(aHref).offset().top
  $('li a').removeClass('active')
  $(this).addClass('active')
  $('html,body').animate({scrollTop: navItem },100)

})


// button up

$('#btnUp').click(()=>{
  $('html,body').animate({scrollTop: 0 },100)
})







$('#btn').click(()=>{

  play($('#in_name'),$('#d_name'))
  play($('#in_email'),$('#d_email'))
  play($('#in_subject'),$('#d_subject'))
  play($('#in_message'),$('#d_message'))



})

function play(x,y){
  if($(x).val() == "") {
    $(y).slideDown()
  }
  $('#btn').click(()=>{
    if($(x).val() != ""){
      $(y).slideUp()
    }
    else if($(x)!=""){
      $(x).val=""
    }
    else{
      $(y).slideDown()
    }
  })
}






















new WOW().init();
// back ground animation
particlesJS("particles-js", {"particles":{"number":{"value":163,"density":{"enable":true,"value_area":1919.23230707717}},"color":{"value":"#1314e0"},"shape":{"type":"circle","stroke":{"width":0,"color":"#951c5d"},"polygon":{"nb_sides":8},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":7.9,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;




