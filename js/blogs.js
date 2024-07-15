$(document).ready(function() {
  // Blogs Section GreenSock Animation Platform JS
  const blogsMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#blogsMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".blogs-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const blogsMainHeadingSplit = new SplitText(".blogs-main-heading");
  blogsMainHeadingTimeline.from(blogsMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
});