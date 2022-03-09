function calcular() {

    var numero = window.prompt('Digite um número:')

    var res = document.getElementById('res')

    var n = parseFloat(numero)

    var abs = Math.abs(n)

    var int = Math.ceil(n)

    var intprox = Math.floor(n)

    var pot2 = Math.pow(n, 2)

    var pot3 = Math.pow(n, 3)

    var raiz2 = Math.sqrt(n)

    var raiz3 = Math.cbrt(n)

    res.innerHTML = `O número a ser analisado aqui será o <strong>${n}</strong>. <br> 
    O seu valor absoluto é ${abs}. <br> 
    A sua parte inteira é ${int}. <br> 
    O valor inteiro mais próximo é ${intprox}. <br> 
    O valor de ${n} <sup>2</sup> é ${pot2}. <br>
    O valor de ${n} <sup>3</sup> é ${pot3}. <br>
    A sua raiz quadrada é ${raiz2}. <br>
    A sua raiz cúbica é ${raiz3}.`

    res.style.lineHeight = '40px'
}