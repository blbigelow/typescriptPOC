/// <reference path="../../tools/typings/tsd.d.ts" />
/// <reference path="../../tools/typings/typescriptDemo.d.ts" />

'use strict';

(() : void => {
    angular.module('typescriptDemo', ['typescriptDemo.main', 'ngNewRouter'])
        .controller('AppController', ['$router', AppController]);

        function AppController($router) {
            $router.config([
                { path: '/'         , redirectTo: '/main'   },
                { path: '/main'     , component: 'main'     }
            ]);
        }

})();