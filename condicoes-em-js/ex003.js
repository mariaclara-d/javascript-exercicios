

function iniciar() {


    let numeroUm = Number(window.prompt('Digite um valor:'));

    let numeroDois = Number(window.prompt('Digite outro valor:'))

    let res = document.getElementById('res');


    if (numeroUm > numeroDois) {
        res.innerHTML = `Analisando os números <mark>${numeroUm}</mark> e <mark>${numeroDois}</mark> o maior valor é <strong>${numeroUm}</strong>`
    } else if (numeroDois > numeroUm) {
        res.innerHTML = `Analisando os números <mark>${numeroUm}</mark> e <mark>${numeroDois}</mark> o maior valor é <strong>${numeroDois}</strong>`

    }
res.style.font = 'Normal 18pt Arial'
}