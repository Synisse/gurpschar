'use strict';

angular.module('gurpsApp')
  .controller('CreatecharacterCtrl', function ($scope, Auth) {
    $scope.message = 'Hello';
    $scope.owner = Auth.getCurrentUser;

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.languageCount = 2;

    $scope.character = '';

    $scope.getLanguageCount = function() {
      return new Array($scope.languageCount);
    };

    $scope.languagelist = [];

    $scope.addLanguageToList = function(language){
      $scope.languagelist.push(language);
      $scope.language = '';
    };

    $scope.addLanguageListToCharacter = function(languagelist){
      $scope.character.languages = languagelist;
    };
  });
