'use strict';

describe('Controller: CreatecharacterCtrl', function () {

  // load the controller's module
  beforeEach(module('gurpsApp'));

  var CreatecharacterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreatecharacterCtrl = $controller('CreatecharacterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
