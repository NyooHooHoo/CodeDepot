from flask import Flask, redirect, url_for, render_template, request, session
from datetime import timedelta
import sqlalchemy

app = Flask(__name__)
app.secret_key = "supersecretkey"
app.permanent_session_lifetime = timedelta(days=1)

@app.route("/")
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


@app.route("/login/", methods=["POST", "GET"])
def login():
	if request.method == "POST":
		session.permanent = True
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
