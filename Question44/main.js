/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides,
  and it should print a summary of the sandwich that is being ordered.
 Call the function three times, using a different number of arguments each time. */
//  function sandwiches(bread:string[],sauces: string[],meat:string[]){
function sandwiches() {
    var ingredrients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredrients[_i] = arguments[_i];
    }
    return (ingredrients);
}
console.log(sandwiches("brown bread", "tahini & gochojung", "beaf"));
console.log(sandwiches("black beans bread", "tahini & gochojung", "chicken"));
console.log(sandwiches("plain bread", "raita & ketchup", "mutton"));
