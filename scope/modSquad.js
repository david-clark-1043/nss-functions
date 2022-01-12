
// Initial Incorrect Code to Fix

// {
//     const modSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     const HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     modSquad.members.forEach(member => {
//         const HTMLRepresentation += `<div>${member}</div>`
//     })
// }

// console.log(HTMLRepresentation)

// fixed code
// deleted curly braces around most of code
// changed HTMLRepresentation declaration from const to let because changes in the .forEach()
// changed modSquad obj names from strings
// added \n to string for readability
const modSquad = {
    members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    series: {
        start: "1968",
        end: "1973"
    }
}

let HTMLRepresentation = `<h1>The Mod Squad</h1>\n`

modSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>\n`
})


console.log(HTMLRepresentation)