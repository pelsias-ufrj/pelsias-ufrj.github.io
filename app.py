from flask import Flask
from flask_pymongo import PyMongo
import os

key = os.environ['PELS-SECRET-KEY']

server = Flask(
    __name__, 
    static_url_path='', 
    static_folder='client/static', 
    template_folder='client/templates'
)

server.secret_key = key

from controllers.routes import routes
server.register_blueprint(routes)

from controllers.api import api
server.register_blueprint(api)

if __name__ == '__main__':
    server.run(debug=True)