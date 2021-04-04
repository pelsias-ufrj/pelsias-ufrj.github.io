from flask import Flask
from flask_pymongo import PyMongo

server = Flask(
    __name__, 
    static_url_path='', 
    static_folder='client/static', 
    template_folder='client/templates'
)
server.secret_key = b'\xbe\x03\xd4\xf3\xdf\xdd\x02\xc7\xa1\x91\xb0\\\x0b\x83\x90i'

from controllers.routes import routes
server.register_blueprint(routes)

from controllers.api import api
server.register_blueprint(api)

if __name__ == '__main__':
    server.run(debug=True)