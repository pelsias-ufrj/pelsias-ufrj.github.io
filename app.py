from flask import Flask
from flask_socketio import SocketIO

server = Flask(
    __name__, 
    static_url_path='', 
    static_folder='client/static', 
    template_folder='client/templates'
)
