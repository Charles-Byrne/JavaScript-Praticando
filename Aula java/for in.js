/*
ESTRUTURA DE REPETIÇÃO - FOR IN
*/

const student = {
  name: 'Charles',
  age: 36,
  genre: 'male'
}

/*for (let property in student) {
  console.log(property)
}
*/

/*for (let property in student) {
  console.log(student[property])
}
*/

for (let property in student) {
  console.log(`${property}:${student[property]}`)
}