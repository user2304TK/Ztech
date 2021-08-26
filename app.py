from flask import Flask, render_template

app = Flask(__name__)

# Routes:
@app.route('/')
def home():
    return render_template('index.html')



@app.route('/about')
def about():
    return 'About page'




@app.route('/contact')
def contact():
    return 'Contact page'





if __name__ == '__main__':
    app.run()