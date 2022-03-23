//Exercise 1

// let today = new Date();
// let daysInCurrentMonth = newDate(
//     today.getFullYear(),
//     today.getMonth()+1,
//     0).getDate();
// console.log("this month has: ", daysInCurrentMonth, "days");

//Other Solution

// let today2 = new Date();
// let getCurrentMonth = today2.getMonth();
// let answer = "the actual month is: ";
// switch (getCurrentMonth) {
//   case 0:
//     console.log(answer + "january and has " + 31 + " days");
//     break;
//   case 1:
//     console.log(answer + "february and has " + 28 + " days");
//   case 2:
//     console.log(answer + "march and has " + 31 + " days");
//     break;
//   case 3:
//     console.log(answer + "april and has " + 30 + " days");
//     break;
//   case 4:
//     console.log(answer + "may and has " + 31 + " days");
//     break;
//   case 5:
//     console.log(answer + "jun and has " + 30 + " days");
//     break;
//   case 6:
//     console.log(answer + "july and has " + 31 + " days");
//     break;
//   case 7:
//     console.log(answer + "august and has " + 31 + " days");
//     break;
//   case 8:
//     console.log(answer + "september and has " + 30 + " days");
//     break;
//   case 9:
//     console.log(answer + "october and has " + 31 + " days");
//     break;
//   case 10:
//     console.log(answer + "november and has " + 30 + " days");
//     break;
//   case 11:
//     console.log(answer + "december and has " + 31 + " days");
//     break;
//   default:
//     console.log("unknown month");
//     break;
// }

//Exercise 2

// let userChoice = prompt("Please, choose and write a month here")
// console.log(userChoice)
// switch (userChoice.toLowerCase(0)) {
//   case "january":
//     alert("january has 31 days");
//     break;
//   case "february":
//     alert("february has 28 days");
//     break;
//   case "march":
//     alert("march has 31 days");
//     break;
//   case "april":
//     alert("april has 31 days");
//     break;
//   case "may":
//     alert("may has 31 days");
//     break;
//   case "jun":
//     alert("jun has 31 days");
//     break;
//   case "july":
//     alert("july has 31 days");
//     break;
//   case "august":
//     alert("august has 31 days");
//     break;
//   case "september":
//     alert("september has 31 days");
//     break;
//   case "october":
//     alert("october has 31 days");
//     break;
//   case "november":
//     alert("november has 31 days");
//     break;
//   case "december":
//     alert("december has 31 days");
//     break;
//   default:
//     console.log("That's not a real month");
//     break;
// }

//Exercise 3

// let temperature = prompt("what temperature is it out there");
// switch(true){
//     case temperature < 15:
//         alert("Warm up");
//         break;
//     case temperature <= 25:
//         alert("Enjoy the weather");
//         break;
//     case temperature > 25:
//         alert("Cool down!");
//         break;
//     default:
//         alert("Write a real data");
//         break;
// }

//Exercise 4

// let isGreen = true;

// if (isGreen == true){
//     console.log("Cross the road")
// }else if (isGreen !== true){
//     console.log("Please wait");
// }else{
//     console.log("the traffic lights are broken")
// }

//Giovanna answer

// let actualDate = new Date();
// let currentTime = actualDate.getMinutes();
// console.log(currentTime);
// let isGreen = currentTime % 2 == 0;
// if (isGreen == true){
//     console.log("Cross the road");
// }else if (isGreen !== true){
//     console.log("Please Wait");
// }else{
//     console.log("The traffic lights are broken")
// }

//Exercise 5

// let temperature = "Body Temperature";
// switch (temperature){
//     case "Absolute Zero":
//     console.log((273.15*9)/5 + 32);
//     break;
//     case "Freezing Point":
//     console.log((0*9)/5 + 32);
//     break;
//     case "Body Temperature":
//     console.log((37*9) / 5 + 32 );
//     break;
//     case "Boiling Point":
//     console.log((100 * 9) / 5 + 32);
//     break;
//     default:
//         console.log("Unknown data")
// }

//Erika answer

// const celsius = prompt("Write a temperature in degrees celsius");
// //let degreesCelsius = parseFloat(prompt("Convert to fahrenheit"));
// const fahrenheit  = (celsius * 9 ) / 5 + 32;
// alert(`${celsius} degrees celsius is equal to ${fahrenheit} degrees fahrenheit`);

//Exercise 6

// let email = "tolkien@lordsofrings.com";
// let password = "aNBR6ZeWPY";
// let userEmail = prompt("Please, write your email");
// let userPassword = prompt("Please, write your password")
// if (email == userEmail && password == userPassword){
//     alert("Welcome, Mr. Tolkien");
// }else{
//     alert("Wrong email or password")
// }

//Julio answer

// let mail = prompt("please, enter your email");
// let password= prompt ("please, enter your password");
// if (mail == "tolkien@lordofrings.com" && password == "aNBR6ZeWPY"){
//     alert("Welcome, Mr. Tolkien");
// }else{
//     alert("Wrong email or password");
// }

//Exercise 7

