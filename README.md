# CodeDepot
LyonHacks II Submission - A site to help coders find free courses

Code Depot is the quickest and easiest way to find free online courses for any of your programming endeavours. Simply choose from our collection of handpicked videos and begin your coding journey!

## How to run 

1. Use pip to install the dependencies
2. Run the __init__.py file.
3. Make your way to http://127.0.0.1:5000/
4. Enjoy!

## Inspiration 💡

As avid programmers, we are always on the lookout for quality courses to hone our craft, ideally without having to pay. Recently, with Youtube removing their dislike function by hiding the dislike count from users, it's been much more difficult to identify the best tutorials available on the largest source for free online courses. We wanted to create a service where coding enthusiasts just like us can access a collection of handpicked courses for any topic in programming on a site that makes their learning experience as smooth and convenient as possible.

## What it does 💻

Code Depot is a website where users can find a plethora of online courses to support their learning in coding. On the home page users are automatically presented with our full selection of courses to browse through and a search bar, where they can look for a specific topic from our database of courses. Each course on the site is presented with it's thumbnail, creator, length, and description. At the bottom left of each course is also a like/dislike button with a net score in between, much like the voting system on Reddit, for users to easily compare others' opinions on the content. On the bottom right is a "Learn" button that directs the user to the course video and a star that can be clicked to save the course to the user's "Favourites" page, that can be accessed in the navigation bar at the top of the screen. All users must sign in to the website to use the like/dislike and favourites features. Finally, on another page, users can suggest a course to be added to Code Depot by entering all the relevant information and sending it to the site for review before it is added to the general database. 

## How we built it 🛠️

We developed Code Depot's backend with the Flask framework and SQL, and the frontend with HTML, CSS & JavaScript. We stored the video data on an array in JavaScript and we wrote a class for a course to be generated on the HTML page, in a div with a grid display. We also created a search bar that updates every time the user types in it, by adding a listener that runs every keyup event. We used a Bootstrap template to build the navigation bar that stays at the top of the screen with buttons for each of the sites pages and for the login and sign-up. For the liking and favouriting systems data for the courses and their respective likes and favourites was saved in the backend in a SQL file for each user that signed up on the site. To display like, dislike and favourite information on the screen an ajax call was sent between the JavaScript and Flask backend to send a string with each user's course data. For the favourites page, the same concept was used to loop through all the courses and display only those that were favourites in the specific user's database. 

## Challenges we ran into 🤔

Implementing Flask as the backend was a really big challenge we faced in the development of Code Depot. Since this was also the first time any of us have used flask, changing the code to Flask caused a lot of challenges and errors we had to handle. Images and custom fonts didn't load properly on Flask and URLs and links didn't load properly either. We also had a hard time fixing the favouriting, liking and disliking system. Since we had to make the backend connect the activity history to the user's account
These problems challenged us a lot but we were able to solve these problems with our team effort.

## Accomplishments that we're proud of 🥳

We were eventually able to complete a site with a fully working backend with the Flask framework to support all of the features we wanted to implement. This was a significant milestone for us on our first large development project. We were also able to design a fluid and professional frontend for our site. 

## What we learned 📖

This project was the first big web development project for most of us in the team making it an important learning experience, particularly with the backend using the Flask framework. Our team is very proud of what we have learned and accomplished through Code Depot in such a short time frame!! 

## What's next for Code Depot 🛣️

Our next step for Code Depot would be to connect it to the Youtube API, which would allow us to display video data automatically and allow for a larger set of videos. A filter system for the users to find videos of specific length, or likes could also be implemented. 
