from flask import Blueprint, render_template, request, jsonify
# from app import mongo
from bson.json_util import dumps
from pymongo import MongoClient

routes = Blueprint('routes', __name__)

client = MongoClient('mongodb+srv://pelsias:ieee2019@site.kpj4s.gcp.mongodb.net/pelsiasdb?retryWrites=true&w=majority')
db = client.pelsiasdb
posts = db.pelsiascollection
sugestions = db.sugestions


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

@routes.route('/test')
def test():
    # online_users = mongo.db.users.find({"online": True})
    # db.users.insert({"_teste": 'ola teste'})
    collection.insert({'_teste' : 'ola teste'})
    return 'HELLO WORLD'