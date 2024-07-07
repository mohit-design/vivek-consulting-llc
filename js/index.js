$(document).ready(function() {
  // Banner Slick Slider JS 
  $(".banner-slick-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1400
  });
  // Smooth Animation On Click of Link
  $(".banner-read-more > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      offSet = 52;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - offSet
      }, 1500);
    }
  });
  // Testimonials Section Slick Slider JS
  $(".testimonials-slick-slider-home").slick({
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
  // Blog Section Slick Slider JS
  $(".blog-slick-slider-home").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
  // Services JS
  // $(".box-services-home").mousemove(function() {
  //   $(this).addClass("active");
  //   $(".box-software-services-home").removeClass("active");
  // }).mouseleave(function() {
  //   $(".box-software-services-home").addClass("active");
  //   $(this).removeClass("active");
  // });
  // $(".box-software-services-home").mousemove(function() {
  //   $(this).addClass("active");
  // }).mouseleave(function() {
  //   $(this).addClass("active");
  // });
  // AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
});
$(window).on("load", function() {
	$(".grid").isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	}); 
	$(".portfolio-listing-home > li").click(function() {
		$(".portfolio-listing-home > li").removeClass("active");
		$(this).addClass("active");
		var selector = $(this).attr('data-filter');
		$(".grid").isotope({
			filter: selector
		});
		return false;
	});
});