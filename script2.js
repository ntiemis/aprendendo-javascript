
const certo = document.querySelector("#certo");
const errado = document.querySelector("#errado");

function gatoErrado(){
    alert("GATO ERRADO! Clique no outro click");
}

function gatoCerto(){
    certo.src = "https://placekitten.com/350/350";
    alert ("PARABÉNS! Clicou no gato certo! Mas ele foi embora. :(. Mas chegou outros gatíneos!")
}

errado.onclick = gatoErrado;
certo.onclick = gatoCerto;