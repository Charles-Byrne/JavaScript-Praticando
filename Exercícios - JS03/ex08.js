

const calculateInterest = (initialValue, interestRate, period) => {
  let fees = initialValue * interestRate * period
  let finalValue = initialValue + fees



  return finalValue
}

let myInitialValue = 3500
let myIntereste = 2.5 // Juros de 5%
let myPeriod = 1
let myMonths = 12


let myFinalValue = calculateInterest(myInitialValue, myIntereste, myPeriod)
let myFinalInterest = calculateInterest(myInitialValue, myIntereste, myPeriod) - myInitialValue



console.log(`Investimento de R$${myInitialValue} / taxa de juros mensal R$${myFinalInterest / myMonths}
 / valor total do resgate após período R$${myFinalValue} /  ${myPeriod} ano`)