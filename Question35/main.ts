/*
Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.

• Add a line at the end of your program stating what these animals have in common. You could print 
   a sentence such as Any of these animals would make a great pet!

 */

let Animals = ["dog", "cat", "rabbit"];

const animal_Quality = Animals.forEach((speciality) => {
  if (speciality == "dog") {
    console.log(`${speciality} would be loyal if you are an caravan owner`);
  } else if (speciality == "cat") {
    console.log(
      `${speciality} would be adorable and make you love with itself`
    );
  } else if (speciality == "rabbit") {
    console.log(
      `${speciality} would be adorable and make you slim by it works`
    );
  }
});
