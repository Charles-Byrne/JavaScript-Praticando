/* 
[ ] Escreva um programa onde, você chame uma função mandando dois argumentos,
 2 números, e a função responde qual número é maior

*/


const maior = (number1, number2) => { //função arrow com parametros
  if (number1 > number2) {
    return number1 // retorna o primeiro parametro

  } else {
    return number2 // retorna o segundo parametro

  }

}

console.log(maior(332, 44)) //retorna o número maior
