// $(document).ready(function() {
//     $('#trigger').click(function(){
//       $("#dialog").dialog();
//     }); 
//   });   

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

// NAVBAR-------------------------------------------------

$(function($) { 
  $(document).ready(function(){
    $("#nav-placeholder").load("nav.html");
  });
})




// TITLE TRANSITION----------------------------------

$(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 600) {
                $('#fade').fadeIn(1500);
            } else {
                $('#fade').fadeOut(1500);
            }
        });
    });
})(jQuery);










