from flask import Flask, redirect, url_for, render_template, request, session
from datetime import timedelta
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = "supersecretkey"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.permanent_session_lifetime = timedelta(days=1)

db = SQLAlchemy(app)

class users(db.Model):
	_id = db.Column("id", db.Integer, primary_key=True)
	username = db.Column(db.String(100))
	password = db.Column(db.String(100))
	liked = db.Column(db.JSON)
	disliked = db.Column(db.JSON)
	favourited = db.Column(db.JSON)

	def __init__(self, username, password):
		self.username = username
		self.password = password



@app.route("/")
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


@app.route("/signup/", methods=["POST", "GET"])
def signup():
	if request.method == "POST":
		session.permanent = True
		username = request.form['usrname']
		password = request.form['psword']

		found_user = users.query.filter_by(username=username).first()
		if found_user:
			# username already taken!
			pass
		else:
			usr = users(username, password)
			db.session.add(usr)
			db.session.commit()

		session['user'] = [username, password]
		return redirect("/")
	else:
		return render_template("signup.html")


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
	db.create_all()
	app.run(debug=True)
