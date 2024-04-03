// /*More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
//  Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list. */
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
// // for begining
guests.unshift("adnan and his family");
// // for middle
guests.splice(4, 0, "Iran khan");
// for end 
guests.push("nazir and family");
guests.forEach(function (Element) { console.log("".concat(Element, " are invited to dinner")); });
