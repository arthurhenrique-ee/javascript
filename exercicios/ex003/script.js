function contar() {
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let msg = document.querySelector('.msg')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        //window.alert('[ERRO] Preencha todos os dados.')
        msg.innerHTML = 'Impossível contar'
    } else {
        msg.innerHTML = `Contando: <br>`
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if (p <= 0) {
            alert('Passo inválido! Condiredando PASSO 1')
            p = 1
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                msg.innerHTML += `${c} - `
            } 
        } else {
            //CONTAGEM REGRESSIVA
            for (let c = i; c >= f; c -=p) {
                msg.innerHTML += `${c} - `
            }
        }
        msg.innerHTML += 'FIM'
    }
}