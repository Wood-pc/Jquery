(function($) {

   var galleries = $('.gallery-set')
		menuLinks = $('.controls a');

     galleries.not(':first').hide();
    
    menuLinks.on( 'click' , function(event){
        event.preventDefault();

       var id = $(this).attr('href');
       galleries.hide();
       $(id).fadeIn();

    }); 

   

})(jQuery); 