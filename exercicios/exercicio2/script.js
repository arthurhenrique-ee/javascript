function verificar() {
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var inputNasc = document.querySelector('input#ano-nasc')
    var sexoSelecionado = document.querySelector('input[name="sexo"]:checked')

    if (inputNasc.value == "" || !sexoSelecionado) {
        alert('[ERRO] Preencha todos os campos!')
    } else {
        var txtRes = document.querySelector('#resultado')
        var img = document.querySelector('#avatar')
        var sexo = sexoSelecionado.value
        var sexoAbreviado = sexo == "Masculino" ? "masc" : "fem"
        var anoNasc = Number(inputNasc.value)
        var idade = anoAtual - anoNasc
        var faixa1, faixa2

        if (idade < 0 || idade > 110) {
            alert('[ERRO] Idade inválida!')
            return
        }

        if (idade <= 11) {
            faixa1 = 'crianca'
            faixa2 = 'Criança'
        } else if (idade <= 14) {
            faixa1 = 'preadolesc'
            faixa2 = 'Pré-adolescente'
        } else if (idade <= 18) {
            faixa1 = 'adolescente'
            faixa2 = 'Adolescente'
        } else if (idade <= 25) {
            faixa1 = 'jovem'
            faixa2 = 'Jovem'
        } else if (idade <= 60) {
            faixa1 = 'adulto'
            faixa2 = sexo == "Masculino" ? "Adulto" : "Adulta"
        } else {
            faixa1 = 'idoso'
            faixa2 = sexo == "Masculino" ? "Idoso" : "Idosa"
        }

        txtRes.innerHTML = `Detectamos ${faixa2} com ${idade} anos de idade.`
        img.setAttribute('src', `img/${sexoAbreviado}/${faixa1}.png`)
        img.classList.add('active')

        if (sexo == "Masculino") {
            document.body.style.background = 'var(--masculino)'
            img.style.borderColor = 'var(--masculino)'
        } else {
            document.body.style.background = 'var(--feminino)'
            img.style.borderColor = 'var(--feminino)'
        }
    }
}


// Criança (0 - 11)
// Pré-adolescente (12 - 14)
// Adolescente (15 - 18)
// Jovem (19 - 25)
// Adulto (25 - 60)
// Idoso (60 - ...)