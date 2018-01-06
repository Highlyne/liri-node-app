import { twitter } from "./keys";

require("dotenv").config();
var keys= require("./keys");

var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

// var command = process.argv[2];

function showTweet() {
    console.log("Here are your lastest 20 Tweets"/n);
    console.log("here is where the results will show");

};

function showSongs() {
    console.log("Here is the song information you request"/n);
};

function showMovies() {
    console.log("Here is the movie information you need"/n);
};

function doIt() {
    console.log("Here are your results"/n)

};