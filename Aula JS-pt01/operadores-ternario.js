/* Operador Ternário ou Condicional


  ? = Se
  : = Se não

*/

const desktop = true
const power = true
const system = true

const help = desktop && power && system ? 'Aperte o botão de ligar o computador' : 'Terá que formatar o computador'

console.log(help)