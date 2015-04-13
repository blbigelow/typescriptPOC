/// <reference path="../../../tools/typings/tsd.d.ts" />
/// <reference path="../../../tools/typings/typescriptDemo.d.ts" />
module typescriptDemo {
    class MainController {

        todos: string[];

        static $inject = ['$router', '$http', 'typescriptDemo.services.todoService'];
        constructor(private $router, private $http: angular.IHttpService, private todoService: typescriptDemo.services.TodoService) {
            this.todos = todoService.retreiveTodos();
        }
    }
    angular.module('typescriptDemo.main', []).controller('MainController', MainController);
}