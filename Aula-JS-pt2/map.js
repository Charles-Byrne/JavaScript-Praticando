/*

MAP

- Cria um novo array, a paartir do array percorrido (array original)
- Cria um nosso array, com a mesma quantidade de itens do array original
- Aceita 3 parâmetros
  - Item do array
  - Index
  - array completo

*/



/*
Ex:

const numbers = [1,2,3,4]
const students = [
    { name: 'Charles', age: 37 },
    { name: 'Joana', age: 36 },
    { name: 'Carlo', age: 41 },
    { name: 'Henrique', age: 28 },
    { name: 'Claudia', age: 25 },
    { name: 'Alberto', age: 21 },
    { name: 'Marcos', age: 33 },
  ];

  const newArray = numbers.map((number) => {
    
    return number * 2
  })

  console.log(newArray)
*/

const students = [
    { name: 'Charles', age: 37 },
    { name: 'Joana', age: 36 },
    { name: 'Carlo', age: 41 },
    { name: 'Henrique', age: 28 },
    { name: 'Claudia', age: 25 },
    { name: 'Alberto', age: 21 },
    { name: 'Marcos', age: 33 },
  ];

  const newStudents = students.map((student) => {
    const newStudent = {
        name: student.name + ' Byrne',
        age: student.age - 5
    }    
            return newStudent
  })
console.log(students)//array original
  console.log(newStudents)//array modificado