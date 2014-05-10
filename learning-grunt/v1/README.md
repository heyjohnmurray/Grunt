Grunt runs on top on Node
installed as Node module


global install: npm install -g grunt-cli

every project folder needs package.json file as follows:

{
	"_comment" : "must use double quotes and correct grunt version # (grunt --version). had to add comment this way b/c regular js comments cause errors.",
	"name" : "grunt-project",
	"version" : "0.1.0",
	"devDependencies" : {
		"grunt" : "~0.4.4"
	}
}

* if you don't want to create the file you can do 'npm init' within your local project folder.

to install grunt per project: cd to project folder then 'npm install grunt --save-dev'

grunt tasks created in Gruntfile.js file:

every grunt.js file has same boilerplate layout

NOTE: if there's going to be an RV grunt boilerplate file there'll need to be a discussion on what plugins should be installed (a grunt wishlist).

you can use the meta method to add comments to your Gruntfile.js. you can also use <%= grunt.template.today() %> to display the compile date in the comment

RESOURCES:
	* http://shoogledesigns.com/blog/blog/2014/01/14/grunt-js-boilerplate/
	* https://www.youtube.com/watch?v=q3Sqljpr-Vc [GRUNT - The Basics]
	* https://github.com/gruntjs/grunt-contrib-sass
	* http://chrisawren.com/posts/Advanced-Grunt-tooling