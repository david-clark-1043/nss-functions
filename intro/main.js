const fillGasTank = (gallons) => {
    if(gallons <= 15) {
        console.log(`I filled the tank with ${gallons} of gas`)
    } else {
        console.log(`You cannot add this much gas to the tank`);
    }
}

fillGasTank(16)