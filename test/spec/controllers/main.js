'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('exampleYeomanAppApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('check initial todos', function () {
    expect(scope.todos.length).toBe(0);
  });
});
