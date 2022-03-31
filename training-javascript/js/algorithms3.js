//----------
//EXERCISES MOD 3
//----------

//Exercise 3.1.

// //User properties

// let userMaxLimit = parseInt(prompt("Please, enter max limit"));
// let userMinLimit = parseInt(prompt("Please, enter min limit"));
// //Getting a Random Number with this Function

// const randomNumber = function (min, max) {
//     return Math.floor((Math.random() * (max - min + 1)) + min);
// }
// //Preparing array

// result = new Array (20)

// //Let's create random elements for array

// for (i=0 ; i < 20; i++) {
//     randomArrayElements = randomNumber(userMinLimit, userMaxLimit);
//     console.log(randomArrayElements)
//     result[i] = randomArrayElements
// }
//  console.log(result)

//Exercise 3.2

// //Getting Hour and minutes from system

// let systemHour = new Date();
// let hour = systemHour.getHours();
// let minute = systemHour.getMinutes();
// let adjustedHour = `${hour}:`

// //Transforme Hours and Minutes in a decimal number

// let HoursToMinutes = (hour*60) + minute
// // let HoursToMinutes = 0
// console.log(HoursToMinutes)

// //Preparing Function for decimal number from hours and minutes reference

// const referenceHour = function(h, min){
//     return (h*60)+min
// }
// let firstHour = referenceHour(6,0);
// let secondHour = referenceHour(11, 59);
// let thirdHour = referenceHour(12, 0);
// let fourthHour = referenceHour(20, 59);
// let fifthHour = referenceHour(21, 0);
// let lastHour = referenceHour(5, 59);

// //Let's show the message

// if (HoursToMinutes >= firstHour && HoursToMinutes <= secondHour){
//     alert("¡Buenos días!")
// }else if (HoursToMinutes >= thirdHour && HoursToMinutes <= fourthHour){
//     alert("¡Buenas tardes!");
// }else if (HoursToMinutes >= fifthHour){
// // }else{
//     alert("¡Buenas noches!")
// }else if (HoursToMinutes <= lastHour ){
//     alert("¡Buenas noches!")
// }else{
//     ("There is a space-time anomaly")
// }

let hexColor = "";
let hCLength = 6;

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(letterOrNumber)
// for ( j= 0; j < 10; j++){
for (let i = 0; i < hCLength; i++) {
    switch (randomNumber(1, 2)) {
      case 1:
        hexColor += String.fromCharCode(randomNumber(48, 57));
        break;
      case 2:
        hexColor += String.fromCharCode(randomNumber(97, 102));
        break;  
    }for ( j= 0; j < 10; j++){
console.log(`#${hexColor}`)
}
  }
// }
