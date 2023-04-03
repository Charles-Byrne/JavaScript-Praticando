// OPERADORES typeof e delete

/*
const myNumber = 20
const myString = "Olá, sou uma string"

const myObject = {
  name: "Object",
  age: 20
}

console.log(typeof myObject)
*/

const myObject = {
  name: "Object",
  age: 20,
  height: 1.7
}

delete myObject.height

console.log(myObject)
