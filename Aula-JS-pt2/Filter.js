/*

FILTER
- cria um novo array, a partir do array percorrido (array original)
- Cria um novo array APENAS com os elementos filtrados
- Aceita até 3 parâmetros:
- Intem do array
- Index
- Array completo

*/

const names = [
  { name: "Charles", vip: true },
  { name: "Flavio", vip: false },
  { name: "Pedro", vip: false },
  { name: "Thiago", vip: true },
  { name: "Carlos", vip: true },
  { name: "Joana", vip: true },
  { name: "Ezequiel", vip: false },
  { name: "Antnio", vip: false },
  { name: "Davi", vip: true },
  { name: "Felipe", vip: false },
];
// exemplo para simplificar o código:
//const justVips = names.filter(client => client.vip)

const justVips = names.filter(client => {
  return client.vip
})

console.log(justVips)

const students = [
  { name: "Charles", testGrade: 10 },
  { name: "Flavio", testGrade: 1 },
  { name: "Pedro", testGrade: 0 },
  { name: "Thiago", testGrade: 8 },
  { name: "Carlos", testGrade: 7 },
  { name: "Joana", testGrade: 10 },
  { name: "Ezequiel", testGrade: 2 },
  { name: "Antnio", testGrade: 3 },
  { name: "Davi", testGrade: 10 },
  { name: "Felipe", testGrade: 6 },
];

//Exemplo para simplificar o código:
//const newListStudents = students.filter(student => student.testGrade >= 7)

const newListStudents = students.filter(student => {
  return student.testGrade >= 7
})

console.log(newListStudents)