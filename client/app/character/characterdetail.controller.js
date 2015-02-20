'use strict';

angular.module('gurpsApp')
  .controller('CharacterDetailCtrl', function ($scope, $stateParams) {
    $scope.message = 'Hello';
    $scope.characterid = $stateParams.charid;
  });
