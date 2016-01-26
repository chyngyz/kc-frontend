(function($){
	$(document).ready(function() {

		// Main menu mobile trigger
		$('#menu-trigger').click(function(e){
			e.preventDefault();
			$('#main-menu').toggleClass('show');
		});

		// Top menu mobile trigger
		$('#topmenu-trigger').click(function(e){
			e.preventDefault();
			$('#top-menu').toggleClass('show');
		})

 		// Home page hero slider
	  	$("#hero-slider").owlCarousel({
			loop : true,
			autoplay : true,
			autoplayHoverPause : true,
			fluidSpeed : 600,
			autoplaySpeed : 600,
			dotsSpeed : 600,
			dragEndSpeed : 60,
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:true,
		    autoPlay : true,
    		stopOnHover : false,
    		autoHeight : true,
    		transitionStyle: "fade"
		
	 
	  	});

	  	// Outbound panels slider
	  	$("#panel-slider").owlCarousel({
			loop : true,
			autoplay : true,
			autoplayHoverPause : true,
			fluidSpeed : 600,
			autoplaySpeed : 600,
			dotsSpeed : 600,
			dragEndSpeed : 60,
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    autoPlay : true,
    		stopOnHover : false,
    		autoHeight : true,
    		transitionStyle: "fade",

    		autoHeight :true,
		 
		    items : 3, 
		    itemsDesktop : [1000, 3],
		    itemsDesktopSmall : [979,3],
		    itemsTablet: [768,2],
		    itemsMobile : [479,1],
		    navigation : true,
		    navigationText : ["prev","next"],
		    rewindNav : true,
		    pagination : false
	 
	  	});

	  	// Outbound testimonials slider
	  	$("#testimonials").owlCarousel({
			loop : true,
			autoplay : true,
			autoplayHoverPause : true,
			fluidSpeed : 600,
			autoplaySpeed : 600,
			dotsSpeed : 600,
			dragEndSpeed : 60,
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    autoPlay : true,
    		stopOnHover : false,
    		singleItem: true,

    		autoHeight :true,
		 
		    navigation : true,
		    navigationText : ["prev","next"],
		    rewindNav : true,
		    pagination : false
	 
	  	});

	  	// Outbound tour-hero slider
	  	$("#kc-tour-hero-slider").owlCarousel({
			loop : true,
			autoplay : true,
			autoplayHoverPause : true,
			fluidSpeed : 600,
			autoplaySpeed : 600,
			dotsSpeed : 600,
			dragEndSpeed : 60,
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    autoPlay : true,
    		stopOnHover : false,
    		singleItem: true,
		    navigation : true,
		    navigationText : ["prev","next"],
		    rewindNav : true,
		    pagination : false
	 
	  	});

	  	// Running text
	  	$('.marquee').marquee({
			//If you wish to always animate using jQuery
			allowCss3Support: true,
			//works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
			css3easing: 'linear',
			//pause time before the next animation turn in milliseconds
			delayBeforeStart: 0,
			//'left', 'right', 'up' or 'down'
			direction: 'left',
			//true or false - should the marquee be duplicated to show an effect of continues flow
			duplicated: false,
			//speed in milliseconds of the marquee in milliseconds
			duration: 15000,
			//gap in pixels between the tickers
			gap: 20,
			//on cycle pause the marquee
			pauseOnCycle: false,
			//on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
			pauseOnHover: true
		});


		// Go top!
	    $('#goto-top').on('click', function () {
	        $('html, body').animate({scrollTop: 0}, 'slow');
	    });

	    // Show fixed footer
	    $(window).on("scroll", function () {
	        if ($(window).scrollTop() > 200){
	            $('#fixed-contacts').addClass('shown');
	        }
	        else if($(window).scrollTop() < 200) {
	            $('#fixed-contacts').removeClass('shown');
	        }
	    });

	    // Contact input mask
	    $("#order-call-num, #order-call-num-mobile").mask("+996 (###) ##-##-##");
		$("#masked-number").mask("0 (###) ##-##-##");

	    // Tabs on section home-1, home-4 and home-7
	    $('#popular-tabs a,#popular-edu-tabs a,#inbound-tours-tabs a,#job-accounts-tabs a ').click(function (e) {
		  e.preventDefault()
		  $(this).siblings().removeClass('active');
		  $(this).addClass('active').tab('show');
		});

		// radio buttons on home-6
		$('.btn-radio').click(function() {
			var target = '#' + $(this).data('target');
			$(target).prop("checked", true);
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
		}); 

		// Checkbox and radio of type checkbox on label click, checkbox and radio of type checkbox assigns checked
		$('.checkbox label, .checkbox-type-radio label').click(function(){
			$(this).siblings('input').prop("checked", !$(this).siblings('input').prop("checked"));
		})


		// Booking form increment desc form
		$('.counter-inc').click(function(){
			var input = $(this).siblings('input.form-control');
			var value = $(input).val();

			$(input).mask("#");
			$(input).val(+value + 1);
		});

		$('.counter-dec').click(function(){
			var input = $(this).siblings('input.form-control');
			var value = $(input).val();

			$(input).mask("#");
			if(value == 0) {

			} else {
				$(input).val(+value - 1);
			}
		});
		// Date picker
		var dates = $("#from, #to").datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			numberOfMonths: 1,
			onSelect: function(selectedDate){
				console.log('assd');
				var option = this.id == "from" ? "minDate" : "maxDate",
					instance = $( this ).data( "datepicker" ),
					date = $.datepicker.parseDate(
						instance.settings.dateFormat || $.datepicker._defaults.dateFormat,
						selectedDate, instance.settings);
				dates.not(this).datepicker("option", option, date);
			}
		});


		// Range slider
		$("#booking-form-slider").slider({
		  range: true,
		  min: 15,
		  max: 3600,
		  values: [ 75, 2000 ],
		  step: 20,
		  slide: function( event, ui ) {
		    $( "#range-start-amount" ).val( "$" + ui.values[ 0 ]);
		    $( "#range-end-amount" ).val( "$" + ui.values[ 1 ] );
		  }
		});
		$( "#range-start-amount" ).val( "$" + $( "#booking-form-slider" ).slider( "values", 0 ));
		$( "#range-end-amount" ).val("$" + $( "#booking-form-slider" ).slider( "values", 1 ));

		// Days Range slider
		$("#search-days-slider").slider({
		  range: true,
		  min: 1,
		  max: 90,
		  values: [ 10, 30 ],
		  step: 1,
		  slide: function( event, ui ) {
		    $( "#search-days-start-amount" ).val(ui.values[ 0 ]);
		    $( "#search-days-end-amount" ).val(ui.values[ 1 ] );
		  }
		});
		$( "#search-days-start-amount" ).val( $( "#search-days-slider" ).slider( "values", 0 ));
		$( "#search-days-end-amount" ).val($( "#search-days-slider" ).slider( "values", 1 ));



		// Hotel Gallery
		$("#hotel-gallery").lightGallery({
			download: 'false'
		}); 



		// Blurred image in news page
		$('#blurred-image').blurjs({
	        source: '#kc-news--hero',
	        radius: 30,
	        overlay: 'rgba(255, 255, 255, .2)',
	        offset: {
				x: 50,
				y: 50
			}
	    });

		// Open login popup on Vacancy page
		$('.kc-job-accounts--login, .kc-apply-to-job').magnificPopup({
			type:'inline',
			showCloseBtn: false,
			midClick: true
		});
		// Close on cross click
		$('.kc-vacancy-login-popup--close').click(function () {
			$.magnificPopup.close();
		});

		// Show hide password
		$('.show-hide').click(function () {
			var inputPassword = $('.showHidePassword');
			var type = $(inputPassword).prop('type');
			if(type == 'password') {
				$(inputPassword).prop('type', 'text');
			} else {
				$(inputPassword).prop('type', 'password');
			}
		})
	});

})(jQuery);


























