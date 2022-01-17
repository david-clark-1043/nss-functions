
const colorGenerator = function* () {
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let i = 0
    while (true) {
        yield colors[i]
        i++
    }
}

const colorGen = colorGenerator()

const reindeerFactory = function (reindeerName) {
    return Object.create({
        name: reindeerName,
        color: colorGen.next().value
    })
}

export const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen", "Olive"];
    const coloredReindeer = [];
    //const colorGen = colorGenerator()
    // Write a for loop that looks at each reindeer
    for (const deer of reindeer) {
        // Invoke factory function to create reindeer object
        const newDeer = reindeerFactory(deer);
        // Put new reindeer object in coloredReindeer array
        coloredReindeer.push(newDeer);
    }

    // Return coloredReindeer array
    return coloredReindeer
}