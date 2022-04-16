let data = 
 {
  "1": {
      "title": "Java Beginners Tutorial",
      "length": "2:31:47",
      "author": "Programming With Mosh",
      "description": "Java tutorial for beginners - Learn Java, the langauge behind millions of apps and websites",
      "url": "https://www.youtube.com/watch?v=eIrMbAQSU34",
      "thumbnail": "leave this empty",
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

let filteredSearch = {}

function search() {

	let input = document.getElementById('search').value;
	input = input.toLowerCase();

	for (key in data) {
		let obj = data[key];
		if (obj.title.toLowerCase().includes(input) || obj.author.toLowerCase().includes(input)) {
			filteredSearch[key] = obj;
			console.log(obj.title);
		}
	}

	for (key in filteredSearch){
		console.log(filteredSearch[key]);
	}
}


class Course {
	constructor(title, length, author, description, url, thumbnail, likes, dislikes) {
    
	}
}

