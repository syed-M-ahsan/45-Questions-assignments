/*T-Shirt: Write a function called make_shirt() that
 accepts a size and the text of a message that should be printed on the shirt.
  The function should print a sentence summarizing
 the size of the shirt and the message printed on it. Call the function */

 const make_shirt = ( size: number,text: string)=>{
    return `you shirt size is ${size} & you printed text would be "${text}"`
 }

 const T_shirt: any = make_shirt(22,"i love pakistan");
 console.log(T_shirt);
 