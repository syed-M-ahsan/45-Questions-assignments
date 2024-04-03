/*Magicians: Make a array of magician’s names.
 Pass the array to a function called show_magicians(),
  which prints the name of each magician in the array.
 */
var anotherMagicians = ["MagicNinja", "King Sientist", "pinochio"];
var magiciansNames = ["anonymous", "black jack", "alfreno"];
function show_magicians(magiciansNames) {
    magiciansNames.forEach(function (name) {
        console.log(name);
    });
}
show_magicians(magiciansNames);
show_magicians(anotherMagicians);
