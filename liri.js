// Pull in all of the required items for program to run
require("dotenv").config();
var keys= require("./keys");
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var fs= require("fs");
var request = require("request");

// Set variables needed
var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

// Pull in the command & parameters
var command = process.argv[2];
var search = "";
for ( i=3; i < process.argv.length; i++) {
    search += process.argv[i] + "+";
}

// Actions to take depending on the command & parameters given
if (command === "my-tweets") {
    showTweet();
} else if (command === "spotify-this-song") {
    showSongs ();
} else if (command === "movie-this") {
    showMovies ();
} else if ( command === "do-what-it-says") {
    doIt ();
} else if (conmmand === " ") {
    console.log("Not an approved command")
}

//  Twitter functions to run
function showTweet() {
    console.log("\nHere are your lastest 20 Tweets \n");
    var params = {screen_name: "APKQueen00", count:20};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
   for(i= 0; i < tweets.length; i++) {
    console.log(tweets[i].text + "\n");
  }}
});
};

//  Spotify functions to run
function showSongs() {
    if (!search) {
        search = "happy";}
    spotify
    .search({ type: 'track', query: search, limit:5 })
    .then(function(response) {
        var songStuff= response.tracks.items[0];
        console.log("\nHere is the song information you want\n");    
        console.log("Artist(s): " + songStuff.artists[0].name);
        console.log("Song Name: " + songStuff.name);
        console.log("Preview Link: " + songStuff.preview_url);
        console.log("Album Name: " + songStuff.album.name);

          })
          .catch(function(err) {
            console.log(err);
          });
        }

//  Movie functions to run
    function showMovies() {
    console.log("\nHere is the movie information you need");
    var queryUrl= "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";
    
    request(queryUrl, function(error, response, body) {
    var movieStuff= JSON.parse(body);
    console.log("\n Movie Title: " + movieStuff.Title);
    console.log("\n Year Released: " + movieStuff.Released);
    console.log("\n IMDB Rating: " + movieStuff.Ratings[0].Value);
    console.log("\n Rotten Tomatoes Rating: " + movieStuff.Ratings[1].Value);
    console.log("\n Country Produced: " + movieStuff.Country);
    console.log("\n Language: " + movieStuff.Language);
    console.log("\n Actors: " + movieStuff.Actors);
    console.log("\n Plot: " + movieStuff.Plot);   
});}

function doIt() {
    console.log("Here are your results \n");
    fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) throw err;
    console.log(data.toString());
    });
};