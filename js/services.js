$(document).ready(function() {
  // Services Section GreenSock Animation Platform JS
  const servicesMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#servicesMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".services-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const servicesMainHeadingSplit = new SplitText(".services-main-heading");
  servicesMainHeadingTimeline.from(servicesMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
});