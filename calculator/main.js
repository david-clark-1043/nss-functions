const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber

    return sum
}

const substract = (firstNumber, secondNumber) => {
    const sub = firstNumber - secondNumber

    return sub
}

const divide =  (firstNumber, secondNumber) => {
    const div = firstNumber / secondNumber

    return div
}

const multiply = (firstNumber, secondNumber) => {
    const multi = firstNumber * secondNumber

    return multi
}
const square = (firstNumber) => {
    const sq = firstNumber * firstNumber

    return sq
}

let legs = 60;


let legsnum = add(multiply(4, .25), multiply(2, .75));
console.log(legsnum);
let farmAnimals = divide(legs, legsnum);
console.log(farmAnimals);