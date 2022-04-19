function contar() {

    let res = document.getElementById('res');

    res.innerHTML += `<h2>Contando de 1 a 10, marcando só os pares </h2>`

    let conta = 1

    while (conta <= 10) {
        conta++
        if (conta % 2 == 0) {
            res.innerHTML += `<mark>${conta}</mark> &#x1F449`

        }

    }
}