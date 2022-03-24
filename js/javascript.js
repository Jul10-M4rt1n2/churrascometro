let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let inputResultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne =carnePP(duracao)*adultos+(carnePP()/2*criancas);
    let qtdTotalCerveja =cervejaPP(duracao)*adultos;
    let qtdTotalBebidas =bebidasPP(duracao)*adultos+(bebidasPP()/2*criancas);

    resultado.innerHTML = `<p>Total de carne: ${qtdTotalCarne/1000}Kg</p>`
    resultado.innerHTML += `<p>Total de cerveja: ${Math.ceil(qtdTotalCerveja/355)}latas</p>`
    resultado.innerHTML += `<p>Total de bebidas: ${Math.ceil(qtdTotalBebidas/2000)}Pet's 2Lt</p>`
}

function carnePP(){
    if(duracao>=6){
        return 650;
    }else{
        return 400;
    }
}
function cervejaPP(){
    if(duracao>=6){
        return 200;
    }else{
        return 1200;
    }
}
function bebidasPP(){
    if(duracao>=6){
        return 1500;
    }else{
        return 1000;
    }
}

