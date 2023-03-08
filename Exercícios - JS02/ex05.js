/*
Crie 5 objetos nesses formatos {"nome:" , "idade:" , "sexo:" , "profissão" , "nascionalidade:"}
 Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo 
 a pessoa deve ser maior de idade e brasileira para ser aprovada.
 
*/

const object = {
    nome: "Charles",
    idade: 18,
    sexo: "masculino",
    profissão: "Dev Front-End",
    nacionalidade: "bargentino",
}

let big = object.idade

if (object.idade >= 18 && (object.nacionalidade === "brasileiro" || object.nacionalidade === "brasileira")) {
    big = object.idade
    console.log("Você está aprovado tem")
} else {
    console.log("Você não foi aprovado")
}

/**
 Faça um programa onde  os jurados vão dar a explicação para cada nota
 dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.
 */

let nota = 4

if (nota < 0 || nota > 10) {
    console.log("A nota é inválida. Digite uma nota de 0 a 10.")
}
else if (nota <= 5) {
    console.log("A nota indica uma apresentação abaixo da média.")
}
else if (nota <= 7) {
    console.log("A nota indica uma apresentação mediana.")
}

else if (nota <= 8) {
    console.log("A nota indica uma apresentação acima da média.")
} else {
    console.log("A nota indica uma apresentação excepcional.")
}
