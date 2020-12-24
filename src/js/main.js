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
   let caseSlider = $('.case-slider');
   let caseSliderArrowLeft = $('button.arr-left');
   let caseSliderArrowRight = $('button.arr-right');
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
		});
		item.addEventListener('blur', function(){
			inputParent.classList.remove('form-item--focus');
		})
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
	$('.button-playVideo').on('click', function(){
		$('.video-modal').addClass('active');
	});

	//SHOW JOB OPENNING CARDS
	let vacancyCards = $('.vacancy-card');
	if($('.vacancy-card')){
		$('.vacancy-card').each( function(index, item){
			if(index > 2){
				$(item).hide();	
			}
		});
		$('#showVacancy').on('click', function(){
			$('.vacancy-card').fadeIn();
			$(this).hide();
		});
	}
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
	for (let bar of bars) {
		bar.style.width = "424px";
	}

	function onScrollEventHanlder(scrollEvent){
		let lowerScreenBoundary = Math.ceil(window.innerHeight+window.scrollY);
		if($(".partners-slider").length>0){			
			if((partnersSlider.state == SLIDER_NOT_REACHED)&&(lowerScreenBoundary >= document.body.offsetHeight)){
				partnersSlider.state = SLIDER_AT_THE_BEGGINING;			
				partnersSlider.anchorY = window.scrollY;
				// $("#debug").text("STATE: "+partnersSlider.state);	
				// console.log("Stage 1: Slider at the beggining");
			}else if((partnersSlider.state == SLIDER_AT_THE_BEGGINING)&&(lowerScreenBoundary < document.body.offsetHeight)){
				partnersSlider.state = SLIDER_NOT_REACHED;
				// $("#debug").text("STATE: "+partnersSlider.state);	
				// console.log("Stage 0: Slider is out of focus");
			}
		}
		// else if((partnersSlider.state == SLIDER_FINISHED)&&($(window).scrollTop() < partnersSlider.element.offset().top)){
		// 	partnersSlider.state = SLIDER_NOT_REACHED;
		// 	partnersSlider.showNext(false);
		// }
		for (let bar of bars) {
			let maxWidth = bar.parentElement.offsetWidth;
			// let computedWidth = 
			// 	Math.max(0, 
			// 		Math.min(
			// 			maxWidth, 
			// 			//bar.getBoundingClientRect().top>window.innerHeight/2 ? bar.getBoundingClientRect().top-window.innerHeight : window.innerHeight-bar.getBoundingClientRect().top
			// 			Math.round(
			// 					(maxWidth+424*2)-((window.innerHeight - bar.getBoundingClientRect().top)/window.innerHeight)*(maxWidth+424*2)
			// 				)
			// 			)
			// 		);


			let computedOffset = Math.round(-424 + ((window.innerHeight - bar.getBoundingClientRect().top)/window.innerHeight)*(maxWidth+424));
			let computedWidth = computedOffset < 0 ? computedOffset+424 : maxWidth-computedOffset;
			computedOffset = Math.max(0, Math.min(maxWidth, computedOffset));
			computedWidth = Math.max(0, Math.min(424, computedWidth));
			// let computedWidth = 
			// 	Math.max(0, 
			// 		Math.min(
			// 			maxWidth, 
			// 			//bar.getBoundingClientRect().top>window.innerHeight/2 ? bar.getBoundingClientRect().top-window.innerHeight : window.innerHeight-bar.getBoundingClientRect().top
			// 			Math.round(
			// 					(maxWidth+424*2)-((window.innerHeight - bar.getBoundingClientRect().top)/window.innerHeight)*(maxWidth+424*2)
			// 				)
			// 			)
			// 		);
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
						// console.log("Stage 2: Slider is in progress");
						// $("#debug").text("STATE: "+partnersSlider.state);
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
				// console.log("Stage 2: Slider is in progress");
				// $("#debug").text("STATE: "+partnersSlider.state);
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
			// console.log("Stage 1: Slider at the beggining");
			// $("#debug").text("STATE: "+partnersSlider.state);
		}else if(partnersSlider.currentIndex == owlEvent.item.count-1){
			partnersSlider.state = SLIDER_FINISHED;
			// console.log("Stage 3: Slider completed");
			// $("#debug").text("STATE: "+partnersSlider.state);
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