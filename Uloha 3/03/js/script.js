
//  odchytime kliknutie na link v elemente s classom .controls
$('.controls').find('a').on('click', function(event) {
	
	$(this)
		.parent().addClass('selected') // toto rodicovi (li element) prida class selected
		.siblings().removeClass('selected'); // toto surodencom rodica (vsetky ostatne li) odoberie class selected

	// zabranime klasickej akcii, nech nikam neodideme
	event.preventDefault();
	
});


