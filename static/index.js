let data = 
 {
  "1": {
      "title": "Java Beginners Tutorial",
      "length": "2:31:47",
      "author": "Programming With Mosh",
      "description": "Java tutorial for beginners - Learn Java, the langauge behind millions of apps and websites",
      "url": "https://www.youtube.com/watch?v=eIrMbAQSU34",
      "thumbnail": "thumbnail1.jpg",
      "likes": 0,
      "dislikes": 0,
    },
  "2": {
    "title": "Crash Course on Java",
    "length": "13:59",
    "author": "Alex Lee",
    "description": "Learn Java in 14 Minutes (seriously)",
    "url": "https://www.youtube.com/watch?v=RRubcjpTkks",
    "thumbnail": "leave this empty",
    "likes": 0,
    "dislikes": 0,
  },
  "3": {
    "title": "Comprehensive Java Guide",
    "length": "69 videos",
    "author": "Telusko",
    "description": "Java tutorial for beginners and absolute beginners.",
    "url": "https://www.youtube.com/playlist?list=PLsyeobzWxl7pFZoGT1NbZJpywedeyzyaf",
    "thumbnail": "leave this empty",
    "likes": 0,
    "dislikes": 0,
  },
  "4": {
    "title": "C++ Crash Course",
    "length": "26:29",
    "author": "Simplilearn",
    "description": "C++ Basics For Beginners | Learn C++ Programming | C++ Tutorial For Beginners | Simplilearn",
    "url": "https://www.youtube.com/watch?v=McojvctVsUs",
    "thumbnail": "leave this empty",
    "likes": 0,
    "dislikes": 0,
  },
  "5": {
    "title": "Beginners' Tutorial for C++",
    "length": "2:22:51",
    "author": "Derek Banas",
    "description": "A 1,000 page book on C++ condensed down to a 2 hour video.",
    "url": "https://www.youtube.com/watch?v=McojvctVsUs",
    "thumbnail": "leave this empty",
    "likes": 0,
    "dislikes": 0,
  },
  "6": {
    "title": "Comprehensive C++ Guide",
    "length": "10:28:14",
    "author": "Caleb Curry",
    "description": "C++ Programming All-in-One Tutorial Series (10 HOURS!)",
    "url": "https://www.youtube.com/watch?v=_bYFu9mBnr4",
    "thumbnail": "leave this empty",
    "likes": 0,
    "dislikes": 0,
  }
}

var courses = [];

function search() {
	let input = document.getElementById('search').value;
  	let courselist = document.getElementById("recommended-list");
	input = input.toLowerCase();

  	courselist.innerHTML = "";

	for (course of courses) {
		if (course.title.toLowerCase().includes(input) ||
        course.author.toLowerCase().includes(input) ||
        course.description.toLowerCase().includes(input)) {
      courselist.innerHTML += course.generateHTML();
		}
	}

   //document.getElementById('search').value = "";
}


class Course {
	constructor(title, length, author, description, url, thumbnail, likes, dislikes) {
    this.title = title;
    this.length = length;
    this.author = author;
    this.description = description;
    this.url = url;
    this.thumbnail = thumbnail;
    this.likes = likes;
    this.dislikes = dislikes;
    this.favourite = false;
    this.score = (likes - dislikes).toString();
	}

  generateHTML() {
    return `
    <div class="course-item">
      <img class="course-image" src="assets/thumbnails/${this.thumbnail}" alt="Thumbnail">
      <div class="course-information">
        <t class="course-title">${this.title}</t>
        
        <br>
        Length: ${this.length}<br>
        By:
        <t class="author">${this.author}</t><br><br>
        <t>${this.description}</t>
        <br><br><br><br>
      </div>
      <div class="course-footer">
        <img class="rating" src="static/assets/images/like_default.png" onclick="like('${this.url}')" onmouseover="this.src='static/assets/images/like_filled.png'" onmouseout="this.src='static/assets/images/like_default.png'"/>
        <t id="rating1" class="rating-value">${this.score}</t>
        <img class="rating" src="static/assets/images/dislike_default.png" onclick="dislike('${this.url}')" onmouseover="this.src='static/assets/images/dislike_filled.png'" onmouseout="this.src='static/assets/images/dislike_default.png'"/>

        <p></p>

        <a class="learn-now" href="${this.url}" target="_blank">LEARN</a>
        <p></p>
        <img class="favourite" src="static/assets/images/star_default.png" onclick="togglefavourite()" onmouseover="this.src='static/assets/images/star_fill.png'" onmouseout="this.src='static/assets/images/star_default.png'" />
      
      </div>
    </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#search").addEventListener("keyup", event => {
    search();
    //event.preventDefault();
    /*if (event.key !== "Enter") {
      search();
    } else {
      search();
      event.preventDefault();
    }*/
  });

  let courselist = document.getElementById("recommended-list");
  let html = document.getElementById("html");

  for (key in data) {
    let title = data[key].title;
    let length = data[key].length;
    let author = data[key].author;
    let description = data[key].description;
    let url = data[key].url;
    let thumbnail = data[key].thumbnail;
    let likes = data[key].likes;
    let dislikes = data[key].dislikes;

    let course = new Course(title, length, author, description, url, thumbnail, likes, dislikes);
    courses.push(course);
  }
  courses.sort(() => Math.random() - 0.5);

  for (course of courses) {
    courselist.innerHTML += course.generateHTML();
  }

});

function togglefavourite(url){
	console.log(url);
	for (course of courses) {
		if (course.url === url){
			course.favourite = true;
		}
	}
	update();
}

function like(url){
	for (course of courses) {
		if (course.url === url){
			course.likes += 1;
			course.score += 1;
		}
	}
	update();
}

function dislike(url){
	for (course of courses) {
		if (course.url === url){
			course.dislikes += 1;
			course.score -= 1;
		}
	}
	update();
}

function update(){
	let courselist = document.getElementById("recommended-list");
  courselist.innerHTML = "";
	for (course of courses) {
   		courselist.innerHTML += course.generateHTML();
	}
}
