function contar() {

    let res = document.getElementById('res');

    let v1 = Number(document.getElementById('d1').value)

    let v2 = Number(document.getElementById('d2').value);

    let conta

    res.innerHTML += `<h2> Contando de ${v1} até ${v2}`;

    if (v1 < v2) {
        conta = v1
        while (conta <= v2) {
            res.innerHTML += `${conta} &#x1F449`
            conta++
        }
    } else if(v2<v1){
        conta = v1
        while (conta >= v2){
            res.innerHTML += `${conta} &#x1F449`
            conta --
        }
        
    }
}

