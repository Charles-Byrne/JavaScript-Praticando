/*
[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!
*/

/*const hora = (number) => {
  console.log('são exatamente ' + number)
}

hora('12:00')
*/

function currentTime() {
  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  // Adiciona um zero à esquerda se a hora, minuto ou segundo for menor que 10

  hour = hour < 10 ? "0" + hour : hour
  minute = minute < 10 ? "0" + minute : minute
  second = second < 10 ? "0" + second : second

  // Retorna a hora exata no formato "hh:mm:ss"

  return `${hour}:${minute}:${second}`

}

// Chama a função e imprime a hora exata no console

console.log(`A hora atual é: ${currentTime()}`)