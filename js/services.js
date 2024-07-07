$(document).ready(function() {
  // Services JS
  $(".box-services-home").mousemove(function() {
    $(this).addClass("active");
    $(".box-software-services-home").removeClass("active");
  }).mouseleave(function() {
    $(".box-software-services-home").addClass("active");
    $(this).removeClass("active");
  });
  $(".box-software-services-home").mousemove(function() {
    $(this).addClass("active");
  }).mouseleave(function() {
    $(this).addClass("active");
  });
  // AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
});