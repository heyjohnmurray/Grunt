# RV Grunt Spin Up

This is what the RV spin up folder looks like with Grunt.js. We're conidering moving to Grunt to keep up with the way the front end dev community is moving. More and more big companies are using some sort of Javascript-based task runner to streamline their code and save development time. It makes sense for Red Ventures' front end devs to have at least a working knowledge of this technology in order to stay on the cutting edge and to utilize within their workflow whenever possible.

### Before We Start

Grunt runs on the Node.js platform. So before we get install Grunt, we need to make sure we have Node installed. It should be as simple as going to the [node.js site](http://www.nodejs.org/download/) and download the Mac Installer.

Remember that sometimes when you install new software onto a Mac you need to add 'sudo' to some of your terminal installation commands. If you have any issues, feel free to grab one of the code leads and they should be able to walk you through it. Joseph Lombardo in IT is also a good person to talk to if you have issues with installing Node or if you have permissions issue of any kind.

## Installation

Now that we have Node installed, we'll be able to do everything else through the command line using Node's package manager (NPM). We'll download Grunt and any plugin we use in Grunt through the NPM. So let's get started.

#### Go Global

Before we start using Grunt we need to install it globally on our computer.

In terminal we run the following command:
```npm install -g grunt-cli```

It doesn't matter what folder we're in when we run this command. Grunt knows where to go.

#### Now Go Local

Now that we have Grunt installed globally we can install Grunt on a per project basis. In terminal, 'cd' to the project folder that will be using grunt and install Grunt locally.

There are two easy ways to do this.

##### 1. Create a package.json file

The package.json file is the spark that brings Grunt to life in our projects. Within this file is basic information about your project and what files Grunt needs to have in order to run properly.

We can create a basic package.json file with the following information:

```
{
	"name": "Project name goes here",
	"version": "0.1.0", // give your project a version number
	"description": "Basic project description here.",
	"author": "John Murray",
 	"devDependencies": {
	   	"grunt": "^0.4.4" 

	   	// names and version numbers for 
	   	// other plugins will do after this. 
	   	// we'll see how this happens later on.
	}
}
```