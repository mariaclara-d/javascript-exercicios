

function iniciar() {


    let mes = window.prompt('Digite o mês em extenso (ex:Setembro)');

    let res = document.getElementById('res');

    let estacao 

    switch (mes) {

        case 'março': case 'abril': case 'maio':
            estacao = 'Outono'
            break

        case 'junho': case 'julho': case 'agosto':
            estacao = 'Inverno'
            break

        case 'setembro': case 'outubro': case 'novembro':
            estacao = 'Primavera'
            break

        case 'dezembro': case 'janeiro': case 'fevereiro':
            estacao = 'Verão'
            break
        default:
            estacao = 'INDEFINIDA'
            break
    }

    res.innerHTML = `No mês de <mark>${mes}</mark>, estamos na estação <mark>${estacao}</mark>.`
    res.style.font = 'Normal 16pt Arial'
}