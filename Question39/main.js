/*City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned */
function city_country(name, country) {
    return "\"".concat(name, "\",\"").concat(country, "\"");
}
var lahore = city_country("lahore", "Pakistan");
console.log(lahore);
var karachi = city_country("karachi", "Pakistan");
console.log(karachi);
var Youniskhan = city_country("Yonis Khan", "Gaza");
console.log(Youniskhan);
