function iniciar() {
    let res = document.getElementById("res");

    let numero = Number(window.prompt('Digite um número:'));
    let mensagem = "";

    if (numero % 2 === 0) {
        mensagem = 'é par!'
    } else if (numero % 2 === 1) {
        mensagem = 'é ímpar!'
    }

    res.innerHTML = `O número ${numero} ${mensagem}!`
    res.style.font = 'Normal 18pt Arial'

}