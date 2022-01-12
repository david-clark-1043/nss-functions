
// Initial Incorrect Code to Fix

// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (const location of locations) {

//     if (location[0] > 2) {
//         const invalidLocation = true
//     }

//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
// }

//fixed code
// moved if(invalidLocation) to within the other if(loca..) block so that invalidLocation can be called
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (const location of locations) {

    if (location[0] > 2) {
        const invalidLocation = true
        if (invalidLocation) {
            console.log("This location is invalid")
        }
    }


}