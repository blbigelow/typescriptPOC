/// <reference path="../../../tools/typings/tsd.d.ts" />
/// <reference path="../../../tools/typings/typescriptDemo.d.ts" />

describe('Main View Controller Component Tests', function() {

    var controller : typescriptDemo.MainController;
    var todoServiceMock : typescriptDemo.services.TodoService;
    var $http : ng.IHttpService;
    var $router;


    beforeEach(function() {
        angular.mock.module("typescriptDemo");
        angular.mock.module("typescriptDemo.main");
    });

    beforeEach(inject(function ($injector, _$http_: ng.IHttpService, _$router_){
        todoServiceMock = $injector.get('typescriptDemo.services.todoService');
        $http = _$http_;
        $router = _$router_;


        spyOn(todoServiceMock, 'retrieveTodos').and.returnValue(['one','two']);
    }));

    it('should use todoService', function() {
        controller = new typescriptDemo.MainController($router, $http, todoServiceMock);

        expect(controller).not.toBeNull();
        expect(todoServiceMock.retrieveTodos).toHaveBeenCalled();
    });

    it ('should have todos', function() {
        expect(controller.todos.length).toBe(2);
        expect(controller.todos[0]).toBe('one');
        expect(controller.todos[1]).toBe('two');
    });
});