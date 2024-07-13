$(document).ready(function() {
  // About Us Section GreenSock Animation Platform JS
  const whoWeAreMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#whoWeAreMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".who-we-are-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const whoWeAreMainHeadingSplit = new SplitText(".who-we-are-main-heading");
  whoWeAreMainHeadingTimeline.from(whoWeAreMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
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
  // Why Choose Us Section GreenSock Animation Platform JS
  const whyChooseUsMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#whyChooseUsMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".why-choose-us-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const whyChooseUsMainHeadingSplit = new SplitText(".why-choose-us-main-heading");
  whyChooseUsMainHeadingTimeline.from(whyChooseUsMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
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
  // Contact Us Section GreenSock Animation Platform JS
  const contactUsMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#contactUsMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".contact-us-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const contactUsMainHeadingSplit = new SplitText(".contact-us-main-heading");
  contactUsMainHeadingTimeline.from(contactUsMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
});