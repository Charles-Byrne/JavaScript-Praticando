const students = [
    { name: "Charles", testGrade: 10 },
    { name: "Flavio", testGrade: 1 },
    { name: "Pedro", testGrade: 0 },
    { name: "Thiago", testGrade: 8 },
    { name: "Carlos", testGrade: 7 },
    { name: "Joana", testGrade: 10 },
    { name: "Ezequiel", testGrade: 2 },
    { name: "Antnio", testGrade: 3 },
    { name: "Davi", testGrade:10 },
    { name: "Felipe", testGrade: 6 },
];

const resultApproved = students.map( student => {
   let result

if (student.testGrade >= 7) {
    result = "approved"
} else {
    result = "disapproved"
}
   
   const approvedOrDisapproved = {
        name: student.name,
        finalResult: result
    }

    return approvedOrDisapproved
    
})

console.log(resultApproved)