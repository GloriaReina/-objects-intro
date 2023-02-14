const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

let keyToLookup= "partTime"
let partTimeTeacher= nashvilleSoftwareSchool[keyToLookup]
console.log(partTimeTeacher)