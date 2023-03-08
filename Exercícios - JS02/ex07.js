

const number = 6


if (number % 2 === 0) {

    if (number % 5 === 0) console.log(number + " é um número par e divisível por 5")
    else console.log(number + " é um número impar e não é divisível por 5")
} else {

    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            console.log(number + " é um núemro impar, mas não é primo")
            break
        } else {
            if (i === number - 1) console.log(number + " é um número primo")
        }
}
