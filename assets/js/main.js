$('.level-bar-inner').css('width', '0');
  // contact me slide #1
    $(".btn-cta-primary").click(function() {
    $('html, body').animate({
        scrollTop: $(".sr-only").offset().top - 87
    }, 1500);

  // fixed header
  $(document).on('scroll', function() {
    var y = $(this).scrollTop();
    if (y > 245) {
      $('.fixedHeader').fadeIn('slow');
    } else {
      $('.fixedHeader').fadeOut('slow');
    }
  });
});

$(window).on('load', function() {

    $('.level-bar-inner').each(function() {
        var itemWidth = $(this).data('level');

        $(this).animate({
            width: itemWidth,
        }, 800);
        
    });

});
