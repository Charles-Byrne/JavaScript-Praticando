/*

REDUCE
- Retorna um valor ( POdeser um novo array, um objeto, string, number, etc; )
- Aceita 4 parâmetros
- acumulador
- valor atual
- array completo

*/

const list = [1, 2, 3, 4];
/*
//exeplo1 de como criar:
const sum = list.reduce((acc, current) => {
  return acc + current
}, 0)
*/
//exemplo2 :
const sum = list.reduce((acc, current) => acc + current, 0)

console.log(sum)