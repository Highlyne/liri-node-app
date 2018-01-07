// Pull in all of the required items for program to run
require("dotenv").config();
var keys= require("./keys");
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var fs= require("fs");

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
    console.log("Here are your lastest 20 Tweets \n");
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
    spotify.search({ type: 'track', query: search }, function(err, data) {
        if (err) throw err;
        console.log("Here is the track information you need\n");
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data);
        });
    };

//  Movie functions to run
    function showMovies() {
    console.log("Here is the movie information you need \n");
};

function doIt() {
    console.log("Here are your results \n");
    fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) throw err;
    console.log(data.toString());
    });
};