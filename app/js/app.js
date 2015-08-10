(function () {
  'use strict';

  console.log('hello, world');
})(); 


var app = angular.module('app', []);

app.controller('main', function($scope, $http){
	console.log('main');
});

app.service('srv', function($rootScope){
	console.log('srv');
});

app.factory('fack', function($http){
	console.log('fack');
});