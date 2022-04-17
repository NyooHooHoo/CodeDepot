from flask import Flask, redirect, url_for, render_template, request, session
from datetime import timedelta
from flask_sqlalchemy import SQLAlchemy
import json

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
	courses = db.Column(db.JSON)

	def __init__(self, username, password):
		self.username = username
		self.password = password



@app.route("/")
def home():
	if "user" in session:
		return render_template("index.html", logged_in=True, name=session['user'][0])
	return render_template("index.html", logged_in=False, name="")


@app.route('/getscoresdata')
def get_scores_data():
	scores = {}
	for user in db.session.query(users.courses):
		if user[0] is not None:
			for key, value in user[0].items():
				try:
					if value['url'] in scores:
						scores[value["url"]] += value["score"]
					else:
						scores[value["url"]] = value["score"]
				except:
					pass

	return json.dumps(scores)


@app.route('/getusersdata')
def get_users_data():
	_users = {}
	for user in db.session.query(users.courses):
		print(user[0])
		if user[0] is not None:
			_users[user[0]["0"]] = user[0]

	#print(_users)
	return json.dumps(_users)


@app.route("/suggest/")
def suggest():
	if "user" in session:
		return render_template("suggest.html", logged_in=True, name=session['user'][0])
	return render_template("suggest.html", logged_in=False, name="")


@app.route("/favourites/")
def favourites():
	if "user" in session:
		return render_template("favourites.html", logged_in=True, name=session['user'][0])
	return render_template("favourites.html", logged_in=False, name="")


@app.route("/about/")
def about():
	if "user" in session:
		return render_template("about.html", logged_in=True, name=session['user'][0])
	return render_template("about.html", logged_in=False, name="")

@app.route("/signup/", methods=["POST", "GET"])
def signup():
	if request.method == "POST":
		session.permanent = True
		username = request.form['usrname']
		password = request.form['psword']

		found_user = users.query.filter_by(username=username).first()
		if found_user:
			return render_template("signup.html", userfound=True)
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

		found_user = users.query.filter_by(username=username).first()
		if found_user and found_user.password == password:
			session['user'] = [username, password]
			return redirect("/")
		else:
			return render_template("login.html", usernotfound=True)
	else:
		if "user" in session:
			return redirect("/")
		return render_template("login.html", usernotfound=False)


@app.route('/logout')
def logout():
	session.pop("user", None)
	return redirect("/login")


@app.route('/postmethod', methods=['POST'])
def get_post_javascript_data():
    data = json.loads(request.form['data'])
    found_user = users.query.filter_by(username=data["0"]).first()
    
    found_user.courses = data
    db.session.commit()

    return data


if __name__ == "__main__":
	db.create_all()
	app.run(debug=True)

