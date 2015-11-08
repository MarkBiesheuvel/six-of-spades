module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: {
                src: ['index.js', 'lib/**/*.js', 'test/**/*.js']
            }
        },
        nodeunit: {
            all: ['test/**/*.js']
        },
        watch: {
            gruntfile: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            },
            all: {
                files: ['index.js', 'lib/**/*.js', 'test/**/*.*'],
                tasks: ['jshint', 'nodeunit'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    // Load the plugins
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['watch']);

};