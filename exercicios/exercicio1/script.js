// Armazenando horário atual
var agora = new Date()
var hora = agora.getHours()

// Variáveis DOM
var txtHora = document.querySelector('#hora')
var txtSaudacao = document.querySelector('#saudacao')
var img = document.querySelector('.img-dinamica')
var corpo = document.body

// Escrevendo Horário Atual na Tela
txtHora.innerHTML = hora

// Condições (Imagem e Cor de Fundo)
if (hora < 12) { // Manhã
    txtSaudacao.innerHTML = 'Bom dia!'
    corpo.style.background = 'var(--manha)'
    img.setAttribute('src', 'img/manha.jpg')
} else if (hora < 18) { // Tarde
    txtSaudacao.innerHTML = 'Boa tarde!'
    corpo.style.background = 'var(--tarde)'
    img.setAttribute('src', 'img/tarde.jpg')
} else { // Noite[
    txtSaudacao.innerHTML = 'Boa noite!'
    corpo.style.background = 'var(--noite)'
    img.setAttribute('src', 'img/noite.jpg')
}