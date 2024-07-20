$(document).ready(function() {
  // Estimation Section GreenSock Animation Platform JS
  const estimationMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#estimationMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".estimation-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const estimationMainHeadingSplit = new SplitText(".estimation-main-heading");
  estimationMainHeadingTimeline.from(estimationMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
});