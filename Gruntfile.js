module.exports = function(grunt) {

    var allJS = '_src/resources/js/**/*.js';

    var allImg = '**/*.*';

    const sass = require('node-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        concat: {

            js: {

                src: [
                   'node_modules/@fortawesome/fontawesome-free/js/all.js',
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/bootstrap/js/dist/util.js',
                    'node_modules/bootstrap/js/dist/dropdown.js',
                    'node_modules/bootstrap/js/dist/tab.js',
                    'node_modules/bootstrap/js/dist/modal.js',
                    'node_modules/moment/moment.js',
                    allJS
                ],
                dest: '_src/dist/js/production.js',

            }

        },

        browserSync: {
            dev: {

                bsFiles: {
                    src : [
                        'build/resources/css/*.css',
                        'build/*.html'
                    ]
                },

                options: {
                    watchTask: true,
                    server: 'build/',

                }
            },
            prod: {

                bsFiles: {
                    src : [
                        'web/resources/css/*.css',
                        'templates/**/*.twig',
                        'templates/**/*.html'
                    ]
                },

                options: {
                    watchTask: true,

                    /* REPLACE THIS URL */
                   proxy: "local.2rmcraft3.com"


                }
            }
        },


        sass: {


                options: {
                    implementation: sass,
                    sourceMap: true,
                    outputStyle: 'compressed',
                    },
                dist: {
                    files: {
                        'build/resources/css/production.css': '_src/resources/sass/base.scss',
                        'web/resources/css/production.css': '_src/resources/sass/base.scss',

                    }
                }
        },

        pug: {
            compile: {
                options: {pretty:true, client:false, compileDebug:false, basedir:'_src/pug/'},
                files: [
                    {
                        cwd: '_src/pug/',
                        src: ['*.pug'],
                        dest: 'build/',
                        expand: true,
                        ext: '.html'
                    }
                ]
            }
        },



        uglify: {
            prod: {
                src: '_src/dist/js/production.js',
                dest: 'web/resources/js/production.min.js'
            },
            dev: {
                src: '_src/dist/js/production.js',
                dest: 'build/resources/js/production.min.js'
            }
        },

        focus: {
            dev: {
              include: ['jsDev','cssDev','pug']
            },
            prod: {
              include: ['jsProd','cssProd']
            }
        },

        watch: {

            jsDev: {
                files: [
                    allJS
                ],
                tasks: ['concat', 'uglify:dev'],
                options: {
                    spawn: false,
                },
            },

            jsProd: {
                files: [
                    allJS
                ],
                tasks: ['concat', 'uglify:prod'],
                options: {
                    spawn: false,
                },
            },
            cssProd: {
                files: ['_src/resources/sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },

            cssDev: {
                files: ['_src/resources/sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },

            pug: {
                files: ['_src/pug/**/*.pug'],
                tasks: ['pug']
            }


        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-focus');


    grunt.registerTask('static', ['concat','sass','pug','browserSync:dev','focus:dev']);

    grunt.registerTask('dev', ['concat','sass','browserSync:prod','focus:prod']);

     grunt.registerTask('prod', ['concat','sass','uglify:prod']);

     grunt.registerTask('build-static', ['concat','sass','uglify:dev','pug']);




};


