const menu = document.querySelector("aside");
const botao = document.querySelector("img");

function deslizar () {
    
    if(menu.classList.contains("active")){
    menu.classList.add("active");
    }
    else{
        menu.classList.contains("active");
    }
}

botao.onclick = deslizar;