/*Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array.
  Call show_magicians() with each array to show that you have one array
of the original names and one array with the Great added to each magician’s name. */
var magiciansNames = ["anonymous", "black jack", "alfreno"];
function show_magicians(magiciansNames) {
    magiciansNames.forEach(function (name) {
        console.log(name);
    });
}
function make_great(magiciansNames) {
    var greatMagicians = [];
    magiciansNames.forEach(function (name) {
        greatMagicians.push("great ".concat(name));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magiciansNames);
console.log(" the original magicians:");
show_magicians(magiciansNames);
console.log("Great magicians:");
show_magicians(greatMagicians);
