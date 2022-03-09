function calcular (){
    var numero = window.prompt('Digite um número:')

    var res = document.getElementById('res')

    res.innerHTML = `O dobro de ${numero} é ${numero*2} e sua metade é ${numero/2}`
}