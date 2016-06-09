angular.module('appwillet.directives')
 .directive("ngProductImages", function() {
 	return {
	    link: function(scope, element, attrs){
	    	$(element).owlCarousel({
			    loop:false,
			    margin:10,
			    nav:false,
			    dots: true,
			    items: 1
			});
		}
	};
 });