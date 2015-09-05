'use strict';

angular.module('gurpsApp')
  .controller('CreatecharacterCtrl', function ($scope, Auth, $http) {
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


    /////////////////
    //Languages
    /////////////////

    $scope.languagelist = [];

    $scope.addLanguageToList = function(language){
      $scope.languagelist.push(language);
      $scope.language = '';
    };

    $scope.addLanguageListToCharacter = function(languagelist){
      $scope.character.languages = languagelist;
    };

    $scope.removeLanguage = function(language){
      var index = $scope.languagelist.indexOf(language);
      $scope.languagelist.splice(index, 1);
    };

    /////////////////
    //Advantages
    /////////////////

    $scope.advantagelist = [];

    $scope.addAdvantageToList = function(advantage){
      $scope.advantagelist.push(advantage);
      $scope.advantage = '';
    };

    $scope.addAdvantageListToCharacter = function(advantageList){
      $scope.character.advantages = advantageList;
    };

    $scope.removeAdvantage = function (advantage){
      var index = $scope.advantagelist.indexOf(advantage);
      $scope.advantagelist.splice(index, 1);
    };


    /////////////////
    //Disadvantages
    /////////////////

    $scope.disadvantagelist = [];

    $scope.addDisadvantageToList = function(disadvantage){
      $scope.disadvantagelist.push(disadvantage);
      $scope.disadvantage = '';
    };

    $scope.addDisadvantageListToCharacter = function(disadvantageList){
      $scope.character.disadvantages = disadvantageList;
    };

    $scope.removeDisadvantage = function (disadvantage){
      var index = $scope.disadvantagelist.indexOf(disadvantage);
      $scope.disadvantagelist.splice(index, 1);
    };

    /////////////////
    //Skills
    /////////////////

    $scope.skilllist = [];

    $scope.addSkillToList = function(skill){
      $scope.skilllist.push(skill);
      $scope.skill = '';
    };

    $scope.addSkillListToCharacter = function(skilllist){
      $scope.character.skills = skilllist;
    };

    $scope.removeSkill = function (skill){
      var index = $scope.skilllist.indexOf(skill);
      $scope.skilllist.splice(index, 1);
    };

    $scope.magic = function(){
      $scope.addLanguageListToCharacter($scope.languagelist);
      $scope.addAdvantageListToCharacter($scope.advantagelist);
      $scope.addDisadvantageListToCharacter($scope.disadvantagelist);
      $scope.addSkillListToCharacter($scope.skilllist);
      $scope.character.owner = $scope.owner().name;
      //console.log($scope.character);
      $http.post('api/characters/', $scope.character)
        .success(function(){
          console.log('Great success');
          console.log($scope.character);
        }).
        error(function(){
          console.log('nope');
        });
    };

  });
