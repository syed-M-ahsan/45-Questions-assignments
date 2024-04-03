/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
 I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */

 let make_shirt=(size: string,text: string)=>{
    return `Your T-shirt size is ${size}, and the text would be "${text}"`
 }

 let large_shirt: string = make_shirt("large","i love Typescript");
 let medium_shirt: string = make_shirt("medium","I love typescript")
 let custom_shirt: string = make_shirt( "custom ","changed text ")

 console.log(large_shirt)
 console.log(medium_shirt)
 console.log(custom_shirt)