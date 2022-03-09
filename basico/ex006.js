function somar (){
    var numero1 = window.prompt('Digite um número:')

    var numero2 = window.prompt('Digite outro número:')

    var n1 = parseInt(numero1)
    var n2 = parseInt(numero2)

    var res = document.getElementById('res')

    var s = n1 + n2

     res.innerHTML = `A soma entre <mark> ${numero1} </mark> e <mark> ${numero2} </mark> é ${s}.`

     res.style.font = 'Normal 18pt Arial'

}