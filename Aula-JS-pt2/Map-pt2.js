



const numbers = [30, 90, 50, 75]

const double = number => number /2 //Função criada para calcular para retorno
const toReais = number => `R$ ${number.toFixed(2)}` // função criada para transformar em reais, toFixed para arrendondar os número

const newArray = numbers.map(double).map(toReais) // chamadndo as duas funções já com retorno

console.log(newArray)//Imprimindo o resultado.