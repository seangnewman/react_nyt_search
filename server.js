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
app.use(express.static("client/build"));

// ***********************************************************
// Adding Routes,  need to work on this
// ***********************************************************
app.use(routes);
 
// ***********************************************************
// mongoose configuration:
// *********************************************************** 
  mongoose.Promise = global.Promise;
  // Connect to mongo
  const PORT = process.env.PORT || 3001;
  mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreactsaved",
  {
    useMongoClient: true
  }
);

// ***********************************************************
// Start the API server
// ***********************************************************
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});