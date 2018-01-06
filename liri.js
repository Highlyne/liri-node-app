
require("dotenv").config();
var keys= require("./keys");
var twitter = require('twitter');
var spotify = require('node-spotify-api');

var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

var command = process.argv[2];
var search = "";
for ( i=3; i < process.argv.length; i++) {
    search += process.argv[i] + "+";
}

if (command === "my-tweets") {
    showTweet();
} else if (command === "spotify-this-song") {
    showSongs ();
} else if (command === "movie-this") {
    showSongs ();
} else if ( command === "do-what-it-says") {
    doIt ();
} else if (conmmand === " ") {
    console.log("Not an approved command")
}

function showTweet() {
    console.log("Here are your lastest 20 Tweets \n");
    var params = {screen_name: "APKQueen00", count:20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
   for(i= 0; i < tweets.length; i++) {
    console.log(tweets[i].text + "\n");
  }}
});
};

function showSongs() {
    spotify.search({ type: 'track', query: search }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
          }
        console.log(data.tracks);
        });
    };

function showMovies() {
    console.log("Here is the movie information you need \n");
};

function doIt() {
    console.log("Here are your results \n")
};