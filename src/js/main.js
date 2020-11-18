$(document).ready(function () {
	
	// SHOW MOB MENU
	const bodyEl = document.body;
	const menuToggle = document.querySelector('.menu-toggle');
	// const mobMenu = document.querySelector('#mobile-menu');
	// const overlayBlock = document.querySelector('#overlay');
	// const mobHeader = document.querySelector('.header');
	
	if (menuToggle) {
		menuToggle.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				this.classList.remove('active');
				// mobMenu.classList.remove('active');
				// overlayBlock.classList.remove('active');
				// bodyEl.classList.remove('noscroll');
				// mobHeader.classList.remove('active');

			} else {
				this.classList.add('active');
				// mobMenu.classList.add('active');
				// overlayBlock.classList.add('active');
				// mobHeader.classList.add('active');
				// bodyEl.classList.add('noscroll');

			}
		});
		window.addEventListener('resize', function () {
			menuToggle.classList.remove('active');
			// overlayBlock.classList.remove('active');
			// bodyEl.classList.remove('noscroll');
			// mobMenu.classList.remove('active');
			// mobHeader.classList.remove('active');

		});
		mobMenu.addEventListener('click', function () {
			this.classList.remove('active');
			// menuToggle.classList.remove('active');
			// overlayBlock.classList.remove('active');
			// mobHeader.classList.remove('active');
			// bodyEl.classList.remove('noscroll');

		})
	}
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