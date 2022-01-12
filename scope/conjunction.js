
// Initial Incorrect Code to Fix

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
// }

// conjunction("Master", "Card")
// console.log(conjoinedWord)

// Fixed code
// Function did not return anything and function call did not save to a variable
const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`;
    return conjoinedWord
};

conjoinedWord = conjunction("Master", "Card");
console.log(conjoinedWord);