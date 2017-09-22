(function(window){
	handleMenu();
	about_me_animation();	
	menuOnclick();
	var slider = new Slider({
		root: ".slider-output",
		slider_img1: '"./img/slider/1.jpg"',
		slider_img2: '"./img/slider/2.jpg"',
		slider_img3: '"./img/slider/3.jpg"',
		slider_img4: '"./img/slider/4.jpg"'
	});
	
	/*====================================MENU==================*/
	function handleMenu(){
		var	menuXs= document.querySelector('.navbar-menu');
		var menuBtnXs= document.querySelector('.visible-xs');
		var separator2 = document.querySelector('.separator2-navbar');
		var separator3 = document.querySelector('.separator3-navbar');
		
		menuBtnXs.addEventListener('click', function(){
			menuXs.classList.toggle('open');
			if (menuXs.classList.contains('open')){
				separator2.style.display = 'none';
				separator3.style.display = 'block';				
			}else if(!(menuXs.classList.contains('open'))){
				separator3.style.display = 'none';
				separator2.style.display = 'block';
			}					
		});	
	}
	
/*==================SMOOTH SCROLLING====================*/
	function smoothScrolling(el){
		$('html, body').animate({
			scrollTop: el.offset().top,
			duration: 1500,
			easing: 'linear'
		});
	}
	function menuOnclick(){
		var menuItem =document.querySelectorAll('.menu-item');
		var aboutMe=$('#about-me');
		var portfolio=$('#portfolio');
		var myBlog=$('#my-blog');
		var contactMe=$('#contact-me');

		menuItem[0].addEventListener('click', function(){
			smoothScrolling(aboutMe);
		});
		menuItem[1].addEventListener('click', function(){
			smoothScrolling(portfolio);
		});
		menuItem[3].addEventListener('click', function(){
			smoothScrolling(myBlog);
		});
		menuItem[4].addEventListener('click', function(){
			smoothScrolling(contactMe);
		});
	}

/*===================ANIMATED APPEARENCE ABOUT ME SECTION===================*/

	function about_me_animation(){
		var $animatedDiv = $('.animated');
		var $animatedEl = $('.image-wrapper-animated');
		var $window = $(window);

		function check_if_in_view(){
			var window_height= $window.height();
			var window_top_position= $window.scrollTop();
			var window_bottom_position=(window_top_position+window_height);
				
			$.each($animatedEl, function(){
				var $element = $(this);
				var element_height = $element.outerHeight();
				var element_top_position = $element.offset().top;
				var element_bottom_position = (element_top_position+element_height);

				if((element_bottom_position>=window_top_position) && (element_top_position<=window_bottom_position)){
					$element.addClass('inView');
				}else{
					$element.removeClass('inView');
				}									
			});				
		}	
		$window.on('scroll resize', function(){ 
			check_if_in_view()
		});
		$window.trigger('scroll');	
	}	
	
	
})(window);

