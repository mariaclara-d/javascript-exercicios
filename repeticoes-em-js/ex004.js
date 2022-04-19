function contar() {

    let res = document.getElementById('res');

    res.innerHTML += `<h2>Contagem Regressiva de 10 a 1`;

    for (let conta = 10; conta >= 1; conta--){
        res.innerHTML += `${conta}&#x1F449`
    }

}