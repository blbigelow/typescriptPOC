/// <reference path="../../../tools/typings/tsd.d.ts" />
/// <reference path="../../../tools/typings/typescriptDemo.d.ts" />
module typescriptDemo {
    class MainController {

        todos: string[] = [];

        static $inject = ['$router', '$http']
        constructor(private $router, private $http: angular.IHttpService) {
            this.getTodos();
        }

        getTodos() {
            this.todos.push('I like bacon');
            this.todos.push('I like Pigs');
        }

    }
    angular.module('typescriptDemo.main', []).controller('MainController', MainController);
}