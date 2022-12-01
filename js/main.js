$(function() {
	"use strict";
	//nav event when scroll
	$(window).scroll(function(){
		//adjust scroll-to-top
		if ($(window).scrollTop() > 200){
			$('nav.nv-trans').css({
				background: '#fff',
				borderColor: '#e1e1e1'
			});
			$('.navbar-nav .nav-link:not(.nav-link.btn)').css('color','#808080');
			$('.navbar-expand-lg .navbar-nav .nav-item:hover::before').css({
				position:'absolute',
				width:'100%',
				height: '2px',
				content: '',
				top:'73px',
				background: '#d73827'
			})
		}
		else if($(window).scrollTop() <= 0){
			$('nav.nv-trans').css({
				background: 'transparent',
				borderColor: 'rgba(255, 255, 255, 0.1)'
			})
			$('.nv-trans .nav-link').css('color','#fff');
			$('.nv-bg .nav-link').css('color','#333');
		}
   });

	//fire skitter
	$('.skitter-large').skitter({
		fullscreen:true,
		interval:2000,
		dots:false,
		stop_over:false,
		with_animations:["paralell","swapBarsBack" ,"swapBars","glassBlock"],
	});

	//fire hot spot
	if ($('#hotspotImg').length > 0) {
		$('#hotspotImg').hotSpot();
	}

	//fire slick 
	$(".news-slick").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding:'50px',
		autoplay:true,
		autoplaySpeed:2000,
		dots:true,
	});
	$(".card-slick").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding:'50px',
		autoplay:false,
		autoplaySpeed:2000,
		dots:true,
	});
	//fire wow
		new WOW().init();

		//event when scroll top
	$(window).scroll(function(){
		//adjust scroll-to-top
		if ($(window).scrollTop() >400){
			$('.scrollUp').fadeIn(400);
		}else{
			$('.scrollUp').fadeOut(400);
		}
	});
	//when click on scrollUp
	$('.scrollUp').click(function(e) {
		$('html , body').animate({scrollTop: 0}, 600);
	});
	

	//fire WMGridfolio
  $('.teams').WMGridfolio({
	thumbnail : {
	
			  columns : 5,

			  minSize : 100,
	
			  margin   : 0
	
			},
	config : {
				open          : 'open',
				openToTop     : true,
				hasImg        : true,
				keepOpen      : false,
				onlyThumb     : false
		
			},
	CB_LoadGrid: true,
		
	CB_ResizeGrid   : true,
	CB_OpenDetail   : false,
	CB_CloseDetail  : false,
	CB_CloseAll     : false

  });


// full page fire
$('#fullpage').fullpage();
if ($(window).width >=992) {
	$('#fullpage').fullpage({
		autoScrolling: false,
	});
}


  //main-item click
  $('.main-item').click(function(){
	  $('.hidden-text').hide();
	$(this).parent().find('.hidden-text').fadeIn(200);
  });

})
