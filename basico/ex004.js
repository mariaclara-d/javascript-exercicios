function comecar(){

    var nome = window.prompt('Qual é o seu nome?')

    var res = document.getElementById('res')

    var title = document.getElementById('titulo')

    res.innerHTML = `Olá, <strong> ${nome} </strong>. Seja bem vindo! \u{1F449}`

    res.style.font = 'normal 18pt Arial'

    title.style.font = 'normal 18pt Arial'

    
    
}