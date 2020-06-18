$(document).ready(function() {
    $('#trigger').click(function(){
      $("#dialog").dialog();
    }); 
  });   

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
      

// TITLE FADE OUT TRANSITION----------------------------------


$(window).scroll(function(){
    $(".fadeOut").css("opacity", 1 - $(window).scrollTop() / 150);
  });

// TITLE FADE IN TRANSITION----------------------------------





