const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height)
console.log(wardrobe.manufacturer)
console.log(wardrobe.contents)
console.log(wardrobe.depth)
console.log(wardrobe.width)


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`${empireStateBuilding.stories},${empireStateBuilding.height}, ${empireStateBuilding.squareFeet},${empireStateBuilding.eastWestLength},${empireStateBuilding.northSouthLength}`)

let keyToLookUp1 = "cost"
let keyToLookUp2 = "owner"
let keyToLookUp3 = "address"
let keyToLookUp4 = "architect"
let keyToLookUp5 = "constructionDate"

let empireStateBuildingCost= empireStateBuilding[keyToLookUp1]
let empireStateBuildingOwner= empireStateBuilding[keyToLookUp2]
let empireStateBuildingLocation= empireStateBuilding[keyToLookUp3]
let empireStateBuildingArchitect= empireStateBuilding[keyToLookUp4]
let empireStateBuildingDate= empireStateBuilding[keyToLookUp5]

console.log(empireStateBuildingArchitect,empireStateBuildingCost,empireStateBuildingDate,empireStateBuildingLocation,empireStateBuildingOwner)




const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

let keyToLookup= "instructors"

//created a variable that holds the value of instructors which are the full time and part time arrays
let fullPartTimeinstructors= nashvilleSoftwareSchool[keyToLookup]
console.log(fullPartTimeinstructors)

//used property names to access the specific property value in the object instructor, and then used indexing to access the item within the specific arrays
let instructor1= fullPartTimeinstructors.partTime[0]
let instructor2= fullPartTimeinstructors.fullTime[4]

console.log(instructor1)
console.log(instructor2)

//Above code using bracket notation vs dot notation....must specify string with '' bc you have the option here of accessing with a variable
/*let keyToLookup= "instructors"
let fullPartTimeinstructors= nashvilleSoftwareSchool[keyToLookup]
console.log(fullPartTimeinstructors)

let instructor1= fullPartTimeinstructors['partTime'][0]
let instructor2= fullPartTimeinstructors['fullTime'][4]

console.log(instructor1)
console.log(instructor2)*/