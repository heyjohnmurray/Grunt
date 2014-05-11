module.exports = function(grunt){

	//Grunt task configurations
	grunt.initConfig({

		//Store your Package file so you can reference its specific data whenever necessary :: best practice
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			files: 'assets/js/project.js',
			options: {
		    	//these settings are just for now and up for debate
			    curly:   true,
                eqeqeq:  true,
                immed:   true,
                latedef: true,
                newcap:  true,
                noarg:   true,
                sub:     true,
                boss:    true,
                eqnull:  true,
                browser: true,
                
                globals: {
                	$: true,
		        	jQuery: true,
		        	console: true,
					module: true,
		        	document: true
		        }
			}
		},

		sass: {
			dist: {
				options: {
					banner: '/* Compiled at <%= grunt.template.today() %> */',	//see http://gruntjs.com/api/grunt.template for options
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

		uglify: {
	    	options: {
	        	banner: '/* Compressed: <%= grunt.template.today() %> */\n',
	        	mangle: true,
	      	},
	      	
	      	dist: {
	        	files: {
	        		//For RV we'll have to decide what files need to be compressed
	          		'assets/js/project.min.js': ['assets/js/project.js']
	        	}
	      	}
	    },

		watch: {
			css: {
				files: 'assets/sass/**/*.scss',	//if any sass file in any subfolder changes
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},

			js: {
				files: 'assets/js/*.js',		//watching every js file now. probably should decide on specific files
				tasks: ['jshint', 'uglify'],	//hint and uglify on save
				options: {
					livereload: true
				}
			},

			html: {
				//files: 'landing_pages/**/*.		//if any files changes
				//files: 'landing_pages/**/*.html',	//if html files in landing_pages change
				files: '**/**/*.html',				//if any html file in the folder changes
	            options: {
	                livereload: true
	            }
			}
		}
	});

	//Load configured tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Default tasks that are run when you type "grunt" in terminal
	grunt.registerTask('default', ['sass','jshint','uglify']);
}