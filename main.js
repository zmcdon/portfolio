$('.level-bar-inner').css('width', '0');
  // contact me slide #1
    $(".btn-cta-primary").click(function() {
    $('html, body').animate({
        scrollTop: $(".sr-only").offset().top - 87
    }, 1500);

  // fixed header
  $(document).on('scroll', function() {
    console.log("fixed header function running..")
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


$(document).on('mousedown', function(event){
  event.stopPropagation();


  if(event.which == 1){
    console.log(event.pageY, event.pageX);

    $('.context').css({
      top: event.pageY,
      left: event.pageX
    });

    $('.context').show()
  }


});




var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = dd+'/'+mm+'/'+yyyy;


fixedHeader = document.getElementById("fixedHeader");

var myScroll = function() {
  var y = window.scrollY;
  console.log(y);
  if (y >= 282) {
    fixedHeader.className = "bottomMenu showFixedHeader"
  } else {
    fixedHeader.className = "bottomMenu fixedHeader"
  }
};

window.addEventListener("scroll", myScroll);









