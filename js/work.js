$(document).ready(function() {
  // Work Section GreenSock Animation Platform JS
  const workMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#workMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".work-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const workMainHeadingSplit = new SplitText(".work-main-heading");
  workMainHeadingTimeline.from(workMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
});