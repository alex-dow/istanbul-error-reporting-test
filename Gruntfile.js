var SRC_DIR         = "src/main/javascript"; // Javascript source
var TEST_DIR        = "src/test/javascript"; // Javascript tests
var REPORTS_DIR     = "reports";
var NODE_DIR        = "node_modules";


module.exports = function(grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            tests: {
                src: ['_SpecRunner.html','_CoverageSpecRunner.html', '.grunt', REPORTS_DIR]
            }
        },

        jasmine: {
            coverage: {
                src: [
                    SRC_DIR + '/models/**/*.js',
                ],
               
                options: {
                    outfile: '_CoverageSpecRunner.html',
                    keepRunner: true,
                    specs: [TEST_DIR + '/**/*.js'],
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        replace: true,
                        coverage: REPORTS_DIR + '/coverage.json',
                        template: require('grunt-template-jasmine-requirejs'),
                        templateOptions: {
                            requireConfig: {
                                baseUrl: SRC_DIR,
                                paths: {
                                    "underscore": "../../../" + NODE_DIR + "/underscore/underscore",
                                    "backbone": "../../../" + NODE_DIR + "/backbone/backbone",
                                    "jquery": "../../../" + NODE_DIR + "/jquery/dist/jquery",
                                }
                            }
                        }
                    }
                }
            },
            test: {
                src: [
                    SRC_DIR + '/namespace/models/**/*.js',
                ],
                options: {
                    keepRunner: true,
                    specs: [TEST_DIR + '/**/*.js'],
                    display: 'full',
                    summary: true,
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            baseUrl: SRC_DIR,
                            paths: {
                                "underscore": "../../../" + NODE_DIR + "/underscore/underscore",
                                "backbone": "../../../" + NODE_DIR + "/backbone/backbone",
                                "jquery": "../../../" + NODE_DIR + "/jquery/dist/jquery",
                            },
                        }
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('clear', [
        'clean:tests'
    ]);

    grunt.registerTask('test', [
        'jasmine:test',
        'jasmine:coverage'
    ]);
}
