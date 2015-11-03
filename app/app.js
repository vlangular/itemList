'use strict';

// Declare app level module which depends on views, and components
angular.module('itemList', [
  'ngRoute',
  'firebase',
  'itemList.list'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
