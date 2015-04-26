/// <reference path="../../tools/typings/tsd.d.ts" />
/// <reference path="../../tools/typings/typescriptDemo.d.ts" />

describe('Todo Service Tests', function() {
    var todoService;

    beforeEach(module('typescriptDemo'));

    beforeEach(inject(function ($injector) {
        todoService = $injector.get('typescriptDemo.services.todoService');
    }));

    it('should call cachedTodos to retrieve values', function() {
        expect(todoService.cachedTodos).not.toBeNull();
        expect(todoService.cachedTodos.length).toBe(0);
        var todos : string[] = todoService.retrieveTodos();
        expect(todoService.cachedTodos.length).toEqual(todos.length);
        expect(todoService.cachedTodos[0]).toEqual(todos[0]);
        expect(todoService.cachedTodos[1]).toEqual(todos[1]);
    });

    it("should return a list of todos", function() {
        var todos : string[] = todoService.retrieveTodos();
        expect(todos.length).toBe(2);
        expect(todos[0]).toBe('I love me some bacon!');
    });

});