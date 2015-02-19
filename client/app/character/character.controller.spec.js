'use strict';

describe('Controller: CharacterCtrl', function () {

  // load the controller's module
  beforeEach(module('gurpsApp'));

  var CharacterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharacterCtrl = $controller('CharacterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
