(function($){
	$(document).ready(function() {

		$('#menu-trigger').click(function(e){
			e.preventDefault();
			$('#main-menu').toggleClass('show');
		});

		$('#topmenu-trigger').click(function(e){
			e.preventDefault();
			$('#top-menu').toggleClass('show');
		})

 
	  	$("#hero-slider").owlCarousel({
	 
		    navigation : false, // Show next and prev buttons
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:true
		 
		    // "singleItem:true" is a shortcut for:
		    // items : 1, 
		    // itemsDesktop : false,
		    // itemsDesktopSmall : false,
		    // itemsTablet: false,
		    // itemsMobile : false
	 
	  	});
	 
	});

})(jQuery);
