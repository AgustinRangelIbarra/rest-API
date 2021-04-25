const express = require('express');
const serverApp = express();

const mongoose = require('mongoose')
require('dotenv/config');

//Middleware
const cors = require('cors');
serverApp.use(cors());

serverApp.use(express.urlencoded({ extended: true }));
serverApp.use(express.json());


// Import Routes
const postsRoute = require('./routes/posts');
const userRoute = require("./routes/user");

serverApp.use('/posts', postsRoute);
serverApp.use('/user', userRoute);


// Routes
serverApp.get("/", (request, response) => {
	response.send("We are on Home");
});


// Middlewares





//Connect to DB 
mongoose.connect(
	// Reemplazar después de ://<usuario>:<contrasena>
	process.env.DB_CONNECTION,
	{ useUnifiedTopology: true },
	() => console.log("Conectado a la BD")
);


// How do we start listening
serverApp.listen(3000);
