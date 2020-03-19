function gettracklist(tracklist){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?apikey=d3bcfe7a78f2e28470389faa67a5631e&q_artist=justin&page_size=10");
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            tracklist(JSON.parse(this.responseText));
        };
    };
};
/*
PARAMETERS
track_id    The Musixmatch track id
commontrack_id  The Musixmatch commontrack id
*/

function getlyrics(tracklist){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?apikey=d3bcfe7a78f2e28470389faa67a5631e&q_artist=justin&page_size=10");
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            tracklist(JSON.parse(this.responseText));
        };
    };
};

function outputtracklist(tracklist) {
    console.log(tracklist.message.body.track_list)
    console.dir(tracklist)
};

function outputtracklisttohtml(tracklist) {
    tracklist = tracklist.message.body.track_list
    var select = document.getElementById("tracklistoutput");
    console.log(tracklist.length);
    for(var i = 0; i < tracklist.length; i++) {
        var opt = tracklist[i];
        var el = document.createElement("option");
        el.text = opt.track.track_name;
        el.value = opt.track.track_name;
        el.innerHTML = opt.track.track_name;
        select.appendChild(el);
        console.log(el);
    };
};

function gettrackid(tracklist){
    tracklist = tracklist.message.body.track_list
    var selectedIndex = document.getElementById("tracklistoutput").options.selectedIndex;
    console.log("selectedIndex");
    console.log(selectedIndex);
    var trackid = tracklist[selectedIndex].track.track_id
    console.log("trackid");
    console.log(trackid); 	
}

$("#submitsearch").click(function(){ 
    //gettracklist(outputtracklist);
    gettracklist(outputtracklisttohtml);
});

$("#getlyrics").click(function(){ 
    console.log("tesymos");
    gettracklist(gettrackid);
});