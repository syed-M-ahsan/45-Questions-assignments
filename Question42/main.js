/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by
 adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified. */
var magiciansNames = ["anonymous", "black jack", "alfreno"];
function show_magicians(magiciansNames) {
    magiciansNames.forEach(function (name) {
        console.log(name);
    });
}
;
function Great_magicians(magiciansNames) {
    magiciansNames.forEach(function (name) {
        console.log("great ".concat(name));
    });
}
;
Great_magicians(magiciansNames);
show_magicians(magiciansNames);
