
function sorteio (minimo,maximo) {
    return Math.floor(Math.random()*(maximo-minimo+1)) + minimo;
}

//Arrow Function: Quando fazer exceção de tempo de execução e quando funções são simples (não tem nome, mas pode colocar dentro da variável).
//const sorteio = (minimo, maximo) => {
//    return Math.floor(Math.random()*(maximo-minimo+1)) + minimo;}

let numero1 = sorteio();
let numero2 = sorteio(0,50);
let numero3 = sorteio(15,35);

console.log(numero1,numero2,numero3);

let lista = ["José","Maria","João","Mario", "Joana"];

let i = 0;
while(i < 10){
console.log(lista[sorteio(0,lista.length-1)]);
i++;
}



 