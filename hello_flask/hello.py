from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def hello_world():
    return 'Hello World'
# Import Flask to allow us to create our app
# Create a new instance of the Flask class called "app"
# The "@" decorator associates this route with the function immediately following
# Return the string 'Hello World!' as a response
# Ensure this file is being run directly and not from a different module    

@app.route('/success')
def success():
    return "success"

@app.route('/hello/<name>')
def hello(name):
    return "hello, " + name

@app.route('/users/<username>/<id>')
def show_user_profile(username, id):
    return "username: " + username + " id " + id

@app.route('/lists')
def render_lists():
    
    student_info = [
       {'name' : 'Michael', 'age' : 35},
       {'name' : 'John', 'age' : 30 },
       {'name' : 'Mark', 'age' : 25},
       {'name' : 'KB', 'age' : 27}
    ]
    return render_template("index.html", random_numbers = [3,1,5], students = student_info)


if __name__=="__main__":
    app.run(debug=True)

    # Run the app in debug mode.