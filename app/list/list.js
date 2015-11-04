'use strict';

angular.module('itemList.list', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'list/list.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

    var ref = new Firebase("https://itemlist.firebaseio.com/");
    $scope.items = $firebaseArray(ref);

    $scope.showActive = false;

    $scope.addItem = function() {
        $scope.hide();

        $scope.items.$add({
          name: $scope.name,
          description: $scope.desc
        });

        clearFields();
    };

    $scope.editItem = function(item) {
        $scope.hide();

        $scope.editActive = true;

        $scope.id = item.$id;
        $scope.name = item.name;
        $scope.desc = item.description;
    };

    $scope.showItem = function(item) {
        $scope.nameShow = item.name;
        $scope.descShow = item.description;

        $scope.showActive = true;
    };

    $scope.saveEditItem = function() {
        $scope.hide();

        var id = $scope.id;
        console.log(id);
        var current = $scope.items.$getRecord(id);
        current.name = $scope.name;
        current.description = $scope.desc;
        $scope.items.$save(current);

        $scope.editActive = false;

        clearFields();
    };

    $scope.deleteItem = function(item) {
        $scope.hide();
        $scope.items.$remove(item);
    };

    $scope.hide = function() {
        $scope.showActive = false;
    };

    var clearFields = function() {
        $scope.id = "";
        $scope.name = "";
        $scope.desc = "";
    };

}]);
