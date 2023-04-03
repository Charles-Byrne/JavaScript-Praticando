/*
for each
*/
//Array - lista de estudantes e idade
const students = [
  { name: 'Charles', age: 37 },
  { name: 'Joana', age: 36 },
  { name: 'Carlo', age: 41 },
  { name: 'Henrique', age: 28 },
  { name: 'Claudia', age: 25 },
  { name: 'Alberto', age: 21 },
  { name: 'Marcos', age: 33 },
];
//variável todos os estudantes começando com 0 e vai sendo alterado
let AllStudentsAge = 0

students.forEach((student, index) => { // O forEach - Aceita até 3 paramentros / Argumentos (1º parametro são mostrados os itens / 2º mostra qual a posição do array / 3º mostra o array completo, se tiver 7 itens ele vai mostrar os itens 7 vezes na tela )
  AllStudentsAge += student.age
})

const averageAage = AllStudentsAge / students.length

console.log(`a média dos alunos é de ${averageAage.toFixed(0)}`)