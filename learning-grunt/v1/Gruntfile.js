module.exports = function(grunt){
	
	//Project config
	grunt.initConfig({
		// Store your Package file so you can reference its specific data whenever necessary
		pkg: grunt.file.readJSON('package.json'),
		
		meta: {
			banner: '/* Compiled: <%= grunt.template.today() %> */'
		},
		
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				
			/*
				//file by file loading
				files: {
					//output destination: 'destination' : 'source'
					'css/styles.css' : 'sass/styles.scss'
				}
			*/
				
				//load all files in a folder
				files: [{
					expand: true,
					cwd: 'sass/',
					src: ['*scss'],
					dest: 'css/',
					ext: '.css'
				}]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass']);
}