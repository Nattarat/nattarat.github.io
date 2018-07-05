/* 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	jQuery Plugin
	
	* jPreloader
    * Equalize 
	* ImageFill
	* DotDotDot
    * scrollToBySpeed
    * Unveil
    * Tabslet
    * Enquire (go to jquery.plugin-function-enquire.js)
    
    * Mobile Sidebar Menu
    * Mobile Tab Menu - Scrollup "Show" / Scroll Down "Not Show"
    
    - SlabText
    * Data Image Delivery
    
	- bxSlider
    - bgStretcher (go to footer of html document)
    - Slick Slider
	
    - Form Validate
    - HTML5 Placeholder
	- FileStyle
	- Selectric
	- Dropkick
    - Datepicker
    
	- Fancybox 
    - Intense Image Viewer
	
    * Bootstrap Modals
	* Bootstrap Collapse
    * Bootstrap ScrollSpy
    * Bootstrap Tooltip
	* Bootstrap Affix
    
    * Submenu
    - Animated Header
	- Mobile Center Menu
    - Calendar Event Popup
    - Fixed Side Column Menu
    * Mobile Tab Menu - Page Tracing
		
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/





$(document).ready(function() {



	/* jPreloader
	====================================================================================== */
	$('body').jpreLoader({
		showPercentage: false,		//Show Percentage number
		showSplash: true,				//Show Preload image
		splashID: '#preload-items',
		splashVPos: '50%',
		loaderVPos: '0%',
		autoClose: true
	}, function(){
		
		//Equalize column height after Preload because Equalize not work together Preload
		$('.equal-parent').equalize({
			reset: true, 
			children: '.equal-child'
		}); 
		$('.equal-subparent').equalize({
			reset: true, 
			children: '.equal-subchild'
		}); 	
		
		//Tabslet after Preload because Equalize not work in Tabslet Content 2,3,4,...
		$('#sample-equalize-tabslet').tabslet({
			mouseevent: 'click',
			attribute: 'href',
			animation: true
		});
		//Before
		$('#sample-equalize-tabslet').on("_before", function() {
			$('#sample-equalize-tabslet .equal-parent').css({
				 'visibility': 'hidden'						   
			});
			$('#sample-equalize-tabslet .tabs-content').addClass('loading');
		});
		//After
		$('#sample-equalize-tabslet').on("_after", function() {
			$('#sample-equalize-tabslet .equal-parent').equalize({
				reset: true, 
				children: '.equal-child'
			});
			$('#sample-equalize-tabslet .equal-parent').hide().css({
				 'visibility': 'visible'						   
			}).fadeIn();
			$('#sample-equalize-tabslet .tabs-content').removeClass('loading');
		});	
		
	});/* jPreloader */
	
    
    
	/* Equalize
	====================================================================================== */
	// Resize Event
	$(window).resize(function(){
		$('.equal-parent').equalize({
			reset: true, 
			children: '.equal-child'
		}); 
		$('.equal-subparent').equalize({
			reset: true, 
			children: '.equal-subchild'
		}); 	
	});
	
    
    
	/* ImageFill
	====================================================================================== */
	$('.fullfill-img img').imgfill({
		align: 'center',  
		container: '.fullfill-img'
	});
	
	
    
	/* DotDotDot
	======================================================================================  */
	$('.cutword').dotdotdot({
        ellipsis: '...',
        wrap : 'word', //How to cut off the text/html: 'word'/'letter'/'children'
        watch : true 	//Whether to update the ellipsis: true/'window'
    });	
	
	
	
    /* scrollToBySpeed
	====================================================================================== */
	$('#scrollto-button1').click(function(){
		$('#scrollto-target1').scrollToBySpeed({
			//speed: 1000,
			//offset: -100,									   
			easing: 'easeInOutCubic'
		});	
	});
	
	$('.fbapp-bxslider li a').click(function(){
		$('.toppage').scrollToBySpeed({
			speed: 3000,
			//offset: -100,									   
			easing: 'easeInOutCubic',
		});	
	});
    
    
    
    /* Unveil
	======================================================================================  */
	/*
		ทำงานร่วมกับ jPreloader ได้ เพราะ 
		ในตอนเริ่มต้น รูปภาพจะแสดงตาม src คือ blank.gif (การโหลด blank.gif จะเกิดขึ้นที่ jPreloader)
		เมื่อเลื่อน Scroll ลงมาถึง Selector (class "lazyload") การทำงานของ Unveil จะเกิดการแทนที่ของ path image ดังนี้
		เดิม >>> src="images/blank.gif" data-src="images/content/XXXXX.jpg"
		ใหม่ >>> src="images/content/XXXXX.jpg" data-src="images/content/XXXXX.jpg" ซึ่งจะเกิดการโหลดรูปขึ้นมาใหม่แทน blank.gif
		โครงสร้างการใช้งาน
        <img class="img-responsive lazyload" src="images/blank.gif" data-src="images/content/XXXXX.jpg" alt="ImageName" />
	*/
	$('.lazyload').unveil(200, function(){
		$(this).animate({
			opacity: 1		
		}, 500);
	});
    
    
    
    /* Tabslet
	====================================================================================== */
	$('#sample-tabslet').tabslet({
		mouseevent: 'click',
		attribute: 'href',
		animation: true
	});
	// For Equal Content Go to  jPreloader Function
    
    
    
    /* Mobile Sidebar Menu
	======================================================================================  */
	//Open
	$('#mobile-pagemenu-button, #mobile-tabmenu__button').click(function(){
		$(this).addClass('active');
		$('body').addClass('mobile-sidemenu-show');
		$('#mobile-sidemenu').addClass('active');
		$('#mobile-sidemenu.active').animate({
			right: '0px'
		}, 500, 'easeInOutExpo');
	});
	
	//Close
	$('#mobile-sidemenu-close').click(function(){
		$('#mobile-sidemenu.active').animate({
			right: '-250px'
		}, 500, 'easeInOutExpo');
		$('#mobile-sidemenu').removeClass('active');
		$('body').removeClass('mobile-sidemenu-show');
		$('#mobile-tabmenu__button').removeClass('active');
		$('#mobile-pagemenu-button').removeClass('active');
	});
    
    
    
    /* SlabText
	====================================================================================== */
	$('.h-fit').slabText({
		//Don't slabtext under viewport size
		//'viewportBreakpoint': 768
	});
    
    
    
    /* Data Image Delivery
	====================================================================================== */
	$('.data-img').dataImg({
		sml: 480,
		med: 768,
		lrg: 1170,
		resize: true
	});
    
    
    
    /* bxSlider
	====================================================================================== */
	$('.sample-bxslider').bxSlider({
		prevSelector: '.sample-bxslider-container .slider-prev',
		prevText: '<span class="icon-arrow-left4"></span>',
		nextSelector: '.sample-bxslider-container .slider-next',
		nextText: '<span class="icon-uniE60F"></span>',
		pagerSelector: '.sample-bxslider-container .slider-pager',
		
		/*
		Slider Animation
		-----------------------------------------------------------------------------------------
		mode: 'horizontal' และ mode: 'vertical'
		จะสามารถเลือกใช้ได้ทั้ง jQuery Easing และ CSS Easing
		แต่ CSS Easing จะกระตุกในช่วง รูปสุดท้าย > รูปเริ่มต้น และ รูปเริ่มต้น > รูปสุดท้าย
		นอกจากนี้ CSS Easing จะไม่สามารถใช้ได้ใน ie8/9 
		เพราะใช้ transition/translate ในการทำ Animation ของ Slider
		ดังนั้นถ้าใช้ mode: 'horizontal' แนะนำให้ใช้  jQuery Easing
		
		mode: 'fade'
		จะสามารถเลือกใช้ได้เฉพาะ jQuery Easing เท่านั้น
		ถ้าใช้ mode: 'fade' ก็ไม่ต้องไปใส่ฟังก์ชัน useCSS และ easing ก็ได้
		เพราะทดสอบดูแล้วไม่มีผลอะไร ซึ่งน่าจะมาจากผูสร้างได้กำหนดตายตัวไว้แล้ว		
		-----------------------------------------------------------------------------------------
		*/
		//horizontal, vertical, fade
		mode: 'fade', 
		speed: 500,
		
		/*
		jQuery Easing 
		-----------------------------------------------------------------------------------------
		ต้อง Set Option ให้การใช้ CSS transitions เป็น false
		โดยมีค่า easing ตัวอย่างเช่น 'easeOutQuart', 'easeInOutCubic', 'easeInOutExpo' ให้เลือกใช้
		-----------------------------------------------------------------------------------------
		*/
		//useCSS: false,
		//easing: 'easeInOutSine',
		
		/*
		CSS Easing 
		-----------------------------------------------------------------------------------------
		ต้อง Set Option ให้การใช้ CSS transitions เป็น true
		โดยมีค่า easing ให้เลือกใช้ดังนี้ 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier(n,n,n,n)'
		-----------------------------------------------------------------------------------------
		*/
		//useCSS: true,
		//easing: 'ease-in-out',
		
		auto: true,
		pause: 5000,
		infiniteLoop: true,
		hideControlOnEnd: false,
		//Callback
		onSliderLoad: function(){
			$('.sample-bxslider-container .slider-item-title').addClass('active');
  		},
		onSlideBefore: function(){
			$('.sample-bxslider-container .slider-item-title').removeClass('active');
  		},
		onSlideAfter: function(){
			$('.sample-bxslider-container .slider-item-title').addClass('active');
  		}
  	});
	
	/*
	หมายเหตุ: การใช้ moveSlides เป็น option ใน Carousal bxSlider
	-----------------------------------------------------------------------------------------
		Bug ปุ่ม Prev กลายเป็น link กลับมายังหน้าเดิม คือ กดแล้วไม่เลื่อนย้อนกลับไปที่ item สุดท้าย
		แต่จะเป็นเหมือนกดปุ่มโหลดหน้าใหม่แต่เป็นการโหลดหน้าเดิม (เกิดขึ้นในกรณี Carousal อยู่ที่ item แรก แล้วกดปุ่ม Prev)
		สาเหตุของ Bug น่าจะมาจาก Carousal มี item ไม่สอดคล้องกับ moveSlides (หารไม่ลงตัว)
		เช่น Carousal มี item = 13 และ moveSlides: 3 (Carousal จะเคลื่อน item ทีละ 3)
		จะเห็นว่า 13 หาร 3 ไม่ลงตัว จึงทำให้เกิด Bug ขึ้น (เป็นการคาดเดา)
	
	วิธีแก้ปัญหา
		วิธีที่ 1 กำหนด moveSlides: 1 (ตัดปัญหาให้เคลื่อนที่ item ทีละ 1)
		วิธีที่ 2 ไม่ต้องใส่ moveSlides ลงไปเป็น option ของ Carousal bxSlider
				  ผลที่ได้คือ bxSlider จะคำนวณจำนวนการเคลื่อนที่ของ item ให้เอง
				  โดยยึดจากจำนวน item ที่แสดงอยู่ ณ ปัจจุบัน เช่น มี item แสดงอยู่ 3 ก็จะเคลื่อนที่ให้ทีละ 3
	-----------------------------------------------------------------------------------------
	*/
	
	// Use Same "Pager", "Prev", "Next"
	// Don't add <div class="slider-pager"></div>, <div class="slider-prev"></div>, <div class="slider-next"></div> 
	$('.mobile-carousal1, .mobile-carousal2').bxSlider({
		controls: false,					 
		mode: 'horizontal', 
		speed: 300,
		useCSS: false,
		easing: 'easeOutQuart',
		auto: false,
		infiniteLoop: false,
		hideControlOnEnd: true,
		adaptiveHeight: true,
		adaptiveHeightSpeed: 300
  	});
	
	$('.fbapp-bxslider').bxSlider({
		prevSelector: '.fbapp-bxslider-container .slider-prev',
		prevText: '<span class="icon-arrow-left4"></span>',
		nextSelector: '.fbapp-bxslider-container .slider-next',
		nextText: '<span class="icon-uniE60F"></span>',
		pager: false,
		mode: 'horizontal', 
		speed: 500,
		//useCSS: false,
		//easing: 'easeOutQuart',
		auto: false,
		infiniteLoop: false,
		hideControlOnEnd: true,
		minSlides: 3,
		maxSlides: 3,
		slideWidth: 200,
		slideMargin: 0
  	});
	
	//Responsive Calendar
	$('#month-bxslider').bxSlider({
		prevSelector: '#month-prev',
		prevText: '<span class="icon-arrow-left4"></span>',
		nextSelector: '#month-next',
		nextText: '<span class="icon-uniE60F"></span>',
		pager: false,
		mode: 'horizontal', 
		speed: 500,
		useCSS: false,
		easing: 'easeOutQuart',
		auto: false,
		infiniteLoop: false,
		hideControlOnEnd: false,
		//Callback
		onSlidePrev: function(){
			$('#day-prev a').click();
			$('.calendar-tooltip').removeClass('active');
			$('.calendar-tooltip__detail-close').fadeOut(300);
  		},
		onSlideNext: function(){
			$('#day-next a').click();
			$('.calendar-tooltip').removeClass('active');
			$('.calendar-tooltip__detail-close').fadeOut(300);
  		}
  	});
	
	$('#day-bxslider').bxSlider({
		prevSelector: '#day-prev',
		prevText: 'Prev',
		nextSelector: '#day-next',
		nextText: 'Next',
		pager: false,
		mode: 'horizontal', 
		speed: 500,
		useCSS: false,
		easing: 'easeOutQuart',
		auto: false,
		infiniteLoop: false,
		hideControlOnEnd: false
  	});
    
    
    
    /* Slick Slider
	======================================================================================  */
	$('.sample-slick').slick({
		infinite: false,					 
		centerMode: true,
		centerPadding: '20px',
		slidesToShow: 1
	});
    
    
    
    /* Form Validate
	====================================================================================== */
	$.validate({
			 
		//Set this property to false if you only want the form to become validated when the user clicks on the submit button.
		//validateOnBlur : false,
		
		//Setup form validation on the forms that has id #user-registration and #XXXXX
		form : '#user-registration, #std-registration, #sample-validation'
		
	});
	
	$('#message').restrictLength($('#message-maxlength'));
	$('#title').restrictLength($('#title-maxlength'));
	
    
    
	/* HTML5 Placeholder
	====================================================================================== */
	$('input, textarea').placeholder();
	
    
    
	/* FileStyle
	====================================================================================== */
	$('.filestyle').filestyle({
		buttonText: "เลือกรูปภาพ"
	});
	
	
	
	/* Selectric
	====================================================================================== */
	// Open/Close Event
	$('.lg-select').selectric({
		onOpen: function(){
			//alert('Open');
		},
		onClose: function(){
			//alert('Close');
		}
	});
	
	// Select Change Event						 
	$('.lg-select').change(function(){
		//alert('Change');
	});
	
	
	
	/* Dropkick
	======================================================================================  */
	$('.mobile-select').dropkick({
		mobile: true
	});
    
    
    
    /* Datepicker
	======================================================================================  */
	$('#dp1').datepicker({
		format: 'dd/mm/yyyy'
	});
	
	//Check-InOut
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
     
    var checkin = $('#dpd1').datepicker({
    onRender: function(date) {
    return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }
    }).on('changeDate', function(ev) {
    if (ev.date.valueOf() > checkout.date.valueOf()) {
    var newDate = new Date(ev.date)
    newDate.setDate(newDate.getDate() + 1);
    checkout.setValue(newDate);
    }
    checkin.hide();
    $('#dpd2')[0].focus();
    }).data('datepicker');
    var checkout = $('#dpd2').datepicker({
    onRender: function(date) {
    return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
    }
    }).on('changeDate', function(ev) {
    checkout.hide();
    }).data('datepicker');
    
    
    
	/* Intense Image Viewer 
	======================================================================================  */
	window.onload = function(){
		// Intensify all images with the 'intense' classname.
		var elements = document.querySelectorAll('.intense');
		Intense( elements );
	}
    //Pseudo Preload for Intense Image Viewer
	$('.intense').click(function(){
		$('.intense-preload').fadeIn(100).delay(1000).fadeOut(100);
	});
	
	
    
	/* Bootstrap Modals
	====================================================================================== */
	//Auto Call Javascript by Attribute
	$('.fullscreen-modal').on('show.bs.modal', function (e) {
	  	$('body').addClass('fullscreen-modal-active');
	})	
	$('.fullscreen-modal').on('hide.bs.modal', function (e) {
	  	$('body').removeClass('fullscreen-modal-active');
	})
	
	
	
	/* Bootstrap Collapse 
	======================================================================================  */
	//Auto Call Javascript by Attribute	
	
	
    
	/* Bootstrap ScrollSpy 
	======================================================================================  */
	//Auto Call Javascript by Attribute	
	
	
    
    /* Bootstrap Tooltip 
	======================================================================================  */
	//Auto Call Javascript by Attribute	 + Selector Script
	$('.sample-tip').tooltip();
    
    
	
	/* Bootstrap Affix 
	======================================================================================  */
	//Auto Call Javascript by Attribute	
	
	
    
    /* Submenu
	======================================================================================  */
	$('.more-menu').hover(
        function () {
            $(this).addClass('active');
            $('.more-menu.active .header--sample__menu__main__sub').stop(true, true).fadeIn(300);
        }, function () {
            $(this).removeClass('active');
            $('.more-menu .header--sample__menu__main__sub').stop(true, true).fadeOut(300);
        }
    );
    
    
	
	/* Mobile Center Menu
	======================================================================================  */
	$('#mobile-centermenu-button').click(function(){
		$(this).addClass('active');
	});
	
	$('.modal-close').click(function(){
		$('#mobile-centermenu-button').removeClass('active');
	});
	
    
    
	/* Calendar Event Popup
	======================================================================================  */
	$('.calendar-tooltip.event').click(function(){
		$(this).addClass('active');
		$('.calendar-tooltip__detail-close').fadeIn(300);
	});
	
	$('.calendar-tooltip__detail-close').click(function(){
		$(this).fadeOut(300);
		$('.calendar-tooltip').removeClass('active');
	});
	


}); //End $(document).ready()





