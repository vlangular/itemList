'use strict';

angular.module('itemList.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'list/list.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', ['$scope', '$firebaseObject', function($scope, $firebaseObject) {

    var ref = new Firebase("https://itemlist.firebaseio.com/");
    $scope.data = $firebaseObject(ref);

    console.log($scope.data);

}]);
