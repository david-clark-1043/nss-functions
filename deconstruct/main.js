const getBowl = () => {
    console.log("Get mixing bowl.");
}
const getMeasuringCup = () => {
    console.log("Get measuring cup.");
}

const measureFlour = () => {
    console.log("Measure flour.");
}

const measureWater = () => {
    console.log("Measure water.");
}

const measureSalt = () => {
    console.log("Measure salt.");
}

const measureYeast = () => {
    console.log("Measure yeast.");
}

const mixIngredients = () => {
    console.log("Mix ingredients together in bowl.");
}

const measureWait = (time) => {
    console.log(`Wait a certain period of time. Current wait time is ${time}`);
}

const foldDough = () => {
    console.log("Fold the dough.");
}

const pinchDough = () => {
    console.log("Pinch the dough.");
}

const checkIfRisen = () => {
    console.log("Check if dough has risen.");
}

const moveToProofBowl = () => {
    console.log("Move dough to proofing bowl.");
}

const checkTemp = () => {
    console.log("Check temperature.");
}

const checkIfProofed = () => {
    console.log("Check if proofed.");
}

const turnOnOven = () => {
    console.log("Turn on oven.");
}

const setOvenToPreheat = () => {
    console.log("Set oven to 475 degrees.");
}

const getDutchOven = () => {
    console.log("Get dutch oven out.");
}

const putDutchOvenIn = () => {
    console.log("Place Dutch oven in oven.");
}

const takeDutchOvenOut = () => {
    console.log("Take Dutch Oven out.");
}

const putDoughInDutchOven = () => {
    console.log("Put dough in Dutch oven.");
}
const takeDoughOutOfDutchOven = () => {
    console.log("Take dough out of Dutch oven.");
}

getBowl()
getMeasuringCup()

measureFlour()
measureWater()
mixIngredients()
checkTemp()
measureWait("30 mins")

measureSalt()
measureYeast()
mixIngredients()
checkTemp()

measureWait("10 mins")

foldDough()
pinchDough()
measureWait("60 mins")
foldDough()
pinchDough()
measureWait("180 mins")

checkIfRisen()
moveToProofBowl()
measureWait("45 mins")
getDutchOven()
putDutchOvenIn()
turnOnOven()
setOvenToPreheat()
measureWait("45 mins")
checkIfProofed()
takeDutchOvenOut()
putDoughInDutchOven()
measureWait("45 mins")
takeDoughOutOfDutchOven()