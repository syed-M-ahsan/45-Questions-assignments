/*Cities: Write a function called describe_city() that accepts the name of a city and its country.
 The function should print a simple sentence, such as Karachi is in Pakistan.
  Give the parameter for the country a default value.
 Call your function for three different cities, at least one of which is not in the default country. */

 function describe_city(name:string,country:string="pakistan"){
        return `${name} is in ${country}`
 }

let karachi = describe_city("karachi");
console.log(karachi)

let lahore= describe_city("lahore");
 console.log(lahore)

 let custom =describe_city("manchester","london");
console.log(custom)