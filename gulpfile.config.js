/**
 * Created by bbigelow on 4/2/15.
 */
'use strict';
var GulpConfig = (function () {
    function GulpConfig() {
        //Got tired of scrolling through all the comments so removed them
        //Don't hurt me AC :-)
        this.source = './src/';
        this.publicDir = './public/';
        this.test = './test';

        this.sourceApp = this.source + 'app/';
        this.sourceComponents = this.source + 'components/';

        this.tsOutputPath = this.publicDir;
        this.tsTestOutputPath = this.test;
        this.allJavaScript = [this.source + 'js/**/*.js'];

        this.allTypeScript = this.source + '**/*.ts';
        this.allTestTypeScript = this.test + '/**/*.ts';

        this.typings = './tools/typings/';
        this.libraryTypeScriptDefinitions = './tools/typings/**/*.ts';

        this.appTypeScriptReferences = this.typings + 'typescriptDemo.d.ts';

        this.srcHtml = this.source + '**/*.html';
        this.srcStyles = this.source + '/styles/**';
    }
    return GulpConfig;
})();
module.exports = GulpConfig;