
let sendMail = document.getElementById('sendMail').onclick = function () {
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let assunto = document.getElementById('assunto').value;
  let mensagem = document.getElementById('mensagem').value;

  if (email == '' || mensagem == '') {
    alert('Email e mensagem devem ser preenchidos');
  } else {
    window.open(
      `mailto:vnunes13@gmail.com?subject=${assunto}&body=Olá Vinícius, eu sou o ${nome}!  ${mensagem}`
    )
  }
}

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerWidth;
window.onscroll = function () {
let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.width = progressHeight + '%';
  if (progressHeight >= 60) {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    card1.classList.add('animated', 'fadeInLeft');
    card2.classList.add('animated', 'fadeInRight');
  }
  if(progressHeight >= 95){
    const contato = document.getElementById('contatoTitulo');
    contato.classList.add('animated', 'zoomInDown');
  }
}

let facebook = document.querySelector('.facebook');
facebook.onmousemove = function(){
  facebook.classList.add('animated', 'tada');
};
let instagram = document.querySelector('.instagram');
instagram.onmousemove = function(){
  instagram.classList.add('animated', 'tada');
};
let github = document.querySelector('.github');
github.onmousemove = function(){
  github.classList.add('animated', 'tada');
};
