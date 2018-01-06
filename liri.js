// import { twitter } from "./keys";
// import { config } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/dotenv";

// require("dotenv").config();
// var keys= require("./keys");

// var spotify = new spotify(keys.spotify);
// var client = new twitter(keys.twitter);

var command = process.argv[2];

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
    console.log("here is where the results will show");
};

function showSongs() {
    console.log("Here is the song information you request \n");
};

function showMovies() {
    console.log("Here is the movie information you need \n");
};

function doIt() {
    console.log("Here are your results \n")
};