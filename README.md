# liri-node-app
LIRI is a Language Interpretation and Recognition Interface.  LIRI is a command line node app that takes in parameters and gives you back data.  LIRI offers preforms four actions:

* Display of your lastest 20 tweets
* Provides song information from Spotify
* Gives movie details from OMDB
* Bonus feature that does whatever you require 

## Getting Started

Before starting, ensure your have API keys for Twitter, Spotify and OMDB.

Get your Twitter API keys by visiting: <https://apps.twitter.com/app/new>
Fill out the form with app information. --Don't fill out the Callback URL input.-- Then submit the form.
On the next screen, click the Keys and Access Tokens tab to get your consume key and secret.

You can follow these steps in order to generate a **client id** and **client secret** for Spotify:

   * Step One: Visit <https://developer.spotify.com/my-applications/#!/>
   
   * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. 

   * Step Four: On the next screen, scroll down to where you see your client id and client secret.

Finally, grab your OMDB API Key from <http://www.omdbapi.com/apikey.aspx>. After completing a short form, your free key is emailed to you.

### It is important to add all of your API keys to a seperate .env file.  THis will keep your personal key information confidential.

### Prerequisites

The following Node packages are a crucial foundation to the app:

   * [Twitter](https://www.npmjs.com/package/twitter)
   
   * [Spotify](https://www.npmjs.com/package/node-spotify-api)
   
   * [Request](https://www.npmjs.com/package/request)

     * You'll use Request to grab data from the [OMDB API](http://www.omdbapi.com).

   * [DotEnv](https://www.npmjs.com/package/dotenv)

### Overview

LIRI takes in the following commands:

* `my-tweets`
    -This will show your last 20 tweets and when they were created at in your terminal/bash window.

![Alt Text](https://github.com/Highlyne/liri-node-app/blob/master/images/tweet.gif){:height="700px" width="400px"}

* `spotify-this-song`
   -This will show the following information about the song in your terminal/bash window
     
     * Artist(s)
     
     * The song's name
     
     * A preview link of the song from Spotify
     
     * The album that the song is from

![Alt Text](https://github.com/Highlyne/liri-node-app/blob/master/images/spot.gif){:height="700px" width="400px"}

* `movie-this`
  -This will output the following information to your terminal/bash window:

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie

<img src="https://github.com/Highlyne/liri-node-app/blob/master/images/movie.gif" width="500" height="500">