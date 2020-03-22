$( document ).ready(function() {
function gettracklist(callback) {
    var searchcriteria = document.getElementById("search").value;
    console.log("searchcriteria");
    console.log(searchcriteria);
    var searchURL = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?apikey=d3bcfe7a78f2e28470389faa67a5631e&page_size=500&q_artist=" + searchcriteria;
    console.log("searchURL");
    console.log(searchURL);  
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?apikey=d3bcfe7a78f2e28470389faa67a5631e&q_artist=justin&page_size=10");
    //xhr.open("GET", searchURL);
    xhr.send();
 // do {
   xhr.onreadystatechange = function() {     
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(this.responseText));      
            }
        }
    };

function outputtracklisttohtml(data) {
console.log("testy");
        console.log(data);
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
    };

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
    var lyricsdisplay = document.getElementById("displaylyrics");
    lyricsdisplay.innerHTML = "";        
    xhr.open("GET", URL);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            lyrics = (JSON.parse(this.responseText));  
            console.log(lyrics);
            lyrics = lyrics.message.body.lyrics.lyrics_body;
            console.log(lyrics);
            lyricsdisplay.innerHTML = lyrics;
        };
    };
};

function gettrackid(tracklist){
    tracklist = tracklist.message.body.track_list
    var selectedIndex = document.getElementById("tracklistoutput").options.selectedIndex;
    var trackid = tracklist[selectedIndex].track.track_id;
    console.log("trackid");
    console.log(trackid);
    getlyrics(trackid);
};


function tracksearch(){
    gettracklist(outputtracklisttohtml);
};


$("#submitsearch").click(tracksearch);

});
//$("#getlyrics").click(gettracklist(gettrackid));
