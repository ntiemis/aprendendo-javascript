
let nota= prompt ("Qual foi a nota do aluno?");
nota = Number(nota);

if (isNaN (nota)){
    alert ("ERRO: Valor inválido!");
}

else if (nota<5){
    alert ("Reprovado");
}

else if (nota>=7){
    alert ("Aprovado");
}

else{
    alert("Exame");
}

