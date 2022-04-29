function fatorial() {

    let res = document.getElementById('res');

    let nFat = Number(document.getElementById('fn').value);

    res.innerHTML = `<h2> Calculando ${nFat}!</h2>`

     let c = nFat  

     let fat = 1

     while(c > 1){

        res.innerHTML += `${c} x ` 
        fat *= c
        c--

     }
     res.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
}