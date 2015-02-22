'use strict';

angular.module('gurpsApp')
  .controller('CharacterDetailCtrl', function ($scope, $stateParams, $http) {
    $scope.message = 'Hello';
    $scope.characterid = $stateParams.charid;

    $http.get('/api/characters/'+ $scope.characterid).success(function(awesomeThings) {
      $scope.character = awesomeThings;
    });

    $scope.deleteCharacter = function(){
      $http.delete('/api/characters/'+ $scope.characterid)
      .success(function() {
        console.log('Character deleted');
      }).
      error(function(){
        console.log('Error');
      });
    };

  });
