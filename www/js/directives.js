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

 angular.module('appwillet.directives')
 .directive("willetTabPanel", function() {
 	return {
	    link: function(scope, element, attrs){
	    	$(element).find('a').click(function (e) {
			  e.preventDefault();
			  $(this).tab('show');
			});
		}
	};
 });