$(function() {

  // $(window).resize(function() {
  //   var portfolioWidth = $('.portfolio-overview').width();
  //   $('.portfolio-overview').css({'height' : portfolioWidth +'px'});
  // });

  $(".about-me-line").hide();
  $(".portfolio-overview").hide();

  $(".line-1").fadeIn(600);

  $(".reveal").on("click", function() {
    var clickedClass = $(this).attr("class").toString();
    var clickedNumber = clickedClass.split("-").pop();
    clickedNumber = parseInt(clickedNumber);
    clickedNumber++;
    $(".line-" + clickedNumber).fadeIn(600);
  })

  $(".open-portfolio").on("click", function() {
    $(".portfolio-overview").fadeIn(600);
  })

})


// $(window).resize(function() {
//   var portfolioWidth = $('.portfolio-overview').width();
//   $('.portfolio-overview').css({'height' : portfolioWidth +'px'});
// });