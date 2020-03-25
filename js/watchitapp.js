$( document ).ready(function() {
    $("#search").click(function(e) {
    e.preventDefault();      
    var searchcriteria = document.getElementById("searchcriteria").value;
    console.log("searchcriteria");
    console.log(searchcriteria);
    var searchURL = "https://www.googleapis.com/youtube/v3/search?maxResults=5&part=snippet&publishedAfter=2017-01-01T00%3A00%3A00Z&type=video&videoCategoryId=10&key=AIzaSyBgjbnfvnlZIUHYT1QV6KwqicZtY6lPm8w&q=" + searchcriteria;
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
            let x = (JSON.parse(this.responseText));
            console.log(x);
           for (var i = 0; i < x.items.length; i++) {
                var item = x.items[i];
                console.log(item.id.videoId)
                videotitle = item.snippet.title;
                console.log(videotitle)
                videoid = item.id.videoId;
                console.log(videoid)
                var resultsoutput = document.getElementById("results");
                var titleelement = document.createElement('titleelement');
                var br1 = document.createElement('br');
                var br2 = document.createElement('br');
                var br3 = document.createElement('br');
                var br4 = document.createElement('br');
                titleelement.innerHTML = videotitle;
                titleelement.text = videotitle;
                titleelement.value = videotitle;
                resultsoutput.appendChild(titleelement);
                resultsoutput.appendChild(br1);
                resultsoutput.appendChild(br2);
                var iframeelement = document.createElement('iframe');
                iframeelement.setAttribute("width","100%");
                iframeelement.setAttribute("height","100%");
                iframeelement.setAttribute("position","absolute");
                var iframesrc = "//www.youtube.com/embed/" + videoid;
                iframeelement.src = iframesrc;
                resultsoutput.appendChild(iframeelement);
                resultsoutput.appendChild(br3);
                resultsoutput.appendChild(br4);
            }
        }
    };
    xhr.open("GET", searchURL, true);
    xhr.send();
    });
});