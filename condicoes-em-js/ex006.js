
function calcular () {

let res = document.getElementById('res');

let anoNasce = Number(window.prompt('Em que ano você nasceu?'));

let data = new Date ();

let ano = data.getFullYear();

let idade = ano - anoNasce;

res.innerHTML = `Quem nasceu em ${anoNasce} vai completar <strong>${idade}</strong> em 2022.`

res.style.font = 'Normal 16pt Arial';

}