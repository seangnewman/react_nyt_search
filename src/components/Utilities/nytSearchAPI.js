// Node Dependencies
var axios = require('axios');
var env = require('dotenv');

// Query URL  -- 
const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=';

//Register for key
const queryKey = '';
const queryString = `${queryURL} + ${queryKey}`;

queryURL += `&q= ${$("#search-term").val().trim()}`;
queryURL += `&begin_date= ${$("#start-year").val().trim()}0101`;
queryURL += `&end_date= ${$("#end-year").val().trim()}0101`;








// API Post Request Function
var apiSave = function (articleObj) {

  // Get API Post URL (this allows it to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/saved';

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject) {

    // Re-format the article Object to match the Mongo Model (ie we need to take off the the id)
    var params = new URLSearchParams();
    params.append("title", articleObj.title);
    params.append("date", articleObj.date);
    params.append("url", articleObj.url);
    axios.post(apiURL, params).then(function (response) {

      // Error handling / fullfil promise if successful query
      if (response) {
        fulfill(response);
      }
      else {
        reject("");
      }

    })

  });

}





// API Post Request Function
var apiGet = function () {

  // Get API Post URL (this allows it to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/saved';

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject) {

    // Re-format the article Object to match the Mongo Model (ie we need to take off the the id)
    axios.get(apiURL).then(function (response) {

      // Error handling / fullfil promise if successful query
      if (response) {
        fulfill(response);
      }
      else {
        reject("");
      }

    });

  });

}





// API Post Request Function
var apiDelete = function (deleteArticleId) {

  // Get API Post URL (this allows it to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/delete/' + deleteArticleId;

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject) {

    // Send the MongoDB Id for deletion
    axios.post(apiURL).then(function (response) {

      // Error handling / fullfil promise if successful query
      if (response) {
        fulfill(response);
      }
      else {
        reject("");
      }

    });

  });

}





// Export all helper functions
module.exports = {
  articleQuery,
  apiSave,
  apiGet,
  apiDelete
}