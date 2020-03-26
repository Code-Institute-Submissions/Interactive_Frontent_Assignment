$(document).ready(function () {

    //The gettracklist callback function contains the get request to the musixmatch song lyrics api website
    //It contains a callback to facilitate passing the output of the web request to the outputtracklisttohtml function
    function gettracklist(callback) {
        "use strict";

        //Get the searchcriteria from the search input field in the readit html page
        var searchcriteria = document.getElementById("search").value;
        var searchURL = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?apikey=d3bcfe7a78f2e28470389faa67a5631e&page_size=500&q_artist=" + searchcriteria;  
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {     
            if (this.readyState === 4 && this.status === 200 && this.responseText !== null) {

                //JSON parse the text response from the musixmatch api
                var x = (JSON.parse(this.responseText));
                callback(x);
                }
            };
        xhr.open("GET", searchURL, true); 
        xhr.send();
    }

    //The following submitsearch event is activated when a user clicks on the Search button to search for a song/track on the readit html page
    //The outputtracklist function run and it calls the gettracklist callback function to get the songs/tracks and return them to the readit html page

    $("#submitsearch").click(function outputtracklisttohtml() {

        //call the gettracklist function and pass the embedded function to the gettracklist function
        gettracklist(function(data) {

            //The tracklist is the following subset of the api request response JSON
            var tracklist = data.message.body.track_list;

            //The select is used to facilitate the tracks being returned as a dropdown list in the readit html page
            var select = document.getElementById("tracklistoutput");
            select.innerHTML = "";

            //Some songs to not have lyrics. The majority of those can be removed from the data returned in the api request
            //by checking the has_lyrics = 1. The other tracks are then returned as results.
            for(var i = 0; i < tracklist.length; i++) {
                var opt = tracklist[i];
                if (opt.track.has_lyrics == 1) {

                    //An element is created to contain the track details for each track returned to the readit html page
                    var el = document.createElement("option");

                    //A number of track fields are selected and contatenated to return to the dropdown list of tracks
                    //The track id is included because we need the track id when a track is selected by the user for the get lyrics function
                    //The getlyrics function reads the trackid from the html element that contains it and uses it to search for the track
                    var trname = opt.track.track_name;
                    var trid = opt.track.track_id;
                    var artist = opt.track.artist_name;
                    var album = opt.track.album_name;
                    var trackinfo = trname + "     >" + artist + "    >" + album + "    >" + trid;
                    el.text = trackinfo;
                    el.value = trackinfo;
                    el.innerHTML = trackinfo;

                    //Once the data has been assembled it is returned to the htmp page by the new element being appended to the select element
                    select.appendChild(el);
                }
            }
        });
    });

    //The getlyrics function retrieves the track lyrics from the musixmatch api and displays it on the readit html page
    function getlyrics(){

        //The track information is retrieved from the selected item in the select element dropdown list in the readit html page
        var newtrackid = document.getElementById("tracklistoutput").value;

        //The track details are extracked from the track information and the track id is used in an api request to the musixmatch site
        var track_name = newtrackid.split('>')[0];
        var artist_name = newtrackid.split('>')[1];
        var album_name = newtrackid.split('>')[2];
        var track_id = newtrackid.split('>')[3];
        document.getElementById("track_name").innerHTML = track_name;
        document.getElementById("album_name").innerHTML = album_name;
        document.getElementById("artist_name").innerHTML = artist_name;
        var xhr = new XMLHttpRequest();
        var URL = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=d3bcfe7a78f2e28470389faa67a5631e&track_id=" + track_id;
        xhr.open("GET", URL);
        xhr.send();
        xhr.onreadystatechange = function() {

            //Once the lyrics are retrieved they are displayed on the readit html page
            //If lyrics are not available a message to this effect is displayed instead
            if (this.readyState == 4 && this.status == 200) {
                var lyrics = (JSON.parse(this.responseText));  
                lyrics = lyrics.message.body.lyrics.lyrics_body;
                if(lyrics !== "") {
                    document.getElementById("displaylyrics").innerHTML = lyrics;
                }
                else {
                document.getElementById("displaylyrics").innerHTML = "Unfortunately lyrics are not available for this track!";
                }
            }
        };
    }

    //The following event is triggered when a user clicks on the Get Lyrics button on the html page
    //The getlyrics function is called to get the lyrics and return them to the readit html page

    $("#getlyrics").click(getlyrics);
});
