from flask import Blueprint, render_template, request, jsonify, session, redirect
import json
from flask import jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
import os
import re
from datetime import date
import jinja2

api = Blueprint('api', __name__)
MONGO_URI = os.environ['PELS_MONGO_URL']
client = MongoClient(MONGO_URI)
db = client.pelsiasdb
posts = db.posts
users = db.users
sugestions = db.sugestions

template_dir = os.path.join(os.path.dirname(__file__), '../client/templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), autoescape=True)

  
@api.route('/api/join-us', methods=['POST'])
def home():
    dataDict = request.get_json(force=True)
    print(dataDict)
    try:
        sugestions.insert(dataDict['data'])
        resp = {'status':200}
    except Exception as e:
        resp = {'status': 400, 'err': e}
    
    return jsonify(resp)

def start_session(user):
    del user['_id']
    del user['password']
    session['logged_in'] = True
    session['user'] = user

    return jsonify({
        'user': user,
        'status': 200
    })

@api.route('/api/login', methods=['POST'])
def login():

    dataDict = request.get_json(force=True)
    data = dataDict['data']
    user = users.find_one({
        "username": data['username']
    })
    
    if user and data['password'] == user['password']:
        return start_session(user)

    return jsonify({ "error": "Invalid login credentials" }), 401
    
@api.route('/api/signout')
def signout():
    session.clear()
    return redirect('/')

@api.route('/api/blog')
def get_post_preview():
    # text = request.args.get('text')
    # rgx = re.compile('.*{}.*'.format(text), re.IGNORECASE)
    rgx = re.compile('.*', re.IGNORECASE)

    postList = posts.find({'title':rgx},{'title':1, 'url':1, 'views':1, 'date':1})
    
    queryRes = []
    for x in postList:
        queryRes.append({'id':str(x['_id']), 'title': x['title'], 'url': x['url'], 'views': x['views'], 'date': x['date'].date()})
    # print(queryRes)
    return jsonify(queryRes)

@api.route('/blog/posts/<post_id>')
def get_post(post_id):
    post = posts.find({'_id':ObjectId(post_id)}, {'title':1, 'content':1, 'views':1, 'date':1})

    queryRes = []
    for x in post:
        queryRes.append({'id':str(x['_id']), 'title': x['title'], 'content': x['content'], 'views': x['views'], 'date': x['date'].date()})

    # print(queryRes)

    template = jinja_env.get_template('blog-post.html')

    return template.render(title=queryRes[0]["title"], content=queryRes[0]["content"])

@api.route('/api/posttitles')
def get_titles():
    text = request.args.get('text')
    rgx = re.compile('.*{}.*'.format(text), re.IGNORECASE)

    postList = posts.find({'title':rgx},{'title':1})
    
    queryRes = []
    for x in postList:
        queryRes.append({'id':str(x['_id']), 'title': x['title']})
    print(queryRes)
    return jsonify(queryRes)
