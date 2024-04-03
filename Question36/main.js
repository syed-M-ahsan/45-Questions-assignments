/*T-Shirt: Write a function called make_shirt() that
 accepts a size and the text of a message that should be printed on the shirt.
  The function should print a sentence summarizing
 the size of the shirt and the message printed on it. Call the function */
var make_shirt = function (size, text) {
    return "you shirt size is ".concat(size, " & you printed text would be \"").concat(text, "\"");
};
var T_shirt = make_shirt(22, "i love pakistan");
console.log(T_shirt);
