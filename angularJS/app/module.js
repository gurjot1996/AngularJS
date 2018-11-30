var myApp=angular.module('myApp',['ngRoute']);

	myApp.config(function($routeProvider){
		$routeProvider
		.when('/',{
			controller:'app/controllers/myctrl.js',
			templateUrl:'app/views/customers.html'
		});
	});