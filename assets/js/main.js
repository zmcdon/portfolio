jQuery(document).ready(function($) {
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
// contact me slide
//     $(".btn-cta-primary").click(function() {
//     $('html, body').animate({
//         scrollTop: $(".scrollHere").offset().top
//     }, 1500);
// });

// fixed header
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 245) {
    $('.fixedHeader').fadeIn('slow');
  } else {
    $('.fixedHeader').fadeOut('slow');
  }
});



});