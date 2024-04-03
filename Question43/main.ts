/*Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’ names. 
 Because the original array will be unchanged, return the new array and store it in a separate array.
  Call show_magicians() with each array to show that you have one array 
of the original names and one array with the Great added to each magician’s name. */

let magiciansNames: string[] = ["anonymous", "black jack", "alfreno"];

function show_magicians(magiciansNames: string[]) {
  magiciansNames.forEach((name) => {
    console.log(name);
  });
}

function make_great(magiciansNames: string[]) {
  let greatMagicians: string[] = [];
  magiciansNames.forEach((name) => {
    greatMagicians.push(`great ${name}`);
  });
  return greatMagicians;
}

let greatMagicians = make_great(magiciansNames);
console.log(" the original magicians:");
show_magicians(magiciansNames);
console.log("Great magicians:");
show_magicians(greatMagicians);
