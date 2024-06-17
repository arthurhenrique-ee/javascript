function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('nasc').value
    var fsexo = document.getElementsByName('radsex')
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')


    if (nasc == '') {
        window.alert('[ERRO] Preencha todos os dados.')
    } else if (nasc == 0 || nasc > ano) {
        window.alert('[ERRO] Confira os dados e tente novamente!')
    } else {
        var idade = ano - nasc
        var genero
        var artigo
        if (fsexo[0].checked) {
            genero = 'Masculino'
            artigo = 'um'
        } else if (fsexo[1].checked) {
            genero = 'Feminino'
            artigo = 'uma'
        }

        var fase
        if (idade >= 0 && idade <= 4) {
            //BEBÊ
            fase = 'Bebê'
            if (genero == 'Masculino') {
                foto.setAttribute('src', 'imagens/homens/homem-bebe.jpg')
            } else {
                foto.setAttribute('src', 'imagens/mulheres/mulher-bebe.jpg')
            }
        } else if (idade >= 5 && idade <= 13) {
            //CRIANÇA
            fase = 'Criança'
            artigo = ''
            if (genero == 'Masculino') {
                foto.setAttribute('src', 'imagens/homens/homem-crianca.jpg')
            } else {
                foto.setAttribute('src', 'imagens/mulheres/mulher-crianca.jpg')
            }
        } else if (idade >= 14 && idade <= 21) {
            //ADOLESCENTE
            fase = 'Adolescente'
            if (genero == 'Masculino') {
                foto.setAttribute('src', 'imagens/homens/homem-adolescente.jpg')
            } else {
                foto.setAttribute ('src', 'imagens/mulheres/mulher-adolescente.jpg')
            }
        } else if (idade >= 22 && idade <= 35) {
            //JOVEM
            fase = 'Jovem'
            if (genero == 'Masculino') {
                foto.setAttribute('src', 'imagens/homens/homem-jovem.jpg')
            } else {
                foto.setAttribute('src', 'imagens/mulheres/mulher-jovem.jpg')
            }
        } else if (idade >= 36 && idade <= 45) {
            //ADULTO 1
            fase = 'Adulto'
            artigo = ''
            if (genero == 'Masculino') {
                foto.setAttribute('src', 'imagens/homens/homem-adulto1.jpg')
            } else {
                foto.setAttribute('src', 'imagens/mulheres/mulher-adulta1.jpg')
            }
        } else if (idade >= 46 && idade <= 60) {
            //ADULTO 2
            fase = 'Adulto'
            artigo = ''
            if (genero == 'Masculino') {
                foto.setAttribute('src', 'imagens/homens/homem-adulto2.jpg')
            } else {
                foto.setAttribute('src', 'imagens/mulheres/mulher-adulta2.jpg')
            }
        } else if (idade >= 61) {
            //IDOSO
            if (genero == 'Masculino') {
                foto.setAttribute('src', 'imagens/homens/homem-idoso.jpg')
                fase = 'Idoso'
            } else {
                foto.setAttribute('src', 'imagens/mulheres/mulher-idosa.jpg')
                fase = 'Idosa'
            }
        }
    }
    msg.innerHTML = `Detectamos ${artigo} ${fase} do sexo ${genero} com ${idade} anos.`
}