from flask import Blueprint, render_template, request, jsonify
import json
from flask import jsonify
from pymongo import MongoClient

api = Blueprint('api', __name__)

client = MongoClient('mongodb+srv://pelsias:ieee2019@site.kpj4s.gcp.mongodb.net/pelsiasdb?retryWrites=true&w=majority')
db = client.pelsiasdb
posts = db.pelsiascollection
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
    