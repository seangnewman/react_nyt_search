// Node Dependencies
var axios = require('axios');
var env = require('dotenv');

const savedApiURL = window.location.origin + '/api/saved';


// Query URL  -- 
const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=';

//Register for key
const queryKey = 'c425afce9ede4333a99d522150b3a29d';
const queryString = `${queryURL} + ${queryKey}`;

queryURL += `&q= ${$("#search-term").val().trim()}`;
queryURL += `&begin_date= ${$("#start-year").val().trim()}0101`;
queryURL += `&end_date= ${$("#end-year").val().trim()}1231`;

// POST 
apiSave =  (articleObj) => {

  // Create a JavaScript *Promise*
  return new Promise((fulfill, reject)  => {
    var params = new URLSearchParams();
    params.append("title", articleObj.title);
    params.append("date", articleObj.date);
    params.append("url", articleObj.url);
    axios.post(savedApiURL, params).then(function (response) {
    // Error handling / fullfil promise if successful query
      response ? fulfill(response): reject("");
    })
  });

}

// POST Function
apiGet =  () => 
  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject) {
    axios.get(savedApiURL).then(function (response) {
    response ? fullfil(response): reject("");
    });

  });







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