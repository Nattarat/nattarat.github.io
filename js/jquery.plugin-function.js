/**
 * JQUERY PLUGIN FUNCTION
 *
 * .....jPreloader
 * .....ImageFill
 * .....scrollToBySpeed
 * .....Bootstrap Modals
 *
 */

$(document).ready(function() {
    
    /*------------------------------------*\
        jPreloader
    \*------------------------------------*/
    $('body').jpreLoader({
		showPercentage: false,		//Show Percentage number
		showSplash: true,			//Show Preload image
		splashID: '#preload-items',
		splashVPos: '50%',
		loaderVPos: '0%',
		autoClose: true
	}, function () {
        $('.fullfill-img img').imgfill({
            align: 'center',
            container: '.fullfill-img'
        });
        $('.fullfill-img img').fadeIn();
    });
    
    /*------------------------------------*\
        ImageFill
    \*------------------------------------*/
    $(window).resize(function () {
		$('.fullfill-img img').imgfill({
            align: 'center',
            container: '.fullfill-img'
        });
        $('.fullfill-img img').fadeIn();
	});

    /*------------------------------------*\
        scrollToBySpeed
    \*------------------------------------*/
	$('.resume-info__myself').click(function () {
		$('.resume-info__list').scrollToBySpeed({
			//speed: 1000,
			//offset: -100,									   
			easing: 'easeInOutCubic'
		});
	});
    
    /*------------------------------------*\
        Bootstrap Modals
    \*------------------------------------*/
	//Auto Call Javascript by Attribute
	$('.fullscreen-modal').on('show.bs.modal', function (e) {
	  	$('body').addClass('fullscreen-modal-active');
	});
	$('.fullscreen-modal').on('hide.bs.modal', function (e) {
	  	$('body').removeClass('fullscreen-modal-active');
	});
    
}); //End $(document).ready();