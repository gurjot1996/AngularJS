var myApp=angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller:'app/controllers/myctrl',
		templateUrl:'app/views/customers.html'
	});
	.when('/orders/:customerId',{
		controller:'app/controllers/orderCtrl',
		templateUrl:'app/views/orders.html'
	})

});