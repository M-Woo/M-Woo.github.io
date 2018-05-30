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


(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 600) {
                $('#menu').fadeIn(1000);
            } else {
                $('#menu').fadeOut(1000);
            }
        });
    });
})(jQuery);




window.addEventListener('message', function(e) {
  var data = e.data.split('-'),
    scroll_height = data[0],
    iframe_id = data[1];

  // Check message from which iframe
  if(iframe_id == 'iframe1')
    document.getElementById('iframe-container-1').style.height = scroll_height + 'px'; 
  else if(iframe_id == 'iframe2')
    document.getElementById('iframe-container-2').style.height = scroll_height + 'px'; 
} , false);










    $(function(){
    
        var iFrames = $('iframe');
      
      function iResize() {
      
        for (var i = 0, j = iFrames.length; i < j; i++) {
          iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';}
          }
          
          if ($.browser.safari || $.browser.opera) { 
          
             iFrames.load(function(){
                 setTimeout(iResize, 0);
               });
            
             for (var i = 0, j = iFrames.length; i < j; i++) {
              var iSource = iFrames[i].src;
              iFrames[i].src = '';
              iFrames[i].src = iSource;
               }
               
          } else {
             iFrames.load(function() { 
                 this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
             });
          }
        
        });

