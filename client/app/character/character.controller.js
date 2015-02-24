'use strict';

angular.module('gurpsApp')
  .controller('CharacterCtrl', function ($scope, $http, Auth) {
    $scope.message = 'Hello';

    $scope.currentUser = Auth.getCurrentUser;
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

      $http.get('/api/characters').success(function(characters) {
        $scope.charactersdb = characters;
      });

      $scope.ownCharacters = [];

      $http.get('/api/characters/ownership/' + $scope.currentUser().name)
        .success(function(characters){
          $scope.ownCharacters = characters;
        })
  });
