window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let title = document.getElementById('title');
    let home = document.getElementById('home');
    let equipe = document.getElementById('equipe');
    let coordenacoes = document.getElementById('coordenacoes');
    let contato = document.getElementById('contato');
    let blog = document.getElementById('blog');
    let facebook = document.getElementById('facebook-icon');
    let insta = document.getElementById('insta-icon');
    let linkedin = document.getElementById('linkedin-icon');
    let youtube = document.getElementById('youtube-icon');
    let windowPosition = window.scrollY > 0;
    
    if(!document.querySelector('#join-us-page'))
    {
        if (windowPosition && screen.width > 980)
        {
            nav.classList.add('scrolling-active');
            title.classList.remove('text-white');
            home.classList.remove('text-white');
            equipe.classList.remove('text-white');
            equipe.style.opacity = "0.5";
            coordenacoes.classList.remove('text-white');
            coordenacoes.style.opacity = "0.5";
            contato.classList.remove('text-white');
            blog.classList.remove('text-white');
            facebook.classList.remove('text-white');
            insta.classList.remove('text-white');
            linkedin.classList.remove('text-white');
            youtube.classList.remove('text-white');
        }
        else
        {
            nav.classList.remove('scrolling-active');
            title.classList.add('text-white');
            home.classList.add('text-white');
            equipe.classList.add('text-white');
            equipe.style.opacity = "1";
            coordenacoes.classList.add('text-white');
            coordenacoes.style.opacity = "1";
            contato.classList.add('text-white');
            blog.classList.add('text-white');
            facebook.classList.add('text-white');
            insta.classList.add('text-white');
            linkedin.classList.add('text-white');
            youtube.classList.add('text-white');
        }
    }
})

$(document).ready(function() {
    let nav = document.querySelector('nav');
    let title = document.getElementById('title');
    let home = document.getElementById('home');
    let equipe = document.getElementById('equipe');
    let coordenacoes = document.getElementById('coordenacoes');
    let contato = document.getElementById('contato');
    let blog = document.getElementById('blog');
    let facebook = document.getElementById('facebook-icon');
    let insta = document.getElementById('insta-icon');
    let linkedin = document.getElementById('linkedin-icon');
    let youtube = document.getElementById('youtube-icon');

    if(document.querySelector('#join-us-page'))
    {
        nav.classList.add('scrolling-active');
        title.classList.remove('text-white');
        home.classList.remove('text-white');
        equipe.classList.remove('text-white');
        equipe.style.opacity = "0.5";
        coordenacoes.classList.remove('text-white');
        coordenacoes.style.opacity = "0.5";
        contato.classList.remove('text-white');
        blog.classList.remove('text-white');
        facebook.classList.remove('text-white');
        insta.classList.remove('text-white');
        linkedin.classList.remove('text-white');
        youtube.classList.remove('text-white');
    }
});


function HoverOpacity (dropdown) {
    if(window.scrollY > 0 && screen.width > 980)
        dropdown.style.opacity = "1";
}

function UnhoverOpacity (dropdown) {
    if(window.scrollY > 0 && screen.width > 980)
        dropdown.style.opacity = "0.5";
}
