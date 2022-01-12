const broadcast = (whatToBroadcast) => {
    whatToBroadcast()
}

const announceRain = () => {
    return console.log("Grab an umbrella. It's going to rain today.");
}

const announceClear = () => {
    return console.log("Grab your shades and sunscreen. It's going to be sunny and hot today.");
}

const weatherStation = (humidity) => {
    if(humidity > 95) {
        return broadcast(announceRain);
    } else {
        return broadcast(() => {announceClear()});
    }
    
}

// testing code
console.log("---Log rain message---");
announceRain()
console.log("---Log clear message---");
announceClear()

console.log("---Weather Station h = 96. Should say rain---");
weatherStation(96)
console.log("---Weather Station h = 90. Should say clear---");
weatherStation(90)

// console.log("---broadcast() called. Should say rain---");
// broadcast(() => {announceRain()});

