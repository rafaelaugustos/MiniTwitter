$(function(){
	$('.page-link').on('click', function(e){
		e.preventDefault();
		var link = $(this).attr('href');

		// Altera class BTN Ativo
		$('.page-link').removeClass('active');
		$(this).addClass('active');

		// Muda de Pagina
		$('.page').addClass('hidden');
		$(link).removeClass('hidden');

		if(link == '#me'){
			$('.header').hide();
		}else{
			$('.header').show();
		}
		return false;
	});
});