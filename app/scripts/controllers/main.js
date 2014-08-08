'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('exampleYeomanAppApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos');

  	$scope.todos = todosInStore && todosInStore.split('\n') || [];

    $scope.$watch('todos', function(){
      localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);

  	$scope.addTodo = function(){

  		//Check if item already exists.
  		if($scope.todos.indexOf($scope.todo) === -1 && $scope.todo){
	  		$scope.todos.push($scope.todo);
	  		$scope.todo = '';
  		}

  	};

  	$scope.removeTodo = function(index){
  		$scope.todos.splice(index, 1);
  	};

  });
