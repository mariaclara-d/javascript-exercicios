function mostrar () {

let res = document.getElementById('res');

let num = Number(document.getElementById('n1').value);

res.innerHTML += `<h2>Tabuada de ${num}</h2>`

for (let calc = 1; calc <=10; calc ++){
    res.innerHTML += `${num} x ${calc} = ${num * calc}`
}

}