The Music Hub
The Music Hub is a website anyone can go to, to find the lyrics of a song or watch music videos. It is a fun website bringing together the ability to consume your favourite music in multiple formats in one place. The fun look and feel of the site and the simple navigation option make this a very attractive and easy to use website. It can be used by individuals or groups, for casual use or in a party setting.

UX
This website is designed to be extremely user friendly to maximise ease of use, presenting information using a simple and easy to understand set of web pages that are easy to navigate. The information provided is clear and relevant. A simple colours theme is used across the entire site to illustrate the information being provided.
The website has been developed in a manner ensuring it can be easily read on multiple device types including computer screens, tablets and mobile phones. This ensures the website audience can access the information presented in many ways, for example, while at a computer in an office or on a mobile phone using wifi.

User Stories
As a user who is curious about a lyric in a song, I want to be able to easily find out the lyric in question.
As a user who wants to watch music videos, I want to go to a site where I can search specifically for music videos, get a list of videos in response, and play whichever music video I choose.

Features
This Music Hub website consists of two distinct features, each captured in a section/page of the website:
Feature 1:
The Get Lyrics section/page of the website. This section requires users to enter a search criteria and completes a search of the musixmatch api data based on the criteria provided. The search results are presented as a list of music tracks. The user can then select a track and retrieve the lyrics using the “Get Lyrics” button on the page. Track details and lyrics are then presented to the user.
Feature 2:
The Watch Videos section/page of the website. This section requires users to enter a search criteria and completes a search of the google youtube api specifically for music videos. The top five search results are presented on screen for the user who can then play them as desired.

Future Feature ideas:
Another feature that would benefit the site is the addition of a Karaoke feature. Karafun (https://www.karafun.co.uk/) provide a Karaoki api that can be used to add a Karaoke feature to the website.
	
Technologies Used
Bootstrap: The Bootstrap framework was used to provide the majority of the layout and formatting requirements for this project.
Font Awesome: Font Awesome was used to facilitate the display of two icons on the page footer.
CSS: A local style.css file was used for specific formatting required outside the scope of Bootstrap.
JQuery: JQuery was used to facilitate API integration and presentation of API data.
JavaScript: JavaScript was used for the purposes of running functions that retrieve API data and present it using DOM elements on the html webpage.

Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.
Website Navigation has been extensively tested. Tests completed are as follows:
1. Click on the Home button on the navigation bar and confirm it takes you to the Home screen
2. Click on the Get Lyrics button on the navigation bar and confirm it takes you to the Home screen
3. Click on the Watch Videos button on the navigation bar and confirm it takes you to the Home screen
4. Click on the Home button on the footer and confirm it takes you to the Home screen
5. Click on the Contact button on the footer and confirm it takes you to the Contact screen

Navigation testing was completed on a selection of devices with differing screen sizes to confirm the website is responsive across a range of devices.

 - Website functionality has been tested across a range of devices. The details of tests completed are as follows:
 - Click on the Home button on the navigation bar and confirm it takes you to the Home screen

Test Case 1:
1.	Click on the Get Lyrics button on the navigation bar and confirm it takes you to the Get Lyrics screen
2.	Enter on some text in the search field and click on the Search button, providing a valid search criteria such as “John” or “Jennifer Lopez”. Verify that a list of music tracks are returned.
3.	Use the dropdown containing the results to select a track and click the “Get Lyrics” button. Verify that lyrics are returned, or if lyrics are not available, that a message that lyrics are not available is displayed.

Test Case 2:

1.	Click on the Watch Videos button on the navigation bar and confirm it takes you to the Watch Videos screen
2.	Enter on some text in the search field and click on the Search button, providing a valid search criteria such as “John” or “Jennifer Lopez”. Verify that a list of music videos are returned. Verify that five music videos are returned and can be played as required

Deployment
The project code was developed in Gitpod and deployed to Github using the Git command line.
The website is hosted on Github Pages. It was a requirement to make the project public in order to host it on Github Pages.

The following commands are used to deploy updates to the website:
1. git add (names of the files updated since the last deployment)
2. git commit -m (message with details of updates made since the last deployment)
3. git push


Credits/Referenced solutions:
1.	The star background used in the webpages body -https://codepen.io/WebSonick/pen/vjmgu
2.	Multicolour text - https://www.w3docs.com/snippets/css/how-to-create-a-multicolor-text-in-html-and-css.html