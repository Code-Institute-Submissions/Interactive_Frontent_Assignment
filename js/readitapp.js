$(document).ready(function () {

    function gettracklist(callback) {
        "use strict";
        var searchcriteria = document.getElementById("search").value;
        var searchURL = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?apikey=d3bcfe7a78f2e28470389faa67a5631e&page_size=500&q_artist=" + searchcriteria;  
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {     
            if (this.readyState === 4 && this.status === 200 && this.responseText !== null) {
                var x = (JSON.parse(this.responseText));
                callback(x);
                }
            };
        xhr.open("GET", searchURL, true); 
        xhr.send();
    }

$("#submitsearch").click(function outputtracklisttohtml() {
    gettracklist(function(data) {
        var tracklist = data.message.body.track_list;
        var select = document.getElementById("tracklistoutput");
        select.innerHTML = "";
        for(var i = 0; i < tracklist.length; i++) {
            var opt = tracklist[i];
            if (opt.track.has_lyrics == 1) {
                var el = document.createElement("option");
                var trname = opt.track.track_name;
                var trid = opt.track.track_id;
                var artist = opt.track.artist_name;
                var album = opt.track.album_name;
                var trackinfo = trname + "     >" + artist + "    >" + album + "    >" + trid;
                el.text = trackinfo;
                el.value = trackinfo;
                el.innerHTML = trackinfo;
                select.appendChild(el);
            }
        }
    });
});

function getlyrics(){
    var newtrackid = document.getElementById("tracklistoutput").value;
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

$("#getlyrics").click(getlyrics);
});
