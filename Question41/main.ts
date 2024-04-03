/*Magicians: Make a array of magician’s names.
 Pass the array to a function called show_magicians(),
  which prints the name of each magician in the array.
 */
let anotherMagicians: string[] =["MagicNinja","King Sientist","pinochio"];
let magiciansNames : string[] =["anonymous","black jack","alfreno"];

function show_magicians(magiciansNames: string[]){
    magiciansNames.forEach(name => {console.log(name)
        
    });
}
show_magicians(magiciansNames);
show_magicians(anotherMagicians);
