/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by 
 adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified. */
 let magiciansNames : string[] =["anonymous","black jack","alfreno"];

function show_magicians(magiciansNames: string[]){
    magiciansNames.forEach(name => {console.log(name)
        
    })};

    function Great_magicians(magiciansNames: string[]){
        magiciansNames.forEach(name => {console.log(`great ${name}`)
            
        })}; 

    Great_magicians(magiciansNames)
    show_magicians(magiciansNames)