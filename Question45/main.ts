/*Cars: Write a function that stores information about a car in a Object.
 The function should always receive a manufacturer and a model name.
  It should then accept an arbitrary number of keyword arguments
  . Call the function with the required information and two other name-value pairs,
   such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly */

function carModel(
  manufacturer: string,
  model: number,
  color?: string,
  seatsFabric?: string
) {
  if (seatsFabric) {
    return manufacturer + " " + model + " " + seatsFabric;
  } else if (color) {
    return manufacturer + " " + model + " " + color;
  } else if (seatsFabric && color) {
    return manufacturer + " " + model + " " + color + " " + seatsFabric;
  } else {
    return manufacturer + " " + model;
  }
}
console.log("Car Details:");
console.log(carModel("Vigo", 2022, "red\n"));
console.log("Car Details:");
console.log(carModel("konisegg", 2024, "Chenille\n"));
console.log("Car Details:");
console.log(carModel("lamborghini", 2024, "red\n", "velvet\n"));
console.log("Car Details:");
console.log(carModel("rollsroyce", 2024));
