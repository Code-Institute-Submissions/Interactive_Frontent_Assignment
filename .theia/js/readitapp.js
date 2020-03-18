/*
$(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();
        // prepare the request
        var request = api.musixmatch.com/ws/1.1/track.search({
            q_artist: "justin bieber",
            page_size: 3,
            apikey: "AIzaSyBgjbnfvnlZIUHYT1QV6KwqicZtY6lPm8w"
        });
        // execute the request
        request.execute(function (response) {
            var results = response.result;
            console.log(results);
        });
    });
});

function init() {
    gapi.client.setApiKey("AIzaSyBgjbnfvnlZIUHYT1QV6KwqicZtY6lPm8w");
    gapi.client.load("youtube", "v3", function () {
        // yt api is ready
    });
}

/*
http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc
d3bcfe7a78f2e28470389faa67a5631e
*/

var data;
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?apikey=d3bcfe7a78f2e28470389faa67a5631e&q_artist=justin&page_size=10");
xhr.send();

function gettracklist(tracklistoutput){
 tracklist = tracklistoutput;
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log (this.status);
        console.log (this.responseText);
        console.log (JSON.parse(this.responseText));
        gettracklist (JSON.parse(this.responseText));
    };
};
/*

var defaultClient = MusixmatchApi.ApiClient.instance;
var key = defaultClient.authentications['key'];
key.apiKey = "d3bcfe7a78f2e28470389faa67a5631e"; // {String}

var albumId= 14250417; // {String}
var opts = { 
    'format': "jsonp", // {String} output format: json, jsonp, xml.
    'callback': "callback" // {String} jsonp callback
};

var callback = function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data:' ,JSON.stringify(data,null,2));
    }
};
(new MusixmatchApi.AlbumApi()).albumGetGet(albumId, opts, (error, data, response) => {
    callback(error, data, response, "albumGetGet"); 
});
*/