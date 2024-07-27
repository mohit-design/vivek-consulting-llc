$(document).ready(function() {
	// Career Section GreenSock Animation Platform JS
  const careerMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#careerMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".career-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const careerMainHeadingSplit = new SplitText(".career-main-heading");
  careerMainHeadingTimeline.from(careerMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
	// Job Description Section GreenSock Animation Platform JS
  const jdMainHeadingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#jdMainHeading",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".jd-main-heading", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const jdMainHeadingSplit = new SplitText(".jd-main-heading");
  jdMainHeadingTimeline.from(jdMainHeadingSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
	$(".jd-listing > li > a").click(function(event){
		event.preventDefault(); // stop browser to take action for clicked anchor
		// get displaying tab content jQuery selector
		var active_tab_selector = $(".jd-listing > li.active > a").attr("href");
		// find actived navigation and remove "active" css
		var actived_nav = $(".jd-listing > li.active");
		actived_nav.removeClass("active");
		// add "active" css into clicked navigation
		$(this).parents("li").addClass("active");
		// hide displaying tab content
		$(active_tab_selector).removeClass("active");
		$(active_tab_selector).addClass("hide");
		// show target tab content
		var target_tab_selector = $(this).attr("href");
		$(target_tab_selector).removeClass("hide");
		$(target_tab_selector).addClass("active");
	});
	// Custom Input File JS
	$("#FileInput").on("change",function (e) {
		var labelVal = $(".title").text();
		var oldfileName = $(this).val();
		  fileName = e.target.value.split( "\\" ).pop();
		  if (oldfileName == fileName) {return false;}
		  var extension = fileName.split(".").pop();
		if(extension == "pdf"){
		  $(".filelabel i").removeClass().addClass("fas fa-file-pdf");
		  $(".filelabel i, .filelabel .title").css({"color":"#38ad7e"});
		  $(".filelabel").css({"border":" 2px solid #38ad7e"});
		} else if(extension == "doc" || extension == "docx") {
		  $(".filelabel i").removeClass().addClass("fas fa-file-word");
		  $(".filelabel i, .filelabel .title").css({"color":"#38ad7e"});
		  $(".filelabel").css({"border":" 2px solid #38ad7e"});
		} else {
	    $(".filelabel i").removeClass().addClass("fas fa-file");
	    $(".filelabel i, .filelabel .title").css({"color":"#38ad7e"});
	    $(".filelabel").css({"border":" 2px solid #38ad7e"});
		}
		if(fileName) {
      if (fileName.length > 10){
        $(".filelabel .title").text(fileName);
      } else {
        $(".filelabel .title").text(fileName);
      }
	  } else {
      $(".filelabel .title").text(labelVal);
	  }
	});
	// Career Form JS
 	$(".btn-apply > a").click(function(event) {
 		event.preventDefault();
    $(".career-form-section").slideToggle(700);
  });
});