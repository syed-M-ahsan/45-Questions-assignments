/*Cities: Write a function called describe_city() that accepts the name of a city and its country.
 The function should print a simple sentence, such as Karachi is in Pakistan.
  Give the parameter for the country a default value.
 Call your function for three different cities, at least one of which is not in the default country. */
function describe_city(name, country) {
    if (country === void 0) { country = "pakistan"; }
    return "".concat(name, " is in ").concat(country);
}
var karachi = describe_city("karachi");
console.log(karachi);
var lahore = describe_city("lahore");
console.log(lahore);
var custom = describe_city("manchester", "london");
console.log(custom);
