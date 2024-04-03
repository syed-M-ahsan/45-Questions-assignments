/*Shrinking Guest List: You just found out that your new dinner
 table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16.
 Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list,
 print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program. */
var guests = [
    "Arsalan and his family",
    "ashraib and his family",
    "zul kifl and his family",
];
var UnableToAttend = "ashraib and his family";
console.log("".concat(UnableToAttend, " won't attend the dinner"));
var newGuest = "zulfiqar ali";
guests[guests.indexOf(UnableToAttend)] = newGuest;
console.log("i found a bigger dinner table!");
// for begining
guests.unshift("adnan and his family");
// for middle
guests.splice(1, 0, "Imran khan");
//for end
guests.push("nazir and family");
guests.forEach(function (Element) {
    console.log("".concat(Element, " are invited to dinner"));
});
console.log("\n\tsorry ! i can only invite two peoples for dinner\n");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("sorry!".concat(removedGuest, ".we can not invite you to oue dinner"));
}
guests.forEach(function (Element) { console.log("".concat(Element, ",you still invited to the dinner")); });
guests.splice(0, guests.length);
console.log(guests);
