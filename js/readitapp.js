$( document ).ready(function() {

    function gettracklist(callback) {
    var searchcriteria = document.getElementById("search").value;
    console.log("searchcriteria");
    console.log(searchcriteria);
    var searchURL = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?apikey=d3bcfe7a78f2e28470389faa67a5631e&page_size=500&q_artist=" + searchcriteria;
    console.log("searchURL");
    console.log(searchURL);  
    var xhr = new XMLHttpRequest();
    console.log(xhr.status);
    console.log(xhr.statusText);
    xhr.onreadystatechange = function() {     
        console.log("in the function");
        console.log(xhr.status);
        console.log(xhr.statusText);
        if (this.readyState == 4 && this.status == 200 && this.responseText !== null) {
            console.log(this.responseText);
            let x = (JSON.parse(this.responseText));
            callback(x);
            }
        };
    //xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?apikey=d3bcfe7a78f2e28470389faa67a5631e&q_artist=justin&page_size=10",true);
    xhr.open("GET", searchURL, true);
    
    xhr.send();
    };

$("#submitsearch").click(function outputtracklisttohtml() {
    console.log("testyonw");
    //event.preventDefault();
            gettracklist(function(data) {
            
            console.log("received data");
            console.log(data);
            console.log("testy");
          tracklist = data.message.body.track_list;
    console.log("tracklist");
    console.log(tracklist);
    var select = document.getElementById("tracklistoutput");
    select.innerHTML = "";
    console.log(tracklist.length);
    for(var i = 0; i < tracklist.length; i++) {
        var opt = tracklist[i];
        console.log("opt")
        console.log(opt);
        if (opt.track.has_lyrics == 1) {
            var el = document.createElement("option");
            el.text = opt.track.track_name;
            el.value = opt.track.track_name;
            el.innerHTML = opt.track.track_name;
            console.log("el intter html");
            console.log(el.innerHTML);
            select.appendChild(el);
            console.log("el");
            console.log(el);
        };
    };
    });
});

/*function outputtracklist(tracklist) {
    console.log(tracklist.message.body.track_list)
    console.dir(tracklist)
};*/

function getlyrics(trackid){
    console.log("trackid in getlyrics function");
    console.log(trackid);
    var xhr = new XMLHttpRequest();
    var URL = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=d3bcfe7a78f2e28470389faa67a5631e&track_id=" + trackid;
    console.log("URL");
    console.log(URL);    
    xhr.open("GET", URL);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            lyrics = (JSON.parse(this.responseText));  
            console.log(lyrics);
            lyrics = lyrics.message.body.lyrics.lyrics_body;
            console.log(lyrics);
            if(lyrics !== "") {
                document.getElementById("displaylyrics").innerHTML = lyrics;
            }
            else {
            document.getElementById("displaylyrics").innerHTML = "Unfortunately no lyrics were found for this track!";
            }
        };
    };
};

function gettrackid(tracklist){
    //tracklist.preventDefault();
    tracklist = tracklist.message.body.track_list
    var selectedIndex = document.getElementById("tracklistoutput").options.selectedIndex;
    var trackid = tracklist[selectedIndex].track.track_id;
    document.getElementById("track_name").innerHTML = tracklist[selectedIndex].track.track_name;
    document.getElementById("album_name").innerHTML = tracklist[selectedIndex].track.album_name;
    document.getElementById("artist_name").innerHTML = tracklist[selectedIndex].track.artist_name;
    console.log("trackid");
    console.log(trackid);
    getlyrics(trackid);
};
$("#getlyrics").click(function(){
    (gettracklist(gettrackid));
});
//$("#getlyrics").click(gettracklist(gettrackid));
});

