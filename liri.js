require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require('moment');
var fs = require('fs');
var command = process.argv[2];
var query = process.argv[3]


//spotify-this-song

var spotifyThisSong = function(){

    var userSearch = query
    if (userSearch === undefined){
        userSearch = "The Sign Ace of Base"
    }

	spotify.search({ type: 'track', query: userSearch }, function(error, data) {
	    if(error) { 
	        console.log('Error occurred: ' + error);
	    } else { // if no error
	    	// For loop is for when a track has multiple artists
				for(var i = 0; i < data.tracks.items[0].artists.length; i++) {
					if(i === 0) {
						console.log("Artist(s):    " + data.tracks.items[0].artists[i].name);
					} else {
						console.log("              " + data.tracks.items[0].artists[i].name);
					}
				}
				console.log("Song:         " + data.tracks.items[0].name);
				console.log("Preview Link: " + data.tracks.items[0].preview_url);
				console.log("Album:        " + data.tracks.items[0].album.name);    
            }
        }
    )}
    
//movie-this
var movieThis = function(){

    // We then run the request with axios module on a URL with a JSON
    var movieName = query;

    if (movieName === undefined){
        movieName = "Mr. Nobody"
    };

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function(response) {
            // Then we print out the data
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
    }
    )}

//concert-this
var concertThis= function(){
    

    var artist = query;
    if (artist === undefined){
        artist = "Jonas Brothers"
    };
    
    // We then run the request with axios module on a URL 
    var queryUrl = "https://rest.bandsintown.com/artists/"+ artist +"/events?app_id=codingbootcamp";
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function(response) {
            console.log("Name of Venue: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city);
            var date = moment(response.data[0].venue.datetime).format("MM/DD/YYYY");
                console.log("Date:" + date)
        }
    
    
)}
    

// if/else statement to run the funtions above

if(command === "spotify-this-song") {
	spotifyThisSong(query);
} else if(command === "movie-this") {
    movieThis(query);
} else if(command === "concert-this") {
	concertThis(query);
} else if(command === "do-what-it-says") {
	fs.readFile("random.txt", "utf-8", function(err, data) {
		var command;
		var query;

		// If there is a comma, then we will split the string from command
		if(data.indexOf(",") !== -1) {
			var dataArr = data.split(",");
			command = dataArr[0];
			query = dataArr[1];
		} else {
			command = data;
		}

            // After reading the command from the file, decides which app function to run
            if(command === "spotify-this-song") {
                spotifyThisSong(query);
            } else if(command === "movie-this") {
                movieThis(query);
            } else if(command === "concert-this") {
                concertThis(query);
            } else { 
                console.log("Command not found please try again.")
            }
    })
}

//user does not put in command
else (console.log("Command not found please try again."));
    
