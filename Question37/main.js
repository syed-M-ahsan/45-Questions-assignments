/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
 I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
var make_shirt = function (size, text) {
    return "Your T-shirt size is ".concat(size, ", and the text would be \"").concat(text, "\"");
};
var large_shirt = make_shirt("large", "i love Typescript");
var medium_shirt = make_shirt("medium", "I love typescript");
var custom_shirt = make_shirt("custom ", "changed text ");
console.log(large_shirt);
console.log(medium_shirt);
console.log(custom_shirt);
