//Four seasons

//getting real month
// let actualDate = new Date();
// let actualMonth = actualDate.getMonth();

// if (actualMonth == 11 || actualMonth == 0 || actualMonth == 1) {
//   season = "Winter";
// } else if (actualMonth == 2 || actualMonth == 3 || actualMonth == 4) {
//   season = "Spring";
// } else if (actualMonth == 5 || actualMonth == 6 || actualMonth == 7) {
//   season = "Summer";
// } else if (actualMonth == 8 || actualMonth == 9 || actualMonth == 10) {
//   season = "Autumn";
// } else {
//   season = "unknown season";
// }
// console.log(season);
// //show month name
// let monthName = "";
// switch (actualMonth) {
//   case 0:
//     monthName = "January";
//     break;
//   case 1:
//     monthName = "February";
//     break;
//   case 2:
//     monthName = "March";
//     break;
//   case 3:
//     monthName = "April";
//     break;
//   case 4:
//     monthName = "May";
//     break;
//   case 5:
//     monthName = "June";
//     break;
//   case 6:
//     monthName = "July";
//     break;
//   case 7:
//     monthName = "August";
//     break;
//   case 8:
//     monthName = "September";
//     break;
//   case 9:
//     monthName = "October";
//     break;
//   case 10:
//     monthName = "November";
//     break;
//   case 11:
//     monthName = "December";
//     break;
//   default:
//     monthName = "unknown";
// }
// console.log(monthName);

// let character = "Doctor Strange";
// let power = "";
// switch (character) {
//   case "Captain America":
//     power = "indestructible shield";
//     break;
//   case "Black Widow":
//     power = "Master spy & assasin";
//     break;
//   case "Iron Man":
//     power = "Genius-level intellect";
//     break;
//   case "Thor":
//     power = "the hammer of Thor";
//     break;
//   case "Doctor Strange":
//     power = "Great Wizard";
//     break;
//   default:
//     console.log("Choose your hero!");
// }
// console.log(power);

// let number = 10;

// switch (true) {
//   case number < 0:
//     console.log("Under 0");
//     break;
//   case number >= 0 && number <= 10:
//     console.log("Between 0 and 10");
//     break;
//   case number > 11 && number <= 20:
//     console.log("Between 10 and 20");
//     break;
//   case number > 20:
//     console.log("Over 20");
//     break;
//   default:
//     console.log("out of range");
// }

//Exercise 1

// let today = new Date();
// let actMonth = today.getMonth();
// let year = today.getFullYear();
// daysInMonth = new Date(year, actMonth+1, 0).getDate();
// console.log("This month has: ", daysInMonth, "days")
// if (actMonth = 2){
//   month = "Marzo";
// } else {
//   month = "cualquier mes menos marzo"
// }
// console.log(month)

//Exercise 2

// let mesActual = prompt("Please, ask me what is the current month")
// if (mesActual == "january" || mesActual == "enero") {
//   alert("31 days");
// }else if (mesActual == "february" ||  mesActual == "febrero") {
//   alert("28 days");
// }else if (mesActual == "march" ||  mesActual == "marzo") {
//   alert("31 days");
// }else if (mesActual == "april" ||  mesActual == "abril") {
//   alert("30 days");
// }else if (mesActual == "may" ||  mesActual == "mayo") {
//   alert("31 days");
// }else if (mesActual == "jun" ||  mesActual == "junio") {
//   alert("30 days");
// }else if (mesActual == "july" ||  mesActual == "julio") {
//   alert("31 days");
// }else if (mesActual == "august" ||  mesActual == "agosto") {
//   alert("31 days");
// }else if (mesActual == "september" ||  mesActual == "septiembre") {
//   alert("30 days");
// }else if (mesActual == "october"||  mesActual == "octubre") {
//   alert("31 days");
// }else if (mesActual == "november" ||  mesActual == "noviembre") {
//   alert("30 days");
// }else if (mesActual == "december" ||  mesActual == "diciembre") {
//   alert("31 days");
// }else {
//   alert("That's not a real month!");
// }

//Exercise 3 (en este ejercicio se podría quitar del segundo case el >=15 porque ya en el primero
//no está incluido con lo que se puede obviar, pues será menor de 25 o será error y nos ahorramos una línea)

// let extTemperature = prompt ("What temperature is it?");
// console.log(typeof extTemperature)
// switch (true) {
//   case extTemperature < 15:
//     alert("Warm up");
//     break;
//   case extTemperature >= 15 && extTemperature <= 25:
//     alert("Enjoy the weather!");
//     break;
//   case extTemperature > 25:
//     alert("Cool down");
//     break;
//   default:
//     alert("please, tell me what temperature is it");
// }

//Exercise 4

// let isGreen = "centinela"
// switch (false) {
//   case isGreen !== "centinela":
//     console.log("please await");
//     break;
//   case isGreen == "centinela":
//     console.log("Cross the road");
//     break;
// }

//Option 4.2 mejor que el primero, es incorrecto poner el booleano en el if.

// let isGreen = true;
// if (isGreen){
//   console.log("Cross the road");
// }else{
//   console.log("Please await");
// }

//Exercise 5
//.toFixed(2) redondea a 2 cifras

// let temperature = "bodyTemperature";
// let conversion = "";

// switch (temperature){
//   case "absoluteZero":
//     conversion = ((-273.15 * 1.8 + 32).toFixed(2));
//     console.log(`absolute zero degrees are ${conversion} ºF`);
//     break;
//   case "freezingPoint":
//     conversion = ((0 * 1.8 + 32).toFixed(2));
//     console.log(`freezing point degrees are ${conversion} ºF`);
//     break;
//   case "bodyTemperature":
//     conversion = ((37 * 1.8 + 32).toFixed(2));
//     console.log(`the body temperature is ${conversion} ºF`);
//     break;
//   case "boillingPoint":
//     conversion = ((100 * 1.8 +32).toFixed(2));
//     console.log(`boilling point degrees are ${conversion} ºF`)
//   default:
//     console.log(unknown)
// }

