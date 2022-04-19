function contar() {

    let res = document.getElementById('res');

    res.innerHTML += `<h2>Contando de 1 a 10, marcando os pares</h2>`

    let conta = 1

    while (conta <= 10) {

        if (conta % 2 === 0) {
            res.innerHTML += `<mark>${conta}</mark> &#x1F449`
        } else {
            res.innerHTML += `${conta} &#x1F449`;
        }
        conta++
    }

}