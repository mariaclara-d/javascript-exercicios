var contador = 0;

var res = document.getElementById('res')

function contar(){
    contador ++
    res.innerHTML = `O contador está com  <mark> ${contador} </mark>  cliques`
}

function zerar (){
    contador = 0
    res.innerHTML = null
}





