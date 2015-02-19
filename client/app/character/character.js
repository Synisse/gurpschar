'use strict';

angular.module('gurpsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('character', {
        url: '/character',
        templateUrl: 'app/character/character.html',
        controller: 'CharacterCtrl'
      })
      .state('characterDetails', {
        url: '/character/:id',
        templateUrl: 'app/character/characterdetail.html',
        controller: 'CharacterDetailCtrl'
      });
  });
