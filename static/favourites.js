document.addEventListener("DOMContentLoaded", () => {

  let favouritelist = document.getElementById("favourites-list");

  favouriteCourse.sort(() => Math.random() - 0.5);

  for (course of favouriteCourse) {
    favouritelist.innerHTML += course.generateHTML();
    console.log(course);
  }

});