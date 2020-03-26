$( document ).ready(function() {

    //The following event is triggered when a user clicks on the search button on the watchit html page
    //The function completes an api request to the youtube website and retrieves music videos that match the search criteria
    $("#search").click(function(e) {
        e.preventDefault();      

        //The searchcriteria for the search is retrieved from the search input field on the watchit html page
        var searchcriteria = document.getElementById("searchcriteria").value;
        var searchURL = "https://www.googleapis.com/youtube/v3/search?maxResults=5&part=snippet&publishedAfter=2017-01-01T00%3A00%3A00Z&type=video&videoCategoryId=10&key=AIzaSyBgjbnfvnlZIUHYT1QV6KwqicZtY6lPm8w&q=" + searchcriteria;  
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {     
        if (this.readyState == 4 && this.status == 200 && this.responseText !== null) {
           var x = (JSON.parse(this.responseText));
           for (var i = 0; i < x.items.length; i++) {

                //The video title and video id are extracted from the api response data
                var item = x.items[i];
                var videotitle = item.snippet.title;
                var videoid = item.id.videoId;

                //TWo new elements are created for each music video returned, to contain the video title and iframe output
                var titleelement = document.createElement('titleelement');
                var iframeelement = document.createElement('iframe');

                //The element to contain the results output is identified here
                var resultsoutput = document.getElementById("results");

                //Line breaks are created for insertion between the results returned
                var br1 = document.createElement('br');
                var br2 = document.createElement('br');
                var br3 = document.createElement('br');
                var br4 = document.createElement('br');

                //The element properties are set and the element is appended to the results element on the watchit html page
                titleelement.innerHTML = videotitle;
                titleelement.text = videotitle;
                titleelement.value = videotitle;
                resultsoutput.appendChild(titleelement);
                resultsoutput.appendChild(br1);
                resultsoutput.appendChild(br2);

                //Specific iframe attributes are required to facilitate the responsiveness of the element in the html page
                iframeelement.setAttribute("width","100%");
                iframeelement.setAttribute("height","100%");
                iframeelement.setAttribute("position","absolute");

                //The iframe source is configured to include the youtube path and the videoid returned in the api response
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