/// <reference path="../../tools/typings/tsd.d.ts"/>
/// <reference path="../../tools/typings/typescriptDemo.d.ts"/>

describe('Todo Service Tests', function() {
    var todoService;

    beforeEach(module('typescriptDemo'));

    beforeEach(inject(function (_todoService_) {
        todoService = _todoService_;
    }));

    it("should return a list of todos", function() {
        todoService.retreiveTodos();
    });
});