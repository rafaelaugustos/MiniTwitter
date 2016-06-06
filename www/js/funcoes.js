$(function(){

	// Btns
		// Reply
	$('body').on('click', '.primeiro', function(e){
		e.preventDefault();

		return false;
	});
		//Retweet
	$('body').on('click', '.segundo', function(e){
		e.preventDefault();
		$(this).css('color','#27ae60');
		return false;
	});
		// Stars
	$('body').on('click', '.terceiro', function(e){
		e.preventDefault();
		$(this).css('color','#f39c12');
		return false;
	});



	
});