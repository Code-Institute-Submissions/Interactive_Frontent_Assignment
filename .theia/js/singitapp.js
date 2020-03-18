$(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();
        // prepare the request
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z",
            videoCategoryId: 10
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
*/