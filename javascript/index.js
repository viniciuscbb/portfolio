
var sendMail = document.getElementById('sendMail').onclick = function () {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var assunto = document.getElementById('assunto').value;
  var mensagem = document.getElementById('mensagem').value;

  if (email == '' || mensagem == '') {
    alert('Email e mensagem devem ser preenchidos');
  } else {
    window.open(
      `mailto:vnunes13@gmail.com?subject=${assunto}&body=Olá Vinícius, eu sou o ${nome}!  ${mensagem}`
    )
  }

}
