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
    $scope.items = $firebaseObject(ref);

    $scope.addItem = function() {
        ref.push({
          name: $scope.name,
          description: $scope.desc
        });
    };

    $scope.editItem = function(item) {
        $scope.editActive = true;

        $scope.name = item.name;
        $scope.desc = item.description;
    };

    $scope.saveEditItem = function() {
        var current = $scope.items.$child(key);
        current.name = $scope.name;
        current.description = $scope.desc;
        current.$save();

        $scope.editActive = false;
    };

}]);
