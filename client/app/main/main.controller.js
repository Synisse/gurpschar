'use strict';

angular.module('gurpsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.logstuff = function (){
      console.log('Stuff');
    };

    $scope.addRandom = function (){
      var newStuff =
      {
        name:'asd',
        info: 'asd'
      };

      $http.post('api/things',newStuff);
      console.log('added');
    };


    $scope.testAddCharacter = function(){
      var character =
      {
        name: 'asd',
        st: 15,
        dx: 15,
        iq: 15,
        ht: 15,

        hp: 17,
        will: 12,
        per: 14,
        fp: 15,

        languages: [
          {name: 'RandomLanguage', spoken: 'MotherTongue', written: 'Nope'},
          {name: 'RandomLanguageTwo', spoken: 'NotMotherTongue', written: 'BUTYE'}
          ],

        advantages: ['coolsein','awesomesein','weltherrschaft'],

        disadvantages: ['aggro','negativ','suboptimal'],

        skills: ['skill1','hauen','schlagen'],

      };

      $http.post('api/characters/', character);
    };
  });
