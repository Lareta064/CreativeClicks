$(document).ready(function () {
   // custom select
	let selectBlockInput = $('.select-block__input').children('input');
	if(selectBlockInput){
		let selectBlockDropdown = $('.select-block__options');
		let selectBlokIcon = $('.select-block__icon span');

		selectBlockInput.on('click', function(e){
			console.log(e.target);
			if($(this).attr('data-role')=='open'){
				selectBlockDropdown.fadeOut();
				$(this).attr('data-role','close');
				selectBlokIcon.removeClass('active');
				console.log($(this).attr('data-role'));
			}
			else{
				selectBlockDropdown.fadeIn();
				$(this).attr('data-role','open');
				selectBlokIcon.addClass('active');
			}
		});

		// клик по пункту выпадающего списка
		let selectBlockOptions = $('.select-block__options li');
		// console.log(selectBlockOptions);
		$.each(selectBlockOptions, function(index, val){
			$(val).on('click', function(){
				let selectItemValue = $(val).text();
				selectBlockInput.val(selectItemValue);
				selectBlockInput.attr('data-role','close');
				selectBlockDropdown.fadeOut();
				selectBlokIcon.removeClass('active')
			})
		})

	}
})