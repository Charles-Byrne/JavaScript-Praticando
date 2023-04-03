/*

A função aceita 4 parâmetros 
(Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)

*/

let calculatorValueFinal = (customerName, valueTotalPurchase, firstPurchase, cashPayment) => {

// Define a porcentagem de desconto padrão para clientes que não estão fazendo sua primeira compra
let percentageDiscount = 5

// Se o cliente estiver fazendo sua primeira compra, aumenta o desconto para 10%
if (firstPurchase) {
    percentageDiscount = 10

} 

 // Se o cliente optou por pagar à vista, aumenta o desconto em mais 5%
if (cashPayment) {
    percentageDiscount += 5

}

// Calcula o valor do desconto em reais
let valueDiscount = valueTotalPurchase * (percentageDiscount / 100)

// Calcula o valor final com o desconto aplicado
let finalvalue = valueTotalPurchase - valueDiscount

// Retorna uma mensagem contendo o nome do cliente e o valor final da compra
return `O final da compra para ${customerName} é R$ ${finalvalue.toFixed(2)}.`

}

// Chama a função com os valores de exemplo
let mensage = calculatorValueFinal("Charles Byrne", 100, true, false)

// Exibe a mensagem de retorno no console
console.log(mensage)

