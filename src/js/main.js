$(document).ready(function () {
   let caseSlider = $('.case-slider');
   let caseSliderArrowLeft = $('button.arr-left');
   let caseSliderArrowRight = $('button.arr-right');
   caseSlider.owlCarousel({
		items:1,
		loop: true,
		navSpeed: 800,
		smartSpeed:800

   });
   $(caseSliderArrowRight).click(function () {
		caseSlider.trigger("next.owl.carousel");

	});
	$(caseSliderArrowLeft).click(function () {
		caseSlider.trigger("prev.owl.carousel");

	});

})