angular.module('appwillet')
.run(['$httpBackend', '$resource', function($httpBackend, $resource) {
	// Template loading should be exempted
	$httpBackend.whenGET(/\.html$/).passThrough();
	// Mock JSON loading should be exempted
	$httpBackend.whenGET(/\.json$/).passThrough();
	
	// Start mocking JSON responses
	$httpBackend.whenGET('http://localhost:8080/willet/services/products').respond(
		$resource("mocking/mock-responses/getAllProducts.json").get()
	);
}]);