

function iniciar() {

    let primeiroValor = Number(window.prompt("Primeiro valor:"));
    let segundoValor = Number(window.prompt("Segundo valor:"));

    let valores = Number(window.prompt(`Valores informados: [${primeiroValor}] e [${segundoValor}]  
    
    O que vamos fazer? 

    [${1}] Somar   
    [${2}] Subtrair    
    [${3}] Multiplicar
    [${4}] Dividir`));

    let res = document.getElementById("res")
    res.innerHTML = `<h2>Calculando...</h2>`


    switch (valores) {
        case 1:
            res.innerHTML += `<p>${primeiroValor} + ${segundoValor} = <strong> ${primeiroValor + segundoValor} </strong> </p>`;
            break
        case 2:
            res.innerHTML += `<p>${primeiroValor} - ${segundoValor} = <strong> ${primeiroValor - segundoValor} </strong> </p>`;
            break
        case 3:
            res.innerHTML += `<p>${primeiroValor} x ${segundoValor} = <strong> ${primeiroValor * segundoValor} </strong> </p>`;
            break
        case 4:
            res.innerHTML += `<p>${primeiroValor} / ${segundoValor} = <strong> ${primeiroValor / segundoValor} </strong> </p>`;
            break
        default:
            res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${primeiroValor} e ${segundoValor}, mas não sei o que fazer com eles.</p>`
            break
    }

}

res.style.font = 'Normal 16pt Arial';