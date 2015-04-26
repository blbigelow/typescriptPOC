/// <reference path="../../../tools/typings/tsd.d.ts" />
/// <reference path="../../../tools/typings/typescriptDemo.d.ts" />

module typescriptDemo.services {
    'use strict';

    export class TodoService {

        cachedTodos : string[];

        static $inject = ['$http', '$q']
        constructor(private $http: angular.IHttpService, private $q: angular.IQService) {
            this.cachedTodos = [];
        }

        retrieveTodos() : string[] {
            if (this.cachedTodos.length === 0) {
                this.cachedTodos.push('I love me some bacon!');
                this.cachedTodos.push('I want more bacon!');
            }

            return this.cachedTodos;
        }
    }

    angular.module('typescriptDemo').service('typescriptDemo.services.todoService', TodoService);
}