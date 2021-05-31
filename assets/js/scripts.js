/*=========================================================
Author       : Theme_Ware.
Template Name: Dirilis - Responsive App Landing Page
Version      : 1.0
==============================================================*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

			$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/	
		
		/*START HOME WATER JS*/
		  if (typeof $.fn.ripples == 'function') {
				try {
					$('.ripple').ripples({
						resolution: 500,
						perturbance: 0.01
					});
				} catch (e) {
					$('.error').show().text(e);
				}
			}
		/*END HOME WATER JS*/
		
		/*START VIDEO JS*/
		$('.own-video').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/
		
		/* START SCREENSHOTS SLIDER JS*/
		$('.s-slider').owlCarousel({ 
			items:4,
			itemsDesktop:[1000,2],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:false,
			navigation:true,
			navigationText:["",""],
			autoPlay:true
		});
		/* END  SCREENSHOTS SLIDER JS*/
		
		/*START BLOG JS*/
		$("#news-slider").owlCarousel({
			items : 3,
			itemsDesktop:[1199,3],
			itemsDesktopSmall:[980,2],
			itemsMobile : [600,1],
			autoPlay:true
		});
		/*END BLOG JS*/

	}); 		
	
	
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
				
})(jQuery);