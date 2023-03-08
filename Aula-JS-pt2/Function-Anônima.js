/*
- Funcion 

Anonima

*/


const sum = function (number1, number2) { // <- função anonima

     const result = number1 + number2
     
     return result
}

const firstNumber = 10
const seccondNumber = 20

console.log(`O primeiro número é ${firstNumber}`)
console.log(`O segundo número é ${seccondNumber}`)

const result = sum(firstNumber, seccondNumber) //<- result tbm pode ser armazenado em uma variável

console.log(`E a soma dos dois é ${result}`)

