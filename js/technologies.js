$(document).ready(function() {
  // Technologies Section GreenSock Animation Platform JS
  const technologiesMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#technologiesMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".technologies-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const technologiesMainHeadingSplit = new SplitText(".technologies-main-heading");
  technologiesMainHeadingTimeline.from(technologiesMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
});
$(window).on("load", function() {
	$(".grid").isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	}); 
	$(".tech-listing > li").click(function() {
		$(".tech-listing > li").removeClass("active");
		$(this).addClass("active");
		var selector = $(this).attr('data-filter');
		$(".grid").isotope({
			filter: selector
		});
		return false;
	});
});