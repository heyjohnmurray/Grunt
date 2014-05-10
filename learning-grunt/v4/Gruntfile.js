module.exports = function(grunt){

	//Grunt task configurations
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},

				//load all files that are in a particular folder
				files: [{
					expand: true,
					cwd: 'sass/',
					src: ['*scss'],
					dest: 'css/',
					ext: '.css'
				}]
			}
		},

		watch: {
			css: {
				files: 'sass/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},

			js: {
				files: 'js/*.js',
				options: {
					livereload: true
				}
			}
		}
	});

	//Load configured tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Default tasks that are run when you type "grunt" in terminal
	grunt.registerTask('default', ['sass', 'watch']);
}