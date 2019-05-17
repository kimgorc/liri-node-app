# liri-node-app
Spotify Liri App

About the App:

LIRI stants for Language Interpretaiton and Recongintion Interface. It is a command line application that takes in specific parameters and gives data back to the user. This app has three commands that it will process. The Commands are:

1. spotify-this-song
2. movie-this
3. concert-this
4. do-what-it-says

How to run LIRI:

1. Open your terminal
2. Navigate to the liri.js file
3. Run your commands

Examples: 

1. spotify-this-song

    node liri.js spotify-this-song

<img width="907" alt="Screen Shot 2019-05-17 at 10 59 14 AM" src="https://user-images.githubusercontent.com/46636249/57947108-d5db7b00-7892-11e9-85e7-be1dfad085b8.png">   

Note: spotify-this-song will default to "The Sign" by Ace of Base if user does not input a song

    node liri.js spotify-this-song 'baby justin bieber'

<img width="724" alt="Screen Shot 2019-05-17 at 10 54 09 AM" src="https://user-images.githubusercontent.com/46636249/57946818-2900fe00-7892-11e9-9c14-d44799b6c05f.png">

2. movie-this
    node liri.js movie-this
<img width="1081" alt="Screen Shot 2019-05-17 at 11 05 24 AM" src="https://user-images.githubusercontent.com/46636249/57947411-b4c75a00-7893-11e9-8687-03be1562d104.png">

Note: movie-this will defaulty to "Mr. Nobody" if user does not input a movie

    node liri.js movie-this babe

<img width="914" alt="Screen Shot 2019-05-17 at 11 01 53 AM" src="https://user-images.githubusercontent.com/46636249/57947234-336fc780-7893-11e9-8e45-88db70acc2bd.png">

3. concert-this

    node liri.js concert-this 
<img width="881" alt="Screen Shot 2019-05-17 at 2 58 15 PM" src="https://user-images.githubusercontent.com/46636249/57958393-8b6af600-78b4-11e9-86a1-65b50a9ee30d.png">

Note: concert-this will defaulty to "Jonas Brothers" if user does not input an artist

    node liri.js concert-this daya

<img width="881" alt="Screen Shot 2019-05-17 at 2 58 15 PM" src="https://user-images.githubusercontent.com/46636249/57958281-3af39880-78b4-11e9-818b-f131931358e4.png">

4. do-what-it-says

    node liri.js do-what-it-says 
    
<img width="881" alt="Screen Shot 2019-05-17 at 2 58 15 PM" src="https://user-images.githubusercontent.com/46636249/57959097-07fed400-78b7-11e9-9e27-1d280bebbe21.png">

Technologies Used:
- JavaScript
-  Nodejs
-  Node packages:
    1. Node-Spoitfy-API
    2. Dotenv
    3. Moment
    4. Axios
        - OMBD API
        - Bandsintown API