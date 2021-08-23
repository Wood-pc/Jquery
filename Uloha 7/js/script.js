(function($) {

	var images = $('.cover'),
		next	= $('.next'),
		prev	= $('.prev');

	images.not(':eq(0)').hide();

	var current = images.not(':hidden');
	
	next.on('click', function() {
		current.hide();

		if (current.next('div').length === 0) {
			$(images[0]).show();
			current = $(images[0]);
		} else {
			current.next('div').show();
			current = images.not(':hidden');
		}
	});

	prev.on('click', function() {
		current.hide()
		
		if (current.prev('div').length === 0) {
			$(images[6]).show();
			current = $(images[6]);
		} else {
			current.prev('div').show();
			current = images.not(':hidden');
		}
	});

})(jQuery);