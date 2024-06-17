function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var fundo = document.getElementById('fundo')
    var data = new Date()
    var hora = data.getHours()
    var saudacao

    if (hora > 0 && hora < 12) {
        saudacao = 'Bom dia!'
    } else if (hora > 12 && hora < 18) {
        saudacao = 'Boa tarde!'
    } else {
        saudacao = 'Boa noite!'
    }

    msg.innerHTML = `Agora são ${hora} horas. ${saudacao}`

    if (hora > 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'imagens/tarde.png'
        fundo.style.background = '#BE2E00'
    } else {
        //Boa noite
        img.src = 'imagens/noite.jpg'
        fundo.style.background = '#010E31'
    }
}