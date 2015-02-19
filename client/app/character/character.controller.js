'use strict';

angular.module('gurpsApp')
  .controller('CharacterCtrl', function ($scope) {
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
  });
