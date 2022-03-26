

function calcular() {

    let nome = window.prompt("Qual é o nome do aluno?")
    let nota1 = window.prompt(`Qual foi a primeira nota de ${nome}?`)
    let nota2 = window.prompt(`Além de ${nota1}, qual foi a segunda nota de ${nome}?`)

    let n1 = parseFloat(nota1)
    let n2 = parseFloat(nota2)

    let media = (n1 + n2) / 2

    let mensagem = ""

    let res = document.getElementById("res")

    if (media >= 7) {
        mensagem = 'Meus parabéns!'
    } else {
        mensagem = 'Estude um pouco mais!'
    }


    res.innerHTML = `Calculando a média final de <mark> ${nome} </mark>. <br> 
    As notas obtidas foram <mark> ${nota1} </mark> e <mark> ${nota2} </mark>. <br> 
    A média final será de <mark> ${media} </mark>. <br> 
    A mensagem que temos é: <strong style=color:'red';> ${mensagem} </strong>`
    res.style.lineHeight = '50px';
}

