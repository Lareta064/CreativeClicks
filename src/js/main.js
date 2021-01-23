$(document).ready(function () {
	
	// SHOW MOB MENU
	const bodyEl = document.body;
	const menuToggle = document.querySelector('.menu-toggle');
	const mobMenu = document.querySelector('.header-navigation');
	
	if (menuToggle) {
		menuToggle.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				this.classList.remove('active');
				mobMenu.classList.remove('active');
				bodyEl.classList.remove('noscroll');
				

			} else {
				this.classList.add('active');
				mobMenu.classList.add('active');
				bodyEl.classList.add('noscroll');

			}
		});
		window.addEventListener('resize', function () {
			menuToggle.classList.remove('active');
			bodyEl.classList.remove('noscroll');
			mobMenu.classList.remove('active');
			

		});
		mobMenu.addEventListener('click', function () {
			this.classList.remove('active');
			 menuToggle.classList.remove('active');
		 	bodyEl.classList.remove('noscroll');

		})
	}
	//mainPage carousel
   let caseSlider = $('.case-slider');
   let caseSliderArrowLeft = $('button.arr-left');
   let caseSliderArrowRight = $('button.arr-right');
   if(caseSlider){
	    caseSlider.owlCarousel({
		items:1,
		loop: true,
		navSpeed: 800,
		smartSpeed:800
	});
	
	caseSliderArrowLeft.click(function () {
		caseSlider.trigger("next.owl.carousel");
	});
	caseSliderArrowRight.click(function () {
		caseSlider.trigger("prev.owl.carousel");
	});  
	}
	// Careers page carousel
	if($('#careers-slider1')){
		$('#careers-slider1').on('init', function(){
			$('.slick-active').eq(0).addClass('big');
			
		});
		$('#careers-slider1').slick({
			centerMode: true,
			centerPadding: '190px',
			slidesToShow: 3,
			arrows: false,
			asNavFor: '#careers-slider2',
			responsive: [
				{
					breakpoint: 1199,
					settings: {
					  slidesToShow: 2,
					  
					 variableWidth: true,
					 centerMode: false,
					 variableWidth: true,
					  
					}
				  },
				{
				  breakpoint: 1023,
				  settings: {
					slidesToShow: 2,
					centerPadding: '30px',
					centerMode: false,
					variableWidth: true,
					
				  }
				}
			  ]
		});

		$('#careers-slider1').on('afterChange', function(){
			$('.careers-slider1__item').each(function(index, item){
				$(item).removeClass('big');
			});
			$('.slick-active').eq(0).addClass('big');
			
		});

		$('#careers-slider2').slick({
			slidesToShow: 1,
			arrows: false,
			fade: true,
			dots: true,
			asNavFor: '#careers-slider1'
		});
		
		$('.careers-slider-nextBtn').on('click', function() {
			$('#careers-slider2').slick('slickNext');
			$('#careers-slider1').slick('slickNext');
		  });
		$('.careers-slider-prevBtn').on('click', function() {
			$('#careers-slider2').slick('slickPrev');
			$('#careers-slider1').slick('slickPrev');
		});
	}
	//SHOW/HIDE PASSWORD
	let inputPassIcon = document.querySelectorAll('.icon-passw');
	if(inputPassIcon){
		for(let item of inputPassIcon){
			item.addEventListener('click', function(){
				const thisParent = this.closest('.form-item');
				const inputItem = thisParent.querySelector('input');
				const thisImgs = this.querySelectorAll('img');
				for(let img of thisImgs){
					img.classList.toggle('active');
				}
				let inputType = inputItem.getAttribute('type');
				if(inputType == 'password'){
					inputItem.setAttribute('type', 'text');
				}
				else{
					inputItem.setAttribute('type', 'password');
				}
			});
		}
	}
	// BORDER BOTTOM FOR INPUT:FOCUS
	let inputsArrow= document.querySelectorAll('input');
	for(let item of inputsArrow){
		let inputParent = item.closest('.form-item');
		item.addEventListener('focus', function(){
			inputParent.classList.add('form-item--focus');
			console.log(inputParent);
		});
		item.addEventListener('blur', function(){
			inputParent.classList.remove('form-item--focus');
		});
	}
	//TOGGLE ARROW FOR SELECR COUNTRY
	const selectCountry = document.querySelector('#select-country');
	if(selectCountry){
		const thisArrow = document.querySelector('.select-arr');
		selectCountry.addEventListener('click', function(){
			thisArrow.classList.toggle('rotate');
			
		});
	}
	//PLAY VIDEO
	$('.video-modal').hide(0);
	$('.button-playVideo').each(function(i, item){
		$(item).on('click', function(){
			$('.video-modal').fadeIn();
			$('body').addClass('noscroll');
			$('.videoTag')[0].play();

		});
	});

	$('.close-btn').on('click', function(){
		$(this).closest('.video-modal').fadeOut();;
		$('body').removeClass('noscroll');
		$('.videoTag')[0].pause();
	});
	// CALC INFO-CARD HEIGHT
	function equalizeText(rowClassName,blockClassName){
		
		let rowArray = document.querySelectorAll(`.${rowClassName}`);
			
		// Cycle through each row
			for (let i = 0; i < rowArray.length; i++){
				let cardBodyArr = rowArray[i].querySelectorAll(`.${blockClassName}`);
				let maxHeight = 0;

				//Cycle through all div-s to let them auto-calculate heights depending on content
				for (let k = 0 ; k < cardBodyArr.length; k++){
					cardBodyArr[k].style.height = `auto`;
				}

				//Cycle through all div-s in the row and find maxHeight
				for (let j = 0; j < cardBodyArr.length; j++){
					if (cardBodyArr[j].offsetHeight > maxHeight) maxHeight = cardBodyArr[j].offsetHeight;
				}
				
				//Cycle through all div's and change height if not moile
				if(window.innerWidth >=768){
				for (let k = 0 ; k < cardBodyArr.length; k++){
						cardBodyArr[k].style.height = `${maxHeight}px`;
					}
				}
			}
				
	}
	equalizeText("infocard-block__row","info-card__body");
	window.addEventListener('resize', function(){
		equalizeText("infocard-block__row","info-card__body");
	});

	//SHOW JOB OPENNING CARDS	
	if($('.vacancy-card')){
		function showJobCards(arr, obj){
			if(obj.width() >=768){
				$(arr).each( function(index, item){
					$(item).show();
					if(index > 2){
						$(item).hide();	
					}	
				});
			}
			else{
				$(arr).each( function(index, item){
					$(item).show();
					if(index > 0){
						$(item).hide();	
					}	
				});
			}
		}
	
		showJobCards($('.vacancy-card'), $(window) );
		//SHOW JOB OPENNING CARDS ON RESIZE
		$(window).on('resize', function(){
			showJobCards($('.vacancy-card'), $(this));
		});

		//SHOW JOB OPENNING CARDS ON CLICK
		$('#showVacancy').on('click', function(){
			$('.vacancy-card').fadeIn();
			$(this).hide();
			if($(window).width() <768){
				$(this).closest('.button-box').css('margin-bottom', '30px');
			}
		});
		
	}
	
	//RESOURCES SLIDERS

	function doubleSlederText(sliderBlock, sliderImages) {
		$(sliderBlock).slick({
			items:1,
			arrows: false,
			dots: false,
			fade: true,
			infinite: true,
			speed:1000,
			autoplay: true,
			asNavFor: $(sliderImages)
		});
		$(sliderImages).slick({
			items:1,
			arrows: false,
			dots: true,
			fade: true,
			autoWidth: true,
			infinite: true,
			speed:1000,
			autoplay: true,
			asNavFor: $(sliderBlock),
			focusOnSelect: true
		  });
	}

	doubleSlederText('#nailing-images', '#nailing-slider');
	doubleSlederText('#talk-images', '#talk-slider');
	doubleSlederText('#captured-images', '#captured-slider');
	


	$('.nailing-prev').on('click', function() {
		$('#nailing-slider').slick('slickPrev');
	});
	$('.nailing-next').on('click', function() {
		$('#nailing-slider').slick('slickNext');
	});
	$('.talk-prev').on('click', function() {
		$('#talk-slider').slick('slickPrev');
		console.log('123');
	});
	$('.talk-next').on('click', function() {
		$('#talk-slider').slick('slickNext');
		console.log('123');
	});
	$('.captured-prev').on('click', function() {
		$('#captured-slider').slick('slickPrev');
	});
	$('.captured-next').on('click', function() {
		$('#captured-slider').slick('slickNext');
	});
	
	//========================================================================
	//========================================================================
	//SCROLL LOGIC and ADDITIVES
	//========================================================================
	//========================================================================
	window.addEventListener("scroll", onScrollEventHanlder);

	
	const SLIDER_NOT_REACHED = 0;
	const SLIDER_AT_THE_BEGGINING = 1;
	const SLIDER_IN_PROGRESS = 2;
	const SLIDER_FINISHED = 3;

	var partnersSlider = {
		state: SLIDER_NOT_REACHED,
		translating: false,
		currentIndex: 0,
		anchorY: 0,
		element: $(".partners-slider"),
		showNext: 
			function(visible){
				if(!visible){
					$(".partners-slider").nextAll().addClass("hideDOM");
					$(".partners").nextAll().addClass("hideDOM");
				}else{
					$(".partners-slider").nextAll().removeClass("hideDOM");
					$(".partners").nextAll().removeClass("hideDOM");
				}				
			}
	}

	
	if($(".partners-slider").length>0){
		console.log($(".partners-slider").length);
		partnersSlider.element.owlCarousel({
			items:1,
			loop: false,
			mouseDrag: false,
			touchDrag: false,
			navSpeed: 400,
			smartSpeed:400,		
			onTranslate: function(){
				partnersSlider.translating = true;
			},
			onTranslated: onTranslatedEventHandler
		 });
	
		partnersSlider.showNext(false);

		window.addEventListener("wheel", onWheelEventHanlder, {passive:false});
		window.addEventListener("touchstart", onTouchEventHandler, {passive:false});
		window.addEventListener("touchmove", onTouchEventHandler, {passive:false});
		window.addEventListener("touchend", onTouchEventHandler, {passive:false});
		window.addEventListener("keydown", onKeydownEventHandler);
		window.addEventListener("mousedown", onMouseEventHandler);
	}
	

	let bars = document.querySelectorAll(".progress-bar");
	let BAR_WIDTH = window.innerWidth >= 424 ? 424 : window.innerWidth;
	for (let bar of bars) {
		 bar.style.width = BAR_WIDTH+"px";
		
	}

	function onScrollEventHanlder(scrollEvent){
		let lowerScreenBoundary = Math.ceil(window.innerHeight+window.scrollY);
		if($(".partners-slider").length>0){			
			if((partnersSlider.state == SLIDER_NOT_REACHED)&&(lowerScreenBoundary >= document.body.offsetHeight)){
				partnersSlider.state = SLIDER_AT_THE_BEGGINING;			
				partnersSlider.anchorY = window.scrollY;
				
			}else if((partnersSlider.state == SLIDER_AT_THE_BEGGINING)&&(lowerScreenBoundary < document.body.offsetHeight)){
				partnersSlider.state = SLIDER_NOT_REACHED;
				
			}
		}
		
		for (let bar of bars) {
			let maxWidth = bar.parentElement.offsetWidth;
			

			let computedOffset = Math.round(-BAR_WIDTH + ((window.innerHeight - bar.getBoundingClientRect().top)/window.innerHeight)*(maxWidth+BAR_WIDTH));
			let computedWidth = computedOffset < 0 ? computedOffset+BAR_WIDTH : maxWidth-computedOffset;
			computedOffset = Math.max(0, Math.min(maxWidth, computedOffset));
			computedWidth = Math.max(0, Math.min(BAR_WIDTH, computedWidth));
			
			bar.style.width = computedWidth+"px";
			if(bar.classList.contains("progress-bar--right"))
				bar.style.right = computedOffset+"px";
			else
				bar.style.left = computedOffset+"px";
		}
	}

	let lastTouches;

	function onTouchEventHandler(touchEvent){
		switch(touchEvent.type){
			case "touchstart":
				lastTouches = touchEvent.touches;    
				
			break;
			case "touchmove":
				if((partnersSlider.state == SLIDER_AT_THE_BEGGINING)){					
					let dir = touchesToDirection(lastTouches, touchEvent.changedTouches);
					if(dir>0){
						touchEvent.preventDefault();
						partnersSlider.state = SLIDER_IN_PROGRESS;
						
						partnersSlider.element.trigger("next.owl.carousel");
					}
				}else if((partnersSlider.state==SLIDER_IN_PROGRESS)){
					touchEvent.preventDefault();
					let dir = touchesToDirection(lastTouches, touchEvent.changedTouches);
					if(partnersSlider.translating)
						break;
					if(dir>0){
						partnersSlider.element.trigger("next.owl.carousel");
					}else{
						partnersSlider.element.trigger("prev.owl.carousel");
					}
				}
			break;
		}
	}

	function touchesToDirection(initialTouches, updatedTouches){
		let direction = 0;
		for(let i=0; i<updatedTouches.length; i++){
			for(let j=0; j<initialTouches.length; j++)
			if(updatedTouches[i].identifier==initialTouches[j].identifier){
				if(updatedTouches[i].clientY>initialTouches[j].clientY){
					direction--;
				}else if ((updatedTouches[i].clientY<initialTouches[j].clientY)){
					direction++;
				}
			}
		}
		return direction;
	}

	function onWheelEventHanlder(wheelEvent){
		if(partnersSlider.state!=SLIDER_NOT_REACHED && partnersSlider.state!=SLIDER_FINISHED)
			wheelEvent.preventDefault();
		if(partnersSlider.state==SLIDER_AT_THE_BEGGINING){
			wheelEvent.preventDefault();
			if(wheelEvent.deltaY>0){
				
				partnersSlider.state = SLIDER_IN_PROGRESS;
				
				partnersSlider.element.trigger("next.owl.carousel");
			}else{
				window.scrollBy(0, -100);
			}
		}else if(partnersSlider.state==SLIDER_IN_PROGRESS){
			wheelEvent.preventDefault();
			if(!partnersSlider.translating)
				if(wheelEvent.deltaY>0){
					partnersSlider.element.trigger("next.owl.carousel");
				}else{
					partnersSlider.element.trigger("prev.owl.carousel");
				}
		}
	}

	function onTranslatedEventHandler(owlEvent){
		partnersSlider.translating = false;
		partnersSlider.currentIndex = owlEvent.item.index;
		if(partnersSlider.currentIndex == 0){
			partnersSlider.state = SLIDER_AT_THE_BEGGINING;
			
		}else if(partnersSlider.currentIndex == owlEvent.item.count-1){
			partnersSlider.state = SLIDER_FINISHED;
			
			partnersSlider.showNext(true);
						
			partnersSlider.element.trigger('destroy.owl.carousel');
			partnersSlider.element.owlCarousel({
				items:1,
				startPosition: 11,
				loop: true,
				autoplay: true,
				mouseDrag: true,
				touchDrag: true,
				navSpeed: 400,
				smartSpeed:400,
			 });

			window.removeEventListener("keydown", onKeydownEventHandler);
			window.removeEventListener("mousedown", onMouseEventHandler);
			window.removeEventListener("wheel", onWheelEventHanlder, {passive:false});
			window.removeEventListener("touchstart", onTouchEventHandler, {passive:false});
			window.removeEventListener("touchmove", onTouchEventHandler, {passive:false});
			window.removeEventListener("touchend", onTouchEventHandler, {passive:false});
		}
	}	

	function onKeydownEventHandler(keyboardEvent){
		if([32, 33, 34, 35, 36, 37, 38, 39, 40].indexOf(keyboardEvent.keyCode) > -1) {
			keyboardEvent.preventDefault();
		}
	}

	function onMouseEventHandler(mouseEvent){
		if(mouseEvent.button==1)
			mouseEvent.preventDefault();
	}
})