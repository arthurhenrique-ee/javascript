function tabuada() {
    let num = document.getElementById('numero').value
    let tab = document.getElementById('seltab')

    if (num.length == 0) {
        alert('[ERRO] Preencha todos os dados!')
    } else {
        tab.innerHTML = ''
        let n = Number(num)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}