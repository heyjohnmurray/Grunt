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

Now that we have Grunt installed globally we can install Grunt on a per project basis. In terminal, ```cd``` to the project folder that will be using grunt and install Grunt locally.

There are two easy ways to do this.

##### 1. Create a package.json file

The package.json file is the spark that brings Grunt to life in our projects. Within this file is basic information about your project and what files Grunt needs to have in order to run properly.

We can create a basic package.json file with the following information:

```
{
	"name": "Project-Name", // no spaces allowed in the name
	"version": "0.1.0", // give your project a version number
	"description": "Basic project description here.",
	"author": "Your name goes here",
 	"devDependencies": {
		// leave this blank for now 
		// it gets populated automatically later
	}
}
```

**Note:** To avoid errors when installing grunt or grunt plugins later on, make sure you use double quotes (" ") in this file.

##### 2. Use 'npm init'

From your project folder, you can run the ```npm init``` command, which will prompt you with a utility wizard that will assemble a package.json file based on the values you pass it. 

While this method is easy and fooolproof, it generates a package.json file that is unnecessarily verbose. Odds are you won't need to provide an "entry point", "test command", or "git repository" while working with Grunt at RV.

  
#### Whatever you do ...

Whichever method you choose, the objective is the same. You need to generate a package.json somehow. It's recommended that you try to try each method to see which you prefer adding to your workflow.

#### Almost there

We're close to having Grunt installed locally. Now that we have our package.json file prepped we just need to run the install command.

Inside your local folder, run ```npm install grunt --save-dev```

##### Breaking It Down
Let's quickly talk about what's going on here. ```npm install grunt```, when run in a project folder will install a local version of Grunt, obviously. However, the interesting part here is the ```--save-dev``` portion of the command. By adding ```--save-dev```, package.json is automatically given Grunt's name and version number. Now you don't have to wonder whether you're running the right version number in the package.json file because ```--save-dev``` takes away the guess work. Also, ```--save-dev``` works the same way when we install plugins as well. This means keeping package.json up-to-date is stress free.

#### Success!

Grunt should now be installed and our package.json file should like something this:

```
{
	"name": "Project-Name",
	"version": "0.1.0",
	"description": "Basic project description here.",
	"author": "Your name goes here",
 	"devDependencies": {
		**"grunt": "^0.4.4"** //this information was saved by --save-dev
	}
}
```

