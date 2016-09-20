
$(function(){
    var url      = 'http://localhost:8888/twitter/';
    var urlImage = 'http://localhost:8888/twitter/images/';
    var id       = 1;


    

    
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
        var idStar = $(this).attr('data-id');
       
        star(idStar);
		$(this).toggleClass('star');
		return false;
	});

	$('.img-timeline a').on('click', function(){
		alert('foi');
	});
    
    
    $('#closeSign').on('click', function(){
        myApp.closeModal('.popup-sign');     
    });
    
    
    // Dados
    function login(valores){
        $.ajax({
            type: 'POST',
            url: url+'login.php',
            data: valores,
            dataType: 'json',
            success: function(data){
                if(data.success == 1){
                    $('.header').show();
                    $('.rodape').show();
                    $('.page').addClass('hide');
                    $('#timeline').removeClass('hidden');
                    // Dados
                    localStorage.setItem('nome', data.nome);
                    localStorage.setItem('username', data.username);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('avatar', data.avatar);
                    localStorage.setItem('capa', data.capa);
                    localStorage.setItem('about', data.about);
                    myApp.closeModal('.login-screen');
                    AlimentaDados();
                }else{
                    myApp.alert('Usuario ou senha incorretos','Twitter');
                }
                
            }
        });
    }
    
    // Permanecer Logado
    function permanencia(){
        if(localStorage.username == ''){
        
        }else{
            $('.header').show();
            $('.rodape').show();
            $('.page').addClass('hidden');
            $('#timeline').removeClass('hidden');
        }
    }
    
    permanencia();
    

    function AlimentaDados(){
        $('.capa').html('<img src="images/'+localStorage.capa+'"> ');
        $('.img-me').html('<img src="images/'+localStorage.avatar+'">');
        $('.me-info').prepend('<h2 class="user-me">@'+localStorage.username+'</h2>');
        $('.me-info').prepend('<h1 class="name-me">'+localStorage.nome+'</h1>');
        $('.me-info').prepend('<div class="about-me"><p>'+localStorage.about+'</p></div>');                                    
    }
    
    // Sign
    function sign(form){
        $.ajax({
            type: 'POST',
            url: url+'sign.php',
            data: form,
            dataType: 'json',
            beforeSend: function(){
                myApp.showPreloader();
            },
            success: function(data){
                myApp.hidePreloader();
                if(data.success == 1){
                    myApp.alert('Usuario cadastrado com sucesso','Twitter');    
                }else if(data.success == 0){
                    myApp.alert('Erro ao cadastrar usuario','Twitter');
                }else{
                    myApp.alert('Username ja existe','Twitter');
                }
            }
        });
    }

    $('#save-sign').on('click', function(){
        var form = $('form[name=sign]').serialize();
        
        sign(form);
    });
    
    $('#log-in').on('click', function(){
        /*myApp.modalLogin('Digite username e senha', 'Twitter', function(username, password){
            login(username,password);
        });     */
        myApp.loginScreen();
    });
    
    $('form[name=login]').submit(function(){
        var valores = $(this).serialize();
        login(valores);
        return false;
    });
    
    // Timeline
    function timeline(){
        $.ajax({
            type: 'GET',
            url: url+'timeline.php',
            data: {
                id: id
            },
            dataType: 'json',
            success: function(data){
                console.log(data);
                $('#timeline .page-content').html('');
                var html = '';
                var tweetBox = '<div class="tweet-box">'+
                                '<span>O que</span>'+
                                '<div class="right"><i class="fa fa-camera" aria-hidden="true"></i></div></div>';
                for(i = 0; i < data.qtd; i++){
                    html += '<div class="box-time">';
                    html += '<div class="img-post"><img src="images/rafael.jpg"></div>';
                    html += '<div class="name">Rafael Augusto <span>@Rafael2Sirens</span></div>';
                    html += '<div class="content-line">';
                    html += '<p>'+data.post[i]+'</p>';
                    if(data.imagem[i] == ''){
                        
                    }else{
                        html += '<div class="img-timeline"><a href="#img"><img src="'+urlImage+''+data.imagem[i]+'"></a></div>';
                    }
                    html += '<div class="btns-line"><i class="fa fa-reply primeiro" aria-hidden="true"></i><i class="fa fa-retweet segundo" aria-hidden="true"></i><i data-id="'+data.id[i]+'" class="fa fa-star terceiro" aria-hidden="true"></i></div></div></div>';
                }
                $('#timeline .page-content').append(html);
                $('#timeline .page-content').prepend(tweetBox);
            }
        })
    }
    
    timeline();

    // FAVORITE
    function star(idPost){
        $.ajax({
            type: 'GET',
            url: url+'btns.php',
            data: {
                acao: 'star',
                id: idPost,
                user: id
            },
            success: function(data){
                alert('foi');
            }
        });
    }


    // Me
    function me(){
        $.ajax({
            type: 'GET',
            url: url+'me.php',
            data: {
                id: id
            },
            dataType: 'json',
            success: function(data){
                console.log(data);
                $('.timeline-me').html('');
                var html = '';
                for(i = 0; i < data.qtd; i++){
                    html += '<div class="box-time">';
                    html += '<div class="img-post"><img src="images/rafael.jpg"></div>';
                    html += '<div class="name">Rafael Augusto <span>@Rafael2Sirens</span></div>';
                    html += '<div class="content-line">';
                    html += '<p>'+data.post[i]+'</p>';
                    if(data.imagem[i] == ''){
                        
                    }else{
                        html += '<div class="img-timeline"><a href="#img"><img src="'+urlImage+''+data.imagem[i]+'"></a></div>';
                    }
                    html += '<div class="btns-line"><i class="fa fa-reply primeiro" aria-hidden="true"></i><i class="fa fa-retweet segundo" aria-hidden="true"></i><i class="fa fa-star terceiro" aria-hidden="true"></i></div></div></div>';
                }
                $('.timeline-me').append(html);
            }
        });
    }
    me();
    
    
                                
                                
                                    
});