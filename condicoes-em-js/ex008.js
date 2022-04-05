let computador = 0;
let jogador = 0;

let res = document.getElementById('res');


function sortear() {

    computador = Math.floor(Math.random() * 100) +1;

}


function adivinhar() {

    jogador = Number(window.prompt('Qual é o seu palpite?'));

    if (jogador < computador) {
        res.innerHTML += ` <p> Você falou ${jogador}. O meu número é <strong>MAIOR</strong> </p>`
    } else if (jogador > computador) {
        res.innerHTML += ` <p> Você falou ${jogador}. O meu número é <strong>MENOR</strong> </p>`
    } else if (jogador == computador){
        res.innerHTML += ` <p> Parabéns! Você acertou! Eu tinha sorteado o valor ${computador} </p>`
        document.getElementById('botao').style.visibility = 'hidden';
    }
}