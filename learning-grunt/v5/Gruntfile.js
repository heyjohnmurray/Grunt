module.exports = function(grunt){

	//Grunt task configurations
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					banner: '/* Copiled CSS comment */',
					style: 'compressed'
				},

				//load all files that are in a particular folder
				files: [{
					expand: true,
					cwd: 'assets/sass/', 	//where you're looking
					src: ['*.scss'],		//file types to match
					dest: 'assets/css/', 	//where you're outputting
					ext: '.css'				//output file extension name
				}]
			}
		},

		watch: {
			css: {
				files: 'assets/sass/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},

			js: {
				files: 'assets/js/*.js',
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