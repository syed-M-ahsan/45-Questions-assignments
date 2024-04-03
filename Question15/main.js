/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations.
 Youll have to think of someone else to invite. */
var guests = [
    "Arsalan and his family",
    "ashraib and his family",
    "zul kifl and his family",
];
// guests.forEach(Element =>{console.log(`${Element} are invited to dinner`)});
var UnableToAttend = "ashraib and his family";
console.log("".concat(UnableToAttend, " won't attend the dinner"));
var newGuest = "zulfiqar ali";
guests[guests.indexOf("ashraib and his family")] = newGuest;
// let guests =[
//     "Arsalan and his family",
//     "ashraib and his family",
//     "zul kifl and his family",
// ];
guests.forEach(function (Element) { console.log("".concat(Element, " are invited to dinner")); });
