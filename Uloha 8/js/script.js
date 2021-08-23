(function($) {
$('form').submit(function(){
	var meno =$(".name")
	    email =$(".email")
	    heslo =$(".heslo")
	    heslo2 =$(".heslo2")
	    valid=true

		$(this).find(".a,.b,.c,.d").removeClass(".a,.b,.c,.d")
		$(this).find(".a,.b,.c,.d").hide()

		
	if(!meno.val()){
		meno.addClass(".a").next().fadeIn("fast")
		valid=false
	}

	if(!email.val() || !email.val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
		email.addClass(".b").next().fadeIn("fast")
		valid=false
	}

	if(!heslo.val() || heslo.val().length<5){
		heslo.addClass(".c").next().fadeIn("fast")
		valid=false
	}
	

	if(!heslo2.val()||heslo2.val()!=heslo.val()){
		heslo2.addClass(".d").next().fadeIn("fast")
		valid=false
	}

	
	return valid
})
})(jQuery);
