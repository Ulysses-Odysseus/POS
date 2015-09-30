/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
        pkg: grunt.file.readJSON('package.json'),

        project: {
            js: 'js',
            css: 'css',
            img: 'images',
        },

        sass: {

            update: {
                options: {
                    style: 'expanded',
                    sourcemap: 'auto',
                    lineNumbers: true
                },
                files: {
                    '<%= project.css %>/style.css': 'sass/style.scss'
                }
            }
        },

        watch: {

            options: {
                dateFormat: function(time) {
                    grunt.log.writeln('The watch finished in ' + time + 'ms at ' + (new Date()).toString());
                    grunt.log.writeln('Well done! Waiting for more changes..');
                },
            },

            css: {
	            files: ['sass/**/*.scss'],
                tasks: ['sass'],
                //options: {
				//       livereload: true,
				// },
            },
        },
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};