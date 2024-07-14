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
  // Mission and Vision Section GreenSock Animation Platform JS
  const missionVisionMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#missionVisionMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".mission-vision-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const missionVisionMainHeadingSplit = new SplitText(".mission-vision-main-heading");
  missionVisionMainHeadingTimeline.from(missionVisionMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
  // Testimonials Section GreenSock Animation Platform JS
  const testimonialsMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#testimonialsMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".testimonials-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const testimonialsMainHeadingSplit = new SplitText(".testimonials-main-heading");
  testimonialsMainHeadingTimeline.from(testimonialsMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
  // Testimonials Section JS
  $(".testimonials-slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});