
// Initial Incorrect Code to Fix

{
    const modSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    const HTMLRepresentation = `<h1>The Mod Squad</h1>`

    modSquad.members.forEach(member => {
        const HTMLRepresentation += `<div>${member}</div>`
    })
}

console.log(HTMLRepresentation)