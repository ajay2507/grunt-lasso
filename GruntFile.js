module.exports = (grunt) => {
    'use strict';
    const path = require('path');;
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'src/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
            }
        },
        clean: {
            build: ['.cache']
        },

        lasso: {
            lassoOptions: {
                "srcHTML": path.join(__dirname, 'src/index.html'),
                "dependencies": [
                    "./src/app.js",
                    "./src/app.less",
                ],
            },

            config: {
                'plugins': [
                    'lasso-less'
                ],
                'urlPrefix': '/build',
                'outputDir': path.join(__dirname, 'build'),
                'fingerprintsEnabled': true,
                'minify': false,
                'resolveCssUrls': true,
                'bundlingEnabled': true
            },


        }



    });
    //console.log(grunt);
    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // loading default task
    grunt.registerTask('default', ['jshint', 'clean', 'lasso']);
};
