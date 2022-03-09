

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


    res.innerHTML = `Calculando a média final de ${nome}. As notas obtidas foram ${nota1} e ${nota2}. A média final será de ${media}. A mensagem que temos é: ${mensagem} `

}