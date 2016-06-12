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
		$(this).toggleClass('rt');
		return false;
	});
		// Stars
	$('body').on('click', '.terceiro', function(e){
		e.preventDefault();
		$(this).toggleClass('star');
		return false;
	});

	$('.img-timeline a').on('click', function(){
		alert('foi');
	});

	
});