// let money = 200;
// let convertTo = "dollar";
// let dollar = 1.1;
// let yen = 132.87;
// let libra = 0.83;
// let franco = 1.03;
// switch (convertTo) {
//   case "dollar":
//     console.log(`The value of ${money} in dollars is: `, money * dollar);
//   case "yen":
//     console.log(`The value of ${money} in yens is: `, money * yen);
//   case "libra":
//     console.log(`The value of ${money} in libras is: `, money * libra);
//   case "franco":
//     console.log(`The value of ${money} in swiss francs is: `, money * franco);
//   default:
//     console.log("You haven't all that money");
//     break;
// }

//Exercise 8

// let num1 = parseFloat(prompt("Please enter the first number"));
// let num2 = parseFloat(prompt("Please enter the second number"));
// let operation = prompt(
//   "Please, write one of the following options: add, substract, multiply and divide"
// );
// switch (operation.toLowerCase()) {
//   case "add":
//     alert(num1 + num2);
//     break;
//   case "substract":
//     alert(num1 - num2);
//     break;
//   case "multiply":
//     alert(num1 * num2);
//     break;
//   case "divide":
//     alert(num1 / num2);
//     break;
//   default:
//     alert("Please, choose a valid option");
// }

//Exercise 9

// let identificacion = prompt(
//   "¿Usted se va a identificar con el DNI o con el NIE"
// );
// switch (identificacion.toLocaleUpperCase()) {
//   case "DNI":
//     var DNI = prompt("Introduzca su DNI");
//     if (
//       DNI.charCodeAt(0) >= 48 &&
//       DNI.charCodeAt(0) <= 57 &&
//       DNI.charCodeAt(1) >= 48 &&
//       DNI.charCodeAt(1) <= 57 &&
//       DNI.charCodeAt(2) >= 48 &&
//       DNI.charCodeAt(2) <= 57 &&
//       DNI.charCodeAt(3) >= 48 &&
//       DNI.charCodeAt(3) <= 57 &&
//       DNI.charCodeAt(4) >= 48 &&
//       DNI.charCodeAt(4) <= 57 &&
//       DNI.charCodeAt(5) >= 48 &&
//       DNI.charCodeAt(5) <= 57 &&
//       DNI.charCodeAt(6) >= 48 &&
//       DNI.charCodeAt(6) <= 57 &&
//       DNI.charCodeAt(7) >= 48 &&
//       DNI.charCodeAt(7) <= 57 &&
//       DNI.charCodeAt(8) >= 65 &&
//       DNI.charCodeAt(8) <= 90
//     ) {
//       alert("Te has identificado correctamente");
//     } else {
//       alert("Tu número de DNI es incorrecto");
//     }
//     break;
//   case "NIE":
//     var NIE = prompt("Introduzca su NIE");
//     if (
//       (NIE.charCodeAt(0) == 84 || NIE.charCodeAt(0) == 88) &&
//       NIE.charCodeAt(1) >= 48 &&
//       NIE.charCodeAt(1) <= 57 &&
//       NIE.charCodeAt(2) >= 48 &&
//       NIE.charCodeAt(2) <= 57 &&
//       NIE.charCodeAt(3) >= 48 &&
//       NIE.charCodeAt(3) <= 57 &&
//       NIE.charCodeAt(4) >= 48 &&
//       NIE.charCodeAt(4) <= 57 &&
//       NIE.charCodeAt(5) >= 48 &&
//       NIE.charCodeAt(5) <= 57 &&
//       NIE.charCodeAt(6) >= 48 &&
//       NIE.charCodeAt(6) <= 57 &&
//       NIE.charCodeAt(7) >= 48 &&
//       NIE.charCodeAt(7) <= 57 &&
//       NIE.charCodeAt(8) >= 65 &&
//       NIE.charCodeAt(8) <= 90
//     ) {
//       alert("Te has identificado correctamente");
//     } else {
//       alert("Tu número NIE es incorrecto");
//     }
//     break;
//   default:
//     alert("opción incorrecta");
// }

// Fran answer

// let userNieDni = prompt("Please, write your DNI or NIE");
// if (userNieDni.length == 9) {
//     let firstCharacter = userNieDni.charCodeAt(0);
//     let lastCharacter = userNieDni.charCodeAt(userNieDni.length-1)
//     //if NIE
//     if (
//         (firstCharacter == 84 || firstCharacter == 88) &&
//         !isNaN(userNieDni.substring(1, userNieDni.length -1)) &&
//         lastCharacter >= 65 &&
//         lastCharacter <= 90
//     ){
//         alert("Your NIE is valid");
//     }
//     //if DNI
//     else if (
//         !isNaN(userNieDni.substring(0,userNieDni.length -1)) &&
//         lastCharacter >= 65 &&
//         lastCharacter <= 90
//     ){
//         alert("Your DNI is valid");
//     } else {
//         alert("Your DNI or NIE is not valid");
//     }
// } else {
//     alert("YOur DNI or NIE is not valid");
// }

//Exercise 10

//Setting max and min possible values
let max = 10;
let min = 1;
//Generation a random number between max and min
let randomNumber1 = Math.floor(Math.random() * max) + min;
let randomNumber2 = Math.floor(Math.random() * max) + min;

console.log(randomNumber1);
console.log(randomNumber2);
if (randomNumber1 > randomNumber2){
    console.log("Player 1 wins!");
}else if (randomNumber1 < randomNumber2) {
    console.log("Player 2 wins!");
}else {
    console.log("draw");
}
 