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

// CONTACT FORM----------------------------------

// <script language=”JavaScript”>
// var frmvalidator = new Validator(“contactform”); frmvalidator.addValidation(“name”,”req”,”Please provide your name”); frmvalidator.addValidation(“email”,”req”,”Please provide your email”); frmvalidator.addValidation(“email”,”email”, “Please enter a valid email address”); 
// </script>



// SCROLL TOP BUTTOM 

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


