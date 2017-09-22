(function(window){
	var html = '<div class="slider clearfix ">'+					
					'<ul class="slider-list clearfix">'+
						'<li class="sl sl1 active">'+
							'<div class="slider-image-wrapper  slider-item ">'+		
								'<img src={{slider_img1}} alt="Slider image">'+
								'<h2>Kodak Camera</h2>'+								
							'</div>'+
						'</li>'+
						'<li class="sl sl2">'+
							'<div class="slider-image-wrapper  slider-item ">'+
								'<img src={{slider_img2}} alt="Slider image">'+
								'<h2>Kodak Camera</h2>'	+
							'</div>'+
						'</li>'+
						'<li class="sl sl3">'+
							'<div class="slider-image-wrapper  slider-item ">'+
								'<img src={{slider_img3}} alt="Slider image">'+
								'<h2>Kodak Camera</h2>'+	
							'</div>'+
						'</li>'+
						'<li class="sl sl4">'+
							'<div class="slider-image-wrapper  slider-item ">'+	
								'<img src={{slider_img4}} alt="Slider image">'+
								'<h2>Kodak Camera</h2>'+	
							'</div>'+
						'</li>'+
					'</ul>'+
						
					'<div class="slider-controls">'+
						'<a class="controls prev" href="">&lt;</a>'+
						'<a class="controls next" href="">&gt;</a> '+
					'</div>	'+
				'</div>'
	var i=0;	
	var countNext=1;
	var countPrev=1;
	var sliderMove;

	function Slider(options){
		this._root=document.querySelector(options.root);
		this._sliderImg1=options.slider_img1;
		this._sliderImg2=options.slider_img2;
		this._sliderImg3=options.slider_img3;
		this._sliderImg4=options.slider_img4;
		// this._sliderMove=null;			
		this.createSlider();		
	}

	Slider.prototype.createSlider=createSlider;
	Slider.prototype.sliderActivate=sliderActivate;
	Slider.prototype.createHtml=createHtml;
	Slider.prototype.nextSliderControl=nextSliderControl;
	Slider.prototype.prevSliderControl=prevSliderControl;

	function createSlider(){
		this.createHtml();
		this.sliderActivate();
		this.nextSliderControl();
		this.prevSliderControl();
	}	

	function createHtml(){
		var _html = html.replace('{{slider_img1}}', this._sliderImg1);
		_html=_html.replace('{{slider_img2}}', this._sliderImg2);
		_html=_html.replace('{{slider_img3}}', this._sliderImg3);
		_html=_html.replace('{{slider_img4}}', this._sliderImg4);
		this._root.innerHTML=_html;
	}

	function sliderActivate(){
		var slides = document.querySelectorAll('.sl');		
		var sliderInit = null;
		
		var sliderInit= function(){
			removeClass(slides);
			if (i<slides.length){				
				slides[i].classList.add('active');				
			}else{
				i=0;
				slides[i].classList.add('active');	
			}		
			i++;				
			console.log(i);	
			sliderMove=setTimeout(sliderInit, 4000);
			
		}	
		sliderInit();
	}

/*---------Next control--*/	
	function nextSliderControl(){
		var self=this;
		var slides = document.querySelectorAll('.sl');		
		var next= document.querySelector('.next');			
		next.addEventListener('click',function(evt){
			evt.preventDefault();
			clearTimeout(sliderMove);
			removeClass();
			if (countNext===1){
				i++;
			}
			countNext++;
			console.log('countNext='+countNext);
			if (i>slides.length||i+1>slides.length){
				i=0;
				slides[i].classList.add('active');	
			}else{
				slides[i].classList.add('active');				
				console.log(i);
			}
			i++;
			resetPrevCount.call(self);
		})
	}
/*--------Previous control-------------*/
	function prevSliderControl(){
		var self=this;
		var slides = document.querySelectorAll('.sl');		
		var prev = document.querySelector('.prev');
		prev.addEventListener('click', function(evt){
			evt.preventDefault();			
			clearTimeout(sliderMove);		
			removeClass();	
			if (countPrev===1){
				i--;
			}
			countPrev++;
			console.log('countPrev='+countPrev);
			i--;
			if (i<0){
				i=slides.length-1;					
				slides[i].classList.add('active');					
			}else{					
				slides[i].classList.add('active');				
				console.log(i);
			}		
			resetNextCount.call(self);		
		});
	}

	function resetPrevCount(){
		countPrev=1;
		console.log('after reset countPrev='+countPrev);
	}
	/*---*/
	function resetNextCount(){
		countNext=1;
		console.log('after reset countNext='+countNext);
	}
	/*---*/
	function removeClass(){
		var j;
		var slides=document.querySelectorAll('.sl');
		for (j=0; j<slides.length; j++){
			slides[j].classList.remove('active');
		}			
	}		

	window.Slider=Slider;
})(window);