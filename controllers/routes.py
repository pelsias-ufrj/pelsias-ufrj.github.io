from flask import Blueprint, render_template, request, jsonify, session, redirect
from bson.json_util import dumps
from pymongo import MongoClient
from functools import wraps
import os
routes = Blueprint('routes', __name__)

MONGO_URI = os.environ['PELS_MONGO_URL']
client = MongoClient(MONGO_URI)
db = client.pelsiasdb
posts = db.pelsiascollection
sugestions = db.sugestions

# Decorators
def login_required(f):
  @wraps(f)
  def wrap(*args, **kwargs):
    if 'logged_in' in session:
      return f(*args, **kwargs)
    else:
      return redirect('/')
  
  return wrap

@routes.route('/')
def home():
    return render_template('index.html')

@routes.route('/blog')
def blog():
    return render_template('blog.html')

@routes.route('/contato')
def contato():
    return render_template('contato.html')   
    
@routes.route('/diretoria')
def diretoria():
    return render_template('diretoria.html')

@routes.route('/join-us')
def join_us():
    return render_template('join-us.html')

@routes.route('/marketing')
def marketing():
    return render_template('marketing.html')

@routes.route('/membros')
def membros():
    return render_template('membros.html')

@routes.route('/projetos')
def projetos():
    return render_template('projetos.html')

@routes.route('/atividades_academicas')
def attividades_academicas():
    return render_template('atividades_academicas.html')

@routes.route('/login')
def login():
    return render_template('login.html')

@routes.route('/addposts')
@login_required
def add_posts():
    return render_template('addposts.html')

@routes.route('/test')
def test():
    collection.insert({'_teste' : 'ola teste'})
    return 'HELLO WORLD'