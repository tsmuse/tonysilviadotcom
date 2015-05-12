$(document).ready(function(){
	
// lettering.js run
	$(".landingTitle").lettering('words').children('span').lettering();	

//mobile menu controls
	$('#logoBox a').click(function(e){
		e.preventDefault();
		$('#mobileMenu').toggle('blind','fast');
	});
	$('#mobileMenu a').click(function(e){
		$('#mobileMenu').toggle('blind','fast');
	});


//end
});