/* Mobile Tab Menu - Scrollup "Show" / Scroll Down "Not Show"
====================================================================================== */
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st == 0){
		$('.mobile-tabmenu').removeClass('active');
		$('.lt-ie10 .mobile-tabmenu').animate({
			top: "-50px"								  
		}, 500, 'easeInOutExpo');
	}else if (st > lastScrollTop){
		$('.mobile-tabmenu').removeClass('active');
		$('.lt-ie10 .mobile-tabmenu').animate({
			top: "-50px"								  
		}, 500, 'easeInOutExpo');
   } else {
		$('.mobile-tabmenu').addClass('active');
		$('.lt-ie10 .mobile-tabmenu').animate({
			top: "0px"								  
		}, 500, 'easeInOutExpo');
   }
   lastScrollTop = st;
});





/* Animated Header
====================================================================================== */
$(document).scroll(function(){
	var howScoll = $(this).scrollTop();
	if(howScoll > 300){
		$('#sitehead').addClass('shrink')
	}else{
		$('#sitehead').removeClass('shrink')
	}
});





/* Fixed Side Column Menu
====================================================================================== */
$(document).scroll(function(){
	var fixedScoll = $(this).scrollTop();
	if(fixedScoll > 200){
		$('.fixed-sidecol__rightblock__fixedmenu').addClass('active')
	}else{
		$('.fixed-sidecol__rightblock__fixedmenu').removeClass('active')
	}
});