//Exercise 6

// let email = "tolkien@lordofrings.com";
// let password = "aNBR6ZeWPY";
// let userEmail = prompt("Please, insert your email");
// let userPassword = prompt ("Please insert your password");
// if (userEmail == email && userPassword == password) {
//   alert("Welcome Mr. Tolkien");
// }else if (userEmail !== email || userPassword !== password){
//   alert("Wrong password or username");
// }

//Exercise 7
//Si quitamos los break, saldrán todos los resultados uno debajo del otro si se pone
//la primera variable claro.

// let currency = "dolar";
// let euro = 200;
// let change = "";

// switch (currency) {
//   case "dolar":
//     change = (euro * 1.10).toFixed(2);
//     console.log(`${euro} euros son ${change} dólares al cambio`);
//     // break;
//   case "yen":
//     change = (euro * 132.87).toFixed(2);
//     console.log(`${euro} euros son ${change} yenes al cambio`);
//     // break;
//   case "libra":
//     change = (euro * 0.83).toFixed(2);
//     console.log(`${euro} euros son ${change} libras esterlinas al cambio`);
//     // break;
//   case "franco":
//     change = (euro * 1.03).toFixed(2);
//     console.log(`${euro} euros son ${change} francos suizos al cambio`);
//     // break;
//   default:
//     console.log(unknown);
// }

//Exercise 8

// let number1  = prompt ("Please write one number");
// let number2 = prompt ("Please, write another one");
// let operation = prompt ("Please, choose between: +, -, x or /");
// let result = "";
// let add = "+";
// let substract = "-";
// let multiply = "*";
// let divide = "/";

// if (operation == add){
//   result = parseInt(number1) + parseInt(number2);
//   console.log(result)
// }else if (operation == substract){
//   result = number1 - number2;
//   console.log(result);
// }else if (operation == multiply){
//   result = (number1 * number2);
//   console.log(result);
// }else if (operation == divide){
//   result = (number1 / number2);
//   console.log(result);
// }

//Exercise 8 , pero bien hecho

// let num1 = prompt("Please, enter the first number");
// let num2 = prompt("Please, enter the second number");
// let operation = prompt("Please, choose one option: add, substract, multiply or divided");

// switch (operation) {
//   case "add":
//     console.log(parseFloat(num1) + parseFloat(num2));
//     break;
//   case "substract":
//     console.log(parseFloat(num1) - parseFloat(num2));
//     break;
//   case "multiply":
//     console.log(parseFloat(num1) * parseFloat(num2));
//     break;
//   case "divie":
//     console.log(parseFloat(num1) / parseFloat(num2));
//     break;
//   default:
//     console.log("please choose a valid option.");
// }

//Exercise Opt "califications"

// let califications = prompt("Please, enter your calification");
// switch (parseInt(califications)) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     alert("failure")
//     break;
//   case 5:
//     alert("passed");
//     break;
//   case 6:
//     alert("well");
//     break;
//   case 7:
//   case 8:
//     alert("remarkable");
//     break;
//   case 9:
//   case 10:
//     alert("outstanding");
//     break;
//   default:
//     alert("out of range");
//     break
// }

//Exercise 9

// let data = prompt("Please enter DNI or NIE:");
// //Verify data length, must be 9 char
// if (data.length == 9){
// //Verify if data beggins by T or X
//   if (data.charCodeAt(0) == 84 || data.charCodeAt(0) == 88) {
//     //Checking if the last char is a letter too
//     if (
//       // data.charCodeAt(data.length -1) >= 65 &&
//       // data.charCodeAt(data.length -1) <= 90 
//       65 <=
//       datadata.charCodeAt(data.length - 1) <=
//       90
//     ){
//       //Checking if the other part of the string are numbers
//       if (
//       data.charCodeAt(1) >= 48 &&
//       data.charCodeAt(1) <= 57 &&
//       data.charCodeAt(2) >= 48 &&
//       data.charCodeAt(2) <= 57 &&
//       data.charCodeAt(3) >= 48 &&
//       data.charCodeAt(3) <= 57 &&
//       data.charCodeAt(4) >= 48 &&
//       data.charCodeAt(4) <= 57 &&
//       data.charCodeAt(5) >= 48 &&
//       data.charCodeAt(5) <= 57 &&
//       data.charCodeAt(6) >= 48 &&
//       data.charCodeAt(6) <= 57 &&
//       data.charCodeAt(7) >= 48 &&
//       data.charCodeAt(7) <= 57 &&
//       data.charCodeAt(8) >= 48 &&
//       data.charCodeAt(8) <= 57 
//     ){
//       console.log("valid NIE");
//     }else{
//       console.log("Please, check your NIE");
//     }
//     }

// }else{
//   console.log("Please enter a valid data")
// }

//Exercise 10
// Setting max and min possible values
let max = 6;
let min = 1;
// Generating a random number between max and min
let randomNumber1 = Math.floor(Math.random() * max) + min;
let randomNumber2 = Math.floor(Math.random() * max) + min;
console.log(randomNumber1);
console.log(randomNumber2);
if(randomNumber1 > randomNumber2){
  console.log("Player 1 wins!");
}else if (randomNumber1 < randomNumber2){
  console.log("Player 2 wins!");
}else {
  console.log("Draw");
}
