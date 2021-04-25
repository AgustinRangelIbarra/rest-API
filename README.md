# REST API 
##### My first API ever created, pretty basic.

### Follow the steps above if you wanna try.
___

#### The dependencies on package.json:

>body-parser:
DO NOT INSTALL
(It is already built in EXPRESS no need to install).

>cors: 
So we can get data across websites.
Once installed al packages and the server is running, go to <https://codepen.io/pen/> and try on the JS tab the following:
	~~~
	fetch('http://localhost:3000/posts')
		.then( result => {
			return result.json();
		})
		.then( data => {
			console.log(data);
		});
	~~~

>dotenv: 
Will set up our `.env` file, where YOU will need to put this:

DB_CONNECTION=mongodb+srv://`<MONGODB-ATLAS_DB_USERNAME>`:`<MONGO-DB_ATLAS_PASSWORD>`@clusterna.65rpo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

or whatever link throws you once you created your DB on MongoDB Atlas.
[Mongo DB Atlas](https://www.mongodb.com/cloud/atlas)
Connect > Connect Your Application
After that, copy the link and paste it on `.env` on the root of the directory.

>express: 
Node.js framework

>mongoose: 
*Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.* -npm.

>nodemon: 
Automatically restarts the node application when file changes in the directory are detected.


#### After all that, now you can try execute commands on Postman.