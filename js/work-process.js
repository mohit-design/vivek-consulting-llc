$(document).ready(function() {
  // Work Process Section GreenSock Animation Platform JS
  const workProcessMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#workProcessMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".work-process-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const workProcessMainHeadingSplit = new SplitText(".work-process-main-heading");
  workProcessMainHeadingTimeline.from(workProcessMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
});