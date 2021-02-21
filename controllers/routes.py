from flask import Blueprint, render_template, request, jsonify

routes = Blueprint('routes', __name__)


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
    return 'HELLO WORLD'