/* Mobile Tab Menu - Page Tracing 
====================================================================================== */
/*$(document).scroll(function() {
	var howScoll = $(this).scrollTop();
	if(howScoll > 300){
		$('.mobile-tabmenu').addClass('active');
		$('.lt-ie10 .mobile-tabmenu').animate({
			top: "0px"								  
		}, 500, 'easeInOutExpo');
	}else{
		$('.mobile-tabmenu').removeClass('active');
		$('.lt-ie10 .mobile-tabmenu').animate({
			top: "-50px"								  
		}, 500, 'easeInOutExpo');
	}
});*/





/* Fancybox
====================================================================================== */
$(document).ready(function() {
	
	//Standard Function (Use in Website)
	$(".fancybox-gallery").fancybox({
		wrapCSS: "fancybox-custom-button-wrap", //Class for wrapping element
		padding: 0,
		margin: [20, 20, 20, 20], 
		helpers : {
			title : { type : "outside" }, 
			overlay : {
				css : { "background-color" : "rgba(0, 0, 0, 0.75)" }
			}
		},
		//Class for Close, Prev, Next Button
		tpl: {
			closeBtn: '<a class="fancybox-item fancybox-custom-close" href="javascript:;">×</a>',
			next: '<a class="fancybox-custom-nav fancybox-custom-next" href="javascript:;"><span class="icon-uniE60F"></span></a>',
			prev: '<a class="fancybox-custom-nav fancybox-custom-prev" href="javascript:;"><span class="icon-arrow-left4"></span></a>'
		},
		openEffect: 'fade',
		closeEffect: 'fade',
		prevEffect: 'fade',
		nextEffect: 'fade'
	});
	
	//All Example Function	
	
	//Single Image Gallery
	$(".fancybox").fancybox({
		padding: 10,
		helpers : {
			title : { type : "outside" }, // 'float', 'inside', 'outside' or 'over'
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		}
	});
						   
	//Custom Wrapping Element			   
	$(".fancybox-customwrap").fancybox({
		wrapCSS: "fancybox-custom", // Customizable CSS class for wrapping element
		padding: 10,
		helpers : {
			title : { type : "outside" },
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		}
	});
						   
	//No Title		   
	$(".fancybox-notitle").fancybox({
		padding: 0,
		helpers : {
			title : null,
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		}
	});
			
	//Social Link
	$(".fancybox-social").fancybox({
		padding: 0,
		helpers : {
			title : { type : "outside" }, 
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		},
		// Add Social Link
		beforeLoad: function() {
			var el, id = $(this.element).data('social-id');
			if (id) {
				el = $('#' + id);
				if (el.length) {
					this.title = el.html();
				}
			}
		}
	});
			
	//Custom Margin	
	$(".fancybox-edit-margin").fancybox({
		padding: 0,
		margin: [100, 20, 100, 20], //[top, right, bottom, left]
		helpers : {
			title : { type : "outside" }, 
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		}
	});

	//Outside Prev/Next Button
	$(".fancybox-outside-button").fancybox({
		padding: 0,
		margin: [20, 60, 20, 60], //add left+right margin for outside button when reduce size
		helpers : {
			title : { type : "outside" }, 
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		}
	});
	
	//Effect : Change Frame Size Animation
	//Function
	(function ($, F) {
		F.transitions.resizeIn = function() {
			var previous = F.previous,
				current  = F.current,
				startPos = previous.wrap.stop(true).position(),
				endPos   = $.extend({opacity : 1}, current.pos);
			startPos.width  = previous.wrap.width();
			startPos.height = previous.wrap.height();
			previous.wrap.stop(true).trigger('onReset').remove();
			delete endPos.position;
			current.inner.hide();
			current.wrap.css(startPos).animate(endPos, {
				duration : current.nextSpeed,
				easing   : current.nextEasing,
				step     : F.transitions.step,
				complete : function() {
					F._afterZoomIn();
					current.inner.fadeIn("fast");
				}
			});
		};
	}(jQuery, jQuery.fancybox));
	//Selector
	$(".fancybox-change-framesize").fancybox({
		padding: 0,
		helpers : {
			title : { type : "outside" }, 
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		},
		nextMethod : 'resizeIn'
	});

	// Launch fancyBox on page load
	// Method 1 : no html tag in body
	/*$.fancybox.open([
		{
			href : 'images/img1.jpg',
			title : 'TITLE 1'
		}
	], {
		padding : 0,
		helpers : {
			title : { type : "outside" }, 
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		}
	});*/

	// Launch fancyBox on page load
	// Method 2 : have html tag in body and should hide 
	//$(".fancybox").eq(0).trigger('click');

	//Effect: Fade
	$(".fancybox-fade-effect").fancybox({
		padding: 10,
		helpers : {
			title : { type : "outside" }, // 'float', 'inside', 'outside' or 'over'
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		},
		openEffect: 'fade',
		closeEffect: 'fade',
		prevEffect: 'fade',
		nextEffect: 'fade'
	});

	//Effect: Elastic
	$(".fancybox-elastic-effect").fancybox({
		padding: 10,
		helpers : {
			title : { type : "outside" }, // 'float', 'inside', 'outside' or 'over'
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		},
		openEffect: 'elastic',
		closeEffect: 'elastic',
		prevEffect: 'elastic',
		nextEffect: 'elastic'
	});

	//Effect: Fade + Elastic
	$(".fancybox-fadeelastic-effect").fancybox({
		padding: 10,
		helpers : {
			title : { type : "outside" }, // 'float', 'inside', 'outside' or 'over'
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		},
		openEffect: 'fade',
		closeEffect: 'elastic',
		prevEffect: 'fade',
		nextEffect: 'fade'
	});

	//Pagination 
	//Function 
	function addLinks() {
		var list = $("#fancybox-pagination");
		if (!list.length) {    
			list = $('<ul id="fancybox-pagination">');
			for (var i = 0; i < this.group.length; i++) {
				$('<li data-index="' + i + '"><label></label></li>').click(function() { $.fancybox.jumpto( $(this).data('index'));}).appendTo( list );
			}
			list.appendTo( 'body' );
		}
		list.find('li').removeClass('active').eq( this.index ).addClass('active');
	}
	function removeLinks() {
		$("#fancybox-pagination").remove();    
	}
	//Selector
	$(".fancybox-simple-pagination").fancybox({
		padding: 0,
		margin: [20, 60, 20, 60], //add left+right margin for outside button
		helpers : {
			title : { type : "outside" }, 
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		},
		// Add Pagination Function 
		afterLoad   : addLinks,
		beforeClose : removeLinks
	});
	
	//Customize Close, Prev, Next Button
	$(".fancybox-custom-button").fancybox({
		wrapCSS: "fancybox-custom-button-wrap", //Class for wrapping element
		padding: 0,
		margin: [20, 20, 20, 20], 
		helpers : {
			title : { type : "outside" }, 
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			}
		},
		//Class for Close, Prev, Next Button
		tpl: {
			closeBtn: '<a class="fancybox-item fancybox-custom-close" href="javascript:;">Close</a>',
			next: '<a class="fancybox-custom-nav fancybox-custom-next" href="javascript:;"><span>Next</span></a>',
			prev: '<a class="fancybox-custom-nav fancybox-custom-prev" href="javascript:;"><span>Prev</span></a>'
		}
	});

	//Inline 960 x 600 px (Fancybox + mCustomScrollbar)
	$(".fancybox-fullpage-inline").fancybox({
		wrapCSS: "fancybox-inline-wrap", // Customizable CSS class for wrapping element
		minWidth: 960,
		minHeight: 600,
		scrolling: 'no',
		padding: 0,
		margin: [20, 20, 20, 20], 
		helpers : {
			title : null,
			overlay : {
				css : { "background" : "#FFFFFF" }
			}
		}
	});
	//mCustomScrollbar
	$(".fancybox-inline-content").mCustomScrollbar({
		autoHideScrollbar: false,
		scrollInertia: 500,
		theme: "custom-bar",
		advanced: {
			updateOnContentResize: true
		}
	});

	//Single VDO Gallery 
	$(".fancybox-youtube").fancybox({
		padding: 0,
		helpers : {
			title : { type : "outside" }, // 'float', 'inside', 'outside' or 'over'
			overlay : {
				css : { "background" : "rgba(0, 0, 0, 0.75)" }
			},
			media : {},
		}
	});

});//End $(document).ready()