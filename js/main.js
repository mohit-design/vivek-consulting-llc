$(document).ready(function() {
  // On Scroll Up Desktop Header JS
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 5) {
	    $(".bg-desktop-navbar-menu").addClass("active");
	   } else {
	    $(".bg-desktop-navbar-menu").removeClass("active");
	   }
	});
	// Hamburger Menu and Navbar Menu JS
  $(".burger-menu").click(function() {
		$(this).toggleClass("active");
		$("body").toggleClass("active");
		$(".bg-blur").toggleClass("active");
		$(".fixed-navbar-menu-mobile").toggleClass("active");
	});
	$(".fixed-navbar-menu-mobile-close > i").click(function() {
		$("body").removeClass("active");
		$(".fixed-navbar-menu-mobile").removeClass("active");
	});
	$(".menu-listing-mobile > li > i").click(function() {
		$(".sub-menu-listing-mobile").slideToggle();
	});
	$(".sub-menu-listing-mobile").on("click", "li > i", function() {
		$(this).toggleClass("active").next().slideToggle();
		$(".sub-sub-menu-listing-mobile").not($(this).next()).slideUp(300);						 
		$(this).siblings().removeClass("active");
	});
});