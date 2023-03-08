/*
Faça um progrmama que gere um número aleatório entre 1 e 10, esse núemro é o némero
'GANHADOR'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa
ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra a mensagem.

*/

/*
const number = Math.floor(Math.random() * 10)
*/
const winner = 7

const number = Math.floor(Math.random() * 10)

if (number === winner) {
  console.log(`${number} - Parabéns você foi o ganhador`)
} else {
  console.log(`${number} - Hoje não é seu dia de sorte, tente novamente!`)
}