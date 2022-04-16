from flask import Flask, redirect, url_for, render_template
from pathlib import Path

app = Flask(__name__)

@app.route("/")
@app.route("/index/")
def home():
	return render_template("index.html")


@app.route("/courses/")
def courses():
	return render_template("courses.html")


@app.route("/favourites/")
def favourites():
	return render_template("favourites.html")


@app.route("/about/")
def about():
	return render_template("about.html")


if __name__ == "__main__":
	app.run(debug=True)
