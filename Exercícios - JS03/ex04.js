/*
[ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!
*/

const myYear = () => {
  let date = new Date()
  let year = date.getFullYear()

  console.log(`O ano atual é: ${year}`)
}

myYear()

