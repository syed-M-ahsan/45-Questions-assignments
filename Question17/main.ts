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

let guests = [
  "Arsalan and his family",
  "ashraib and his family",
  "zul kifl and his family",
];
let UnableToAttend = "ashraib and his family";
console.log(`${UnableToAttend} won't attend the dinner`);
let newGuest = "zulfiqar ali";
guests[guests.indexOf(UnableToAttend)] = newGuest;
console.log("i found a bigger dinner table!");
// for begining
guests.unshift("adnan and his family");
// for middle
guests.splice(1, 0, "Imran khan");
//for end
guests.push("nazir and family");
guests.forEach((Element) => {
  console.log(`${Element} are invited to dinner`);
});

console.log("\n\tsorry ! i can only invite two peoples for dinner\n");
while(guests.length >2){
   let removedGuest = guests.pop();
   console.log(`sorry!${removedGuest}.we can not invite you to oue dinner`);
}
guests.forEach(Element =>{console.log(`${Element},you still invited to the dinner`)});
guests.splice(0,guests.length);
console.log(guests);
