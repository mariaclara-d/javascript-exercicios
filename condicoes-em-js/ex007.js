
function gerar() {


    let gerador = Math.floor(Math.random() * 100) +1;

    let res = document.getElementById('res');

    res.innerHTML = `Acabei de pensar no número ${gerador}`;

}

function limpar () {

    let res = document.getElementById('res');
    
    res.innerHTML = null;

}


