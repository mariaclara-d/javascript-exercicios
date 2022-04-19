function contar () {

    let res = document.getElementById('res');

    let limiteFinal =  Number(document.getElementById('dados').value);

    res.innerHTML += `<h2>Contando de 0 até ${limiteFinal}`

    let conta = 0

    while (conta <= limiteFinal){
        res.innerHTML += `${conta}&#x1F449`
        conta++
    }

}