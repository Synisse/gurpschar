'use strict';

angular.module('gurpsApp')
  .controller('CharacterCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $scope.characters = [
      {
        'id':'1',
        'name':'firstone',
        'special':'fist'
      },
      {
        'id':'2',
        'name':'secondone',
        'special':'fise22t'
      },
      {
        'id':'3',
        'name':'thrirdddsdssd',
        'special':'fisfffft'
      }
      ];

      $scope.charactersdb = [];

      $scope.awesomeThings = [];

      $http.get('/api/characters').success(function(awesomeThings) {
        $scope.charactersdb = awesomeThings;
      });
  });
