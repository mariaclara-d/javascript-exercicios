function calcular() {

    var aluno = window.prompt('Qual é o nome do aluno?')

    var nota1 = window.prompt(`Qual foi a primeira nota de ${aluno}?`)

    var nota2 = window.prompt(`Além de ${nota1}, qual foi a outra nota de ${aluno}?`)

    var res = document.getElementById('res')

    var n1 = parseFloat(nota1)
    var n2 = parseFloat(nota2)

    var m = (n1 + n2)/2;

    res.innerHTML = `Calculando a média final de <mark> ${aluno} </mark> <br> As notas obtidas foram <mark> ${nota1} e ${nota2} </mark> <br> A média final será <mark> ${m} </mark>`

    res.style.font = 'Normal 18pt Arial'
    
    





}