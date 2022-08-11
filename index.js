// function contagem de 1 até 20
function contagem(){
    let saida = document.getElementById('saida')
    saida.innerHTML += `<h2> Contando ... </h2>`

    for (let x=1; x<=20; x++){
        saida.innerHTML += x
    }

    // saida.innerHTML += ``
}
contagem()