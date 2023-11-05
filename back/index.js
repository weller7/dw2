const express = require('express')
const app = express()
const connectDB = require("./config/database");
const mongoose = require('mongoose')
// const passport = require("passport");
// const session = require("express-session");
// const MongoStore = require("connect-mongo")(session);

const logger = require("morgan")
const locationsRoutes = require('./routes/location.js')
const cors = require("cors")
require("dotenv").config({ path: "./config/.env" })



// Passport config
// require("./config/passport")(passport);

//connect To Database
connectDB()


//middleware for Cors
app.use(cors())


//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));


// Setup Sessions - stored in MongoDB
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// );

// Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome')
});

app.use('/location', locationsRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});