/*

Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo
 Escreva um programa onde, você cria uma função geradora de desconto.

*/

const generateDiscount = (value, percentageDiscount) =>{
    // Calcula o valor do desconto

    let discount = value * percentageDiscount / 100

    return value - discount

}

let valueFinal = generateDiscount (1000, 15)

console.log (valueFinal)