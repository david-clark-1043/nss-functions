import { coloredReindeerBuilder } from "./factory.js"

const reindeerArray = coloredReindeerBuilder()

let htmlString = `<article id="colored-reindeer">
`
for (const reindeer of reindeerArray){
    htmlString += `<section style="color: ${reindeer.color}">${reindeer.name}</section>
    `
}
htmlString += `</article>`

let reindeerListElement = document.querySelector("body")

reindeerListElement.innerHTML = htmlString