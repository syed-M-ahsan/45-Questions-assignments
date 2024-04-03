/*City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned */

function city_country(name:string,country:string){
    return `"${name}","${country}"`
}
let lahore: string= city_country("lahore","Pakistan")
console.log(lahore)

let karachi: string= city_country("karachi","Pakistan")
console.log(karachi)

let Youniskhan: string= city_country("Yonis Khan","Gaza")
console.log(Youniskhan)
