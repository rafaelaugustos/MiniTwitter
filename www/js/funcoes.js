$(function(){
    var url      = 'http://localhost:8888/MiniTwitter/';
    var urlImage = 'http://localhost:8888/MiniTwitter/images/';
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
		$(this).toggleClass('star');
		return false;
	});

	$('.img-timeline a').on('click', function(){
		alert('foi');
	});
    
    
    // Dados
    function login(){
        $.ajax({
            type: 'GET',
            url: url+'login.php',
            data: {
                id: id
            },
            dataType: 'json',
            success: function(data){
                // Dados
                localStorage.setItem('nome', data.nome);
                localStorage.setItem('username', data.username);
                localStorage.setItem('email', data.email);
                localStorage.setItem('avatar', data.avatar);
                localStorage.setItem('capa', data.capa);
                localStorage.setItem('about', data.about);

                AlimentaDados();
            }
        });
    }
    login();

    function AlimentaDados(){
        $('.capa').html('<img src="images/'+localStorage.capa+'"> ');
        $('.img-me').html('<img src="images/'+localStorage.avatar+'">');
        $('.me-info').prepend('<h2 class="user-me">@'+localStorage.username+'</h2>');
        $('.me-info').prepend('<h1 class="name-me">'+localStorage.nome+'</h1>');
        $('.me-info').prepend('<div class="about-me"><p>'+localStorage.about+'</p></div>');                                    
    }

    
    
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
                $('#timeline .page-content').append(html);
            }
        })
    }
    
    timeline();


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