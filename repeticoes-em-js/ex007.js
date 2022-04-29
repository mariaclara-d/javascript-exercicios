function tabuada() {

    let res = document.getElementById('res');

    let num = Number(document.getElementById('n').value);

    res.innerHTML += `<h2>Tabuada de ${num}</h2>`

    let c = 1

    while (c <= 10) {
        res.innerHTML += `${num} x ${c} = <strong> ${num * c} </strong> <br>`
        c++
    }

}