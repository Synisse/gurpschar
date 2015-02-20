'use strict';

angular.module('gurpsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createcharacter', {
        url: '/createcharacter',
        templateUrl: 'app/createcharacter/createcharacter.html',
        controller: 'CreatecharacterCtrl'
      });
  });