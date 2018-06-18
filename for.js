let i = 1;

while (i <= 10){
    console.log(i);
    i++;
}

//Como fazer a mesma coisa do 'while' com 'for':

for (let i = 1; i <= 10; i++){
       console.log(i);
}

//for of(Faz com que a variavel interna assuma um valor da lista) e for in(Faz com que a variável interna assuma um índice da lista)

let lista = ["James","Nomes","Wolfgang","Golfinho","Cleide","Tainá"];

for(let item in lista){
console.log(item);
}

for(let item of lista){
    console.log(item);
    }
    
 