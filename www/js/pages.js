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

		// Altero titulo
		if(link == '#notification'){
			$('.title-twitter').html('<span style="text-align: center; width: 100%;">Notifications</span>');
		}else if(link == '#timeline'){
			$('.title-twitter').html('<span style="text-align: center; width: 100%;">Home</span>');
		}else if(link == '#messages'){
			$('.title-twitter').html('<span style="text-align: center; width: 100%;">Messages</span>');
		}
		return false;
	});
});