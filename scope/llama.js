// Initial incorrect code
// const llamaNamer = function () {
//     const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
//     const randomizer = Math.floor(Math.random() * 7)

//     const namer = function () {
//         const suffix = " the Llama"
//         const name = possibleNames[randomizer]
//     }

//     return name + suffix
// }

// nameMaker = llamaNamer()
// console.log(nameMaker())

//fixed code

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    }

    return namer
}

nameMaker = llamaNamer()
console.log(nameMaker())