/* <reference types="../@types/jquery"/> */

$(document).ready(function(){
    $(".side-nav").animate({width: "0"})
    $(".side-nav a").hide()
})

/* menu bar appearance */
$(".close-btn").click(function(){
    $(".side-nav").animate({width: "0"}, function(){
        $(".side-nav a").hide()
    })
})

$(".open-menu").click(function(){
    $(".side-nav").animate({width: "250"})
    $(".side-nav a").show()
})


/* singers  slider section */
$(".title").click(function () {
  $(".descr").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(1000);
});

/* Counter section [set the date for : 31-07-2024] */
$(document).ready(function () {
  var eventDate = new Date("Jul 31, 2024 23:59:59").getTime();

  var countdownFunction = setInterval(function () {
    var now = new Date().getTime();
    var time = eventDate - now;

    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);

    $(".days").text(days + " days");
    $(".hrs").text(hours + " hrs");
    $(".mins").text(minutes + " mins");
    $(".sec").text(seconds + " sec");

    // If the countdown is over, write some text
    if (time < 0) {
      clearInterval(countdownFunction);
      $("#countdown").text("EXPIRED");
    }
  }, 1000);
});

/* characters counter form section */
$(".form").ready(function () {
  const maxChar = 100;
  $(".characters").text(maxChar);

  $("#text-area").on("input", function () {
    const messageLength = $(this).val().length;
    const remaining = maxChar - messageLength;
    $(".characters").text(remaining);

    if (remaining <= 0) {
      $("#characterCounter").text("You exceeded the character limit");
    } else {
      $("#characterCounter").text(remaining + " Characters Remaining");
      // $(".characters").text(remaining);
    }
  });
});
