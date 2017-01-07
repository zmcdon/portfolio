class StoryBox extends React.Component {
  render() {
    const now = new Date();


    return React.createElement('div', [],
        [
          React.createElement('h3', { value: 'Stories' }),
          React.createElement(
              'p', 
              { 
                className: 'lead', 
              }, 
              ["Welcome, current time:" + now.toTimeString()]),
          React.createElement(
              'p', 
              { 
                className: 'lead-two', 
              }, 
              ['time section created with React.JS ']),
        ]);
  } 
}


$(document).on('ready', function() 
  {

    ReactDOM.render (
        React.createElement(StoryBox),
        document.getElementById('story-box')
      );


   $('.level-bar-inner').css('width', '0');
  // contact me slide
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

});