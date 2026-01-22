let cxResult = document.querySelector('#resultado')
let limpar = document.querySelector('#limpar')
let del = document.querySelector('#del')
let numeros = document.querySelectorAll('.num')

let btnDivisao = document.querySelector('#divisao')

numeros.forEach(num => {
    num.addEventListener("click", ()=> {
        cxResult.innerText += num.textContent
    })
});

limpar.addEventListener("click", ()=> {
    cxResult.innerText = ""
})

del.addEventListener("click", ()=> {
    let texto = cxResult.innerText
    let textoDel = texto.slice(0, -1)
    cxResult.innerText = `${textoDel}`
})