from flask import Blueprint, render_template, request, jsonify, session, redirect
import json
from flask import jsonify
from pymongo import MongoClient
import os
import re

api = Blueprint('api', __name__)
MONGO_URI = os.environ['PELS_MONGO_URL']
client = MongoClient(MONGO_URI)
db = client.pelsiasdb
posts = db.posts
users = db.users
sugestions = db.sugestions

  
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