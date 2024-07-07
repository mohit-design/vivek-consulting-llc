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