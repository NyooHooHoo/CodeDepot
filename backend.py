from flask import Flask, redirect, url_for, render_template, request, session
from pathlib import Path

app = Flask(__name__)
app.secret_key = "supersecretkey"

@app.route("/")
@app.route("/index/")
def home():
	return render_template("index.html")


@app.route("/suggest/")
def suggest():
	return render_template("suggest.html")


@app.route("/favourites/")
def favourites():
	return render_template("favourites.html")


@app.route("/about/")
def about():
	return render_template("about.html")


@app.route("/login/", methods=["POST", "GET"])
def login():
	if request.method == "POST":
		username = request.form['usrnm']
		password = request.form['pswrd']
		session['user'] = [username, password]
		return redirect("/")
	else:
		if "user" in session:
			return redirect("/")
		return render_template("login.html")

@app.route('/logout')
def logout():
	session.pop("user", None)
	return redirect("/login")


if __name__ == "__main__":
	app.run(debug=True)
