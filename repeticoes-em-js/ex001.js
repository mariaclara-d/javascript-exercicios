function contar() {

    let res = document.getElementById('res');

    res.innerHTML += `<h2>Contando de 1 a 10</h2>`

    let conta = 1;
   
    while (conta <= 10) {
        res.innerHTML += `${conta} &#x1F449`;
        conta ++

    }
    
}