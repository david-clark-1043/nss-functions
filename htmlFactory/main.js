const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
    specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	},
	model: "Pro"

}

function capitalize(word) {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  


const compToHTML = (computerObj) => {
    htmlString = ""
    for(let prop in computerObj){
        if(prop == "id") {
            htmlString += `<section id="computer--${computerObj[prop]}">` + "\n"
        } else if(prop == "manufacturer") {
            htmlString += `\t<h1>${computerObj[prop]} `
        } else if(prop == "make") {
            htmlString += `${computerObj[prop]}</h1>` + "\n"
        } else if(prop == "model"){
            htmlString += `\t<div>` + capitalize(`${prop}`) + ": " + capitalize(`${computerObj[prop]}`) + `</div>\n`
        } else if(prop == "specs") {
            for(const spec in computerObj[prop]) {
                if(spec == "memory") {
                    htmlString += `\t<div>` + capitalize(`${spec}`) + ": " + capitalize(`${computerObj[prop][spec]}`) + ` GB</div>\n`
                } else if(spec == "hardDrive"){
                    htmlString += `\t<div>` + capitalize(`${spec}`.substring(0, 4)) + " " + `${spec}`.substring(4, `${spec}`.length) + ` space: ${computerObj[prop][spec]}` + `</div>\n`
                } else if(spec == "processor"){
                    htmlString += `\t<div>` + capitalize(`${spec}`) + " speed: " + capitalize(`${computerObj[prop][spec]}`) + ` Ghz</div>\n`
                }
                //htmlString += `\t${prop}: ${computerObj[prop]}\n`
            }
        }

        // console.log(htmlString);
        // console.log("-----------");
    };
    htmlString += "</section>"
    return htmlString
}

html = compToHTML(computer);
console.log(html);
// goal
/* 
<section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> 
*/