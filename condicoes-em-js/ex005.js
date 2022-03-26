function analisar() {

    let data = new Date();

    let semana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

    let dia = data.getDate();

    let mes = data.getMonth();

    let ano = data.getFullYear();

    let diaDasemana = data.getDay();

    let hora = data.getHours();

    let minutos = data.getMinutes();

    let segundos = data.getSeconds();

    let res = document.getElementById('res');

    res.innerHTML = `<p>Dia: <mark>${dia}</mark> </p>
    <p>Mês: <mark>${mes}</mark> </p>
    <p>Ano: <mark>${ano}</mark> </p>
    <p>Dia da semana:<mark>${semana[diaDasemana]}</mark> </p>
    <p>Hora:<mark>${hora}</mark></p>
    <p>Minutos: <mark>${minutos}</mark> </p>
    <p>Segundos: <mark>${segundos}</mark> </p>`

    res.style.font = 'Normal 16pt Arial'

}










