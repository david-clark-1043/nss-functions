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
let legCountFour = 4;
let legCountTwo = 2;
let fourLegsPercent = .25;
let twoLegsPercent = .75;

let baseFourLegs = multiply(legCountFour, fourLegsPercent);
let baseTwoLegs = multiply(legCountTwo, twoLegsPercent);

let averageLegCount = add(baseFourLegs, baseTwoLegs);

let farmAnimals = divide(legs, averageLegCount);
console.log("total legs:", legs);
console.log("Four leg base unit:", baseFourLegs);
console.log("Two leg base unit:", baseTwoLegs);
console.log("Average Leg Count:", averageLegCount);
console.log("Number of Farm Animals:", farmAnimals);