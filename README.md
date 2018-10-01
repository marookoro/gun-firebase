CREATING A FIREBASE PROJECT

Go to the firebase page and click sign into console 
A google account is needed to sign into firebase. Create a project by giving it a name and click create project

INSTALL NPM AND NODE JS
 
The link below will give insturctions on installing npm and node.js
https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

 Install it in the directory you wish to work in

INSTALL GUN

Where you have installed node install gun with the command npm install gun

INSTALL FIREBASE

In your working directory install firebase with the command “npm install firebase”

INSTALL GUN-FLINT

In your working directory install gun-flint with the command “npm install gun-flint”

INSTALL ADAPTER IN NODE MODULES

From the folders submitted copy the adapter file gun-firebase into node_modules

CREATE SERVER.JS FILE

In your working directory, create a document called server.js and enter the code shown below. In the firebase project overview page you can get your own apikey, database url etc... for your own firebase project.


var Gun = require('gun');
var firebase = require('gun-firebase');

var gun = new Gun({
localStorage: false,
 gunfirebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
    }

});

const bob = gun.get('bob').put({ name: 'Bob' })
const dave = gun.get('dave').put({ name: 'Dave' })


RUN IT IN CONSOLE

Run the code in the console with the command “node server.js”. Check the firebase console to see if it worked.






