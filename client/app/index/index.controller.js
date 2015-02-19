'use strict';

angular.module('gurpsApp')
  .controller('IndexCtrl', function ($scope, $mdSidenav) {

    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };
    
});
