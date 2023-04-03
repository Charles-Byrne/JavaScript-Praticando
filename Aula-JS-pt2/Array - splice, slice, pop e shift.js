const student = ['Charles', 'Joana', 'Augusto', 'Carlos', 'Thiago', 'Ezequiel', 'Afonso']

//student.splice(2, 0, 'Rodolfo')

//const myStudent = student.slice(1, 2)

//student.splice(1, 2)

//student.pop()

student.shift()

console.log(student)


/*

.splice (adiciona / exclui) modificando o array = para limpar student.splice(1 "indice", 2 "elemento") (1,2) / para  adiconar (2, 0, 'Rodolfo') 0 - você adiciona e 1 elemina
.slice (fatiar) Não modifica o array = É necessário criar uma variável para aplicar o slice. ex: const myStudent = student.slice(1, 2) só vai aparecer a Joana quando imprimir. 
.pop() Excluir o último item do array
.shift() exclui o primeiro item do array

*/