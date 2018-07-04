const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// ***********************************************************
// Configure body parser 
// ***********************************************************
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ***********************************************************
// Static assets exist under client
// ***********************************************************
app.use(express.static("client/public"));

// ***********************************************************
// Adding Routes,  need to work on this
// ***********************************************************
app.use(routes);
 
// ***********************************************************
// mongoose configuration:
// *********************************************************** 
  mongoose.Promise = global.Promise;
  // Connect to mongo
  var PORT = process.env.PORT || 3000;

  //mongoose.connect("mongodb://localhost/theOnionPopulator");
  //mongodb://heroku_dd0hl05s:<dbpassword>@ds227821.mlab.com:27821/heroku_dd0hl05s
  //mongoose.connect("mongodb://localhost/nytMongoDB");
  const mongoURL = "mongodb://heroku_rdsn9lrh:8jupf52ejk0o85dvho6s5i6ggo@ds229458.mlab.com:29458/heroku_rdsn9lrh"
  mongoose.connect(mongoURL, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', mongoURL);
    }
   });


// ***********************************************************
// Start the API server
// ***********************************************************
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});