$(function() {

  // $(window).resize(function() {
  //   var portfolioWidth = $('.portfolio-overview').width();
  //   $('.portfolio-overview').css({'height' : portfolioWidth +'px'});
  // });

$(".about-me-line").hide();
$(".portfolio-overview").hide();
$(".myspace-display").hide();
$(".viberate-display").hide();
$(".screencapp-display").hide();
$(".lemonadestand-display").hide();
$(".dating-display").hide();

$(".line-1").fadeIn(600);

$(".reveal").on("click", function() {
  var clickedClass = $(this).attr("class").toString();
  var clickedNumber = clickedClass.split("-").pop();
  clickedNumber = parseInt(clickedNumber);
  clickedNumber++;
  $(".line-" + clickedNumber).fadeIn(600);
})

$(".open-portfolio").on("click", function() {
  $(".myspace-display").hide();
  $(".viberate-display").hide();
  $(".screencapp-display").hide();
  $(".lemonadestand-display").hide();
  $(".dating-display").hide();
  $(".portfolio-overview").fadeIn(600);
})

$(".portfolio-item").on("click", function() {
  var clickedClass = $(this).attr("class").toString();
  var endingIndex = clickedClass.indexOf("-");
  var targetItem = clickedClass.substring(0, endingIndex);

  $(".portfolio-overview").hide();
  $("." + targetItem + "-display").fadeIn(600);

    // $(".portfolio-overview").hide();
    // $(".myspace-display").
  })

$(".back-button").on("click", function() {
  var clickedClass = $(this).attr("class").toString();
  var endingIndex = clickedClass.indexOf("-");
  var targetItem = clickedClass.substring(0, endingIndex);
  $("." + targetItem + "-display").hide();
  $(".portfolio-overview").fadeIn(600);
})

})


// $(window).resize(function() {
//   var portfolioWidth = $('.portfolio-overview').width();
//   $('.portfolio-overview').css({'height' : portfolioWidth +'px'});
// });