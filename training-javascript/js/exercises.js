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
// let max = 6;
// let min = 1;
// //Generation a random number between max and min
// let randomNumber1 = Math.floor(Math.random() * max) + min;
// let randomNumber2 = Math.floor(Math.random() * max) + min;

// console.log(randomNumber1);
// console.log(randomNumber2);
// if (randomNumber1 > randomNumber2){
//     console.log("Player 1 wins!");
// }else if (randomNumber1 < randomNumber2) {
//     console.log("Player 2 wins!");
// }else {
//     console.log("draw");
// }

//MODULE 2 LOOPS

//Exercise 1

// let string = "palindrome"
// for (firstLetter = 0; firstLetter <= string.length-1; firstLetter++){
//     console.log(`${firstLetter+1}. ${string.charAt(firstLetter)}`);
// }

//EXERCISE 2.1

// let string = "no lemon no melon"
// let init = string.length
// let string2 = string.split(" ").join("")
// for (init; init >= 0; init--){
//     console.log(`${string2.charAt(init)}`);
// }

//EXERCISE 2.2 TEACHER

// let palindrome = "no lemon, no melon";
// let invertPal = "";
// for(let i = palindrome.length -1; i >= 0; i--){
//     invertPal += palindrome[i];
// }
// console.log(invertPal);

//EXERCISE 2.2

// let repeat = 4 ;
// for (var i=0; i < repeat; i++){
//     console.log("****");
// }
//Busqué la opción en la consola de desagrupar los elementos repetidos

//JORGE ANSWER 2.2

// let msg = "";
// let side = 10;
// for (let i = 0; i < side; i++) {
//   for (let j = 0; j < side; j++) {
//     msg = msg + "* ";
//   }
//   msg = msg + "\n";
// }
// console.log(msg);

//DRAWING WITH ASTERIKS

// let base = 8
// let base2 = 8
// for (let i = 0; i < base2; i++) {
//     let picture = " ";
//     for (let j =0; j < base2 - i; j++){
//       picture += " ";
//     }
//     for (let k = 0; k <= i; k++){
//       picture += "* ";
//     }
//     console.log(picture);
// }
// for (let i = 3; i < base; i++) {
//     let picture = " ";
//     for (let j =0; j < base - i; j++){
//       picture += " ";
//     }
//     for (let k = 0; k <= i; k++){
//       picture += "* ";
//     }
//     console.log(picture);
// }
// for (let i = 3; i < base; i++) {
//     let picture = " ";
//     for (let j =0; j < base - i; j++){
//       picture += " ";
//     }
//     for (let k = 0; k <= i; k++){
//       picture += "* ";
//     }
//     console.log(picture);
// }
// let msg = "";
// let side = 3;
// for (let i = 0; i < side; i++) {
// //   for (let j = 0; j < side; j++) {
//     msg = msg + "        ***";
//   msg = msg + "\n";
// }
// console.log(msg);


//TEACHER SOLUTION EXERCISE 2.3

// let asteriks = "";
// for(let i = 0; i < 4; i++){
//     asteriks += "****\n";
// }
// console.log(asteriks);

//EXERCISE 2.4

// t17M = 20.5;
// t18M = 18.1;
// t19M = 18.9;
// t20M = 18.8;
// t21M = 19.5;
// t22M = 19.2;
// t23M = 18.5;

// let lastDay = 23;
// let firstDay = 17;
// for (firstDay; firstDay <= lastDay; firstDay++) {
//   if (firstDay <= lastDay && firstDay == 17) {
//     console.log(`El día ${firstDay} hizo ${t17M} ºC`);
//   }else if (firstDay <= lastDay && firstDay == 18) {
//     console.log(`El día ${firstDay} hizo ${t18M} ºC`);
//   }else if (firstDay <= lastDay && firstDay == 19) {
//     console.log(`El día ${firstDay} hizo ${t19M} ºC`);
//   }else if (firstDay <= lastDay && firstDay == 20) {
//     console.log(`El día ${firstDay} hizo ${t20M} ºC`);
//   }else if (firstDay <= lastDay && firstDay == 21) {
//     console.log(`El día ${firstDay} hizo ${t21M} ºC`);
//   }else if (firstDay <= lastDay && firstDay == 22) {
//     console.log(`El día ${firstDay} hizo ${t22M} ºC`);
//   }else if (firstDay <= lastDay && firstDay == 23) {
//     console.log(`El día ${firstDay} hizo ${t23M} ºC`);
//   }else {
//     console.log("error 975 temperature not found");
//   }
// }console.log(`${((t17M + t18M + t19M + t20M + t21M + t22M + t23M) / 7).toFixed(2)} grados es la media de temperatura de la última semana`);

//TEACHER SOLUTION EX 2.4

// let mediaTemp = 0;
// let counter = 0;
// for(
//     let i = 18,
//     mar18 = 17,
//     mar19 = 17,
//     mar20 = 16,
//     mar21 = 14,
//     mar22 = 17,
//     mar23 = 15,
//     mar24 = 14;
//     i < 25;
//     i++, counter++
// ){
//     mediaTemp += eval(`mar${i}`);
// }
// console.log("7-days Average Temperature  ", mediaTemp/counter);

//EXERCISE 2.5

// // Setting max and min possible values
// let max = 10;
// let min = 0;
// //Generation a random number between max and min
// let randomNumber = Math.floor(Math.random() * max) + min;
// console.log(randomNumber);
// //Let's Play
// let chances = 3;
// for(chances = 3; chances >= 1 ;chances-- ){
//     let answer = prompt(`Please, enter a number between 0 and 10, you have ${chances} chances`);
//     if (randomNumber != answer && chances > 1){
//         alert("Try again");
//     }else if (randomNumber == answer){
//         alert("You win!");
//         break;
//     }else {
//         alert("Sorry, Good luck in love");
//     }
// }

//EXERCISE 2.6 POR MÍ

// let password = "";
// let numPass = parseInt(
//   prompt(
//     "Please, write the number of characters between 8 and 16 for your password"
//   )
// );
// let lastPass = 16;
// let optMinus = prompt(
//   "Do you want lowercase characters? please write Yes or Not"
// ).toLowerCase();
// let optMayus = prompt(
//   "Do you want capital letters? Please, write Yes or Not"
// ).toLowerCase();
// let optNum = prompt(
//   "Do you want numbers? Please, write Yes or Not"
// ).toLowerCase();
// let optSym = prompt(
//   "Do you want symbols? Please, write Yes or Not"
// ).toLowerCase();
// for (numPass; numPass < lastPass; numPass++) {
//   if (
//     optMinus == "yes" &&
//     optMayus == "yes" &&
//     optNum == "yes" &&
//     optSym == "yes"
//   ) {
//     for (let i = 0; i < numPass; i++) {
//       password += String.fromCharCode(
//         Math.floor(Math.random() * (122 - 33 + 1) + 33)
//       );
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "yes" &&
//     optMayus == "yes" &&
//     optNum == "yes" &&
//     optSym == "not"
//   ) {
//     for (i = 0; i < numPass; i++) {
//       switch (Math.floor(Math.random() * 3) + 1) {
//         case 1:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (57 - 48 + 1) + 48)
//           );
//           break;
//         case 2:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (90 - 65 + 1) + 65)
//           );
//           break;
//         case 3:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (122 - 97 + 1) + 97)
//           );
//           break;
//       }
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "not" &&
//     optMayus == "yes" &&
//     optNum == "yes" &&
//     optSym == "yes"
//   ) {
//     for (i = 0; i < numPass; i++) {
//       switch (Math.floor(Math.random() * 3) + 1) {
//         case 1:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (57 - 48 + 1) + 48)
//           );
//           break;
//         case 2:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (90 - 65 + 1) + 65)
//           );
//           break;
//         case 3:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (47 - 33 + 1) + 33)
//           );
//           break;
//       }
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "yes" &&
//     optMayus == "not" &&
//     optNum == "yes" &&
//     optSym == "yes"
//   ) {
//     for (i = 0; i < numPass; i++) {
//       switch (Math.floor(Math.random() * 3) + 1) {
//         case 1:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (57 - 48 + 1) + 48)
//           );
//           break;
//         case 2:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (122 - 97 + 1) + 97)
//           );
//           break;
//         case 3:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (47 - 33 + 1) + 33)
//           );
//           break;
//       }
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "yes" &&
//     optMayus == "yes" &&
//     optNum == "not" &&
//     optSym == "yes"
//   ) {
//     for (i = 0; i < numPass; i++) {
//       switch (Math.floor(Math.random() * 3) + 1) {
//         case 1:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (90 - 65 + 1) + 65)
//           );
//           break;
//         case 2:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (122 - 97 + 1) + 97)
//           );
//           break;
//         case 3:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (47 - 33 + 1) + 33)
//           );
//           break;
//       }
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "yes" &&
//     optMayus == "yes" &&
//     optNum == "not" &&
//     optSym == "not"
//   ) {
//     for (i = 0; i < numPass; i++) {
//       switch (Math.floor(Math.random() * 2) + 1) {
//         case 1:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (90 - 65 + 1) + 65)
//           );
//           break;
//         case 2:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (122 - 97 + 1) + 97)
//           );
//           break;
//       }
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "yes" &&
//     optMayus == "yes" &&
//     optNum == "not" &&
//     optSym == "not"
//   ) {
//     for (i = 0; i < numPass; i++) {
//       switch (Math.floor(Math.random() * 2) + 1) {
//         case 1:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (57 - 48 + 1) + 48)
//           );
//           break;
//         case 2:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (47 - 33 + 1) + 33)
//           );
//           break;
//       }
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "yes" &&
//     optMayus == "not" &&
//     optNum == "yes" &&
//     optSym == "not"
//   ) {
//     for (i = 0; i < numPass; i++) {
//       switch (Math.floor(Math.random() * 2) + 1) {
//         case 1:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (122 - 97 + 1) + 97)
//           );
//           break;
//         case 2:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (57 - 48 + 1) + 48)
//           );
//           break;
//       }
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "not" &&
//     optMayus == "yes" &&
//     optNum == "not" &&
//     optSym == "yes"
//   ) {
//     for (i = 0; i < numPass; i++) {
//       switch (Math.floor(Math.random() * 2) + 1) {
//         case 1:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (90 - 65 + 1) + 65)
//           );
//           break;
//         case 2:
//           password += String.fromCharCode(
//             Math.floor(Math.random() * (47 - 33 + 1) + 33)
//           );
//           break;
//       }
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "yes" &&
//     optMayus == "not" &&
//     optNum == "not" &&
//     optSym == "not"
//   ) {
//     for (i = 0; i < numPass; i++) {
//       password += String.fromCharCode(
//         Math.floor(Math.random() * (122 - 97 + 1) + 97)
//       );
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "not" &&
//     optMayus == "yes" &&
//     optNum == "not" &&
//     optSym == "not"
//   ) {
//     for (i = 0; i < numPass; i++) {
//       password += String.fromCharCode(
//         Math.floor(Math.random() * (90 - 65 + 1) + 65)
//       );
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "not" &&
//     optMayus == "not" &&
//     optNum == "yes" &&
//     optSym == "not"
//   ) {
//     for (i = 0; i < numPass; i++) {
//       password += String.fromCharCode(
//         Math.floor(Math.random() * (57 - 48 + 1) + 48)
//       );
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "not" &&
//     optMayus == "not" &&
//     optNum == "not" &&
//     optSym == "yes"
//   ) {
//     for (let i = 0; i < numPass; i++) {
//       password += String.fromCharCode(
//         Math.floor(Math.random() * (47 - 33 + 1) + 33)
//       );
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   } else if (
//     optMinus == "not" &&
//     optMayus == "not" &&
//     optNum == "not" &&
//     optSym == "not"
//   ) {
//     for (i = 0; i < numPass; i++) {
//       password += String.fromCharCode(
//         Math.floor(Math.random() * (122 - 97 + 1) + 97)
//       );
//     }
//     alert(`Your password is:  ${password}`);
//     break;
//   }else{
//       alert("error del copón")
//       break;
//   }
// }
//     if (
//       (optMinus =
//         "yes" && optMayus == "yes" && optNum == "yes" && optSim == "not")
//     ) {
//       for (j = 0; j < numPass; j++) {
//         password += String.fromCharCode(
//           Math.floor(Math.random() * (57 - 48 + 1) + 48) ||
//             Math.floor(Math.random() * (90 - 65 + 1) + 65) ||
//             Math.floor(Math.random() * (122 - 97 + 1) + 97)
//         );
//         alert(`Your password is: ${password}`);
//       break;
//       }
//     }

//     if (
//       optMinus == "yes" &&
//       optMayus == "yes" &&
//       optNum == "yes" &&
//       optSim == "yes"
//     ) {
//       for (j = 0; j < numPass; j++) {
//         password += String.fromCharCode(
//           Math.floor(Math.random() * (122 - 33 + 1) + 33)
//         );
//         alert(`Your password is: ${password}`);
//       break;
//       }
//     }
// }

// EXERCISE 2.6

// let length = parseInt(prompt("Please enter the password length (8 - 16)"));
// length = length >= 8 && length <= 16 ? length : 8;
// console.log(length);

// let includeLower = prompt(
//   "Would you like to include lowers (y for yes, n for no)"
// ).toLowerCase();
// let withLowers = includeLower == "n" ? false : true;

// let includeUpper = prompt(
//   "Would you like to include uppers (y for yes, n for no)"
// ).toLowerCase();
// let withUppers = includeUpper == "n" ? false : true;

// let includeNumber = prompt(
//   "Would you like to include numbers (y for yes, n for no)"
// ).toLowerCase();
// let withNumbers = includeNumber == "n" ? false : true;

// let includeSymbol = prompt(
//   "Would you like to include symbols (y for yes, n for no)"
// ).toLowerCase();

// let withSymbols = includeSymbol == "n" ? false : true;

// !withLowers &&
//   !withUppers &&
//   !withNumbers &&
//   !withSymbols &&
//   (withLowers = !withLowers);
// let password = "";
// let repeatedChar = false;
// let countingGenPass = 0;
// while (
//   (withLowers && !/[a-z]/.test(password)) ||
//   (withUppers && !/[A-Z]/.test(password)) ||
//   (withNumbers && !/[0-9]/.test(password)) ||
//   (withSymbols &&
//     !/(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.test(password)) ||
//   repeatedChar
// ) {
//   countingGenPass++;
//   password = "";
//   repeatedChar = false;
//   for (let i = 0, newChar = false; i < length; i++) {
//     while (!newChar) {
//       switch (Math.floor(Math.random() * 4) + 1) {
//         case 1:
//           if (withLowers) {
//             password += String.fromCharCode(
//               Math.floor(Math.random() * (122 - 97 + 1)) + 97
//             );
//             newChar = !newChar;
//           }
//           break;
//         case 2:
//           if (withUppers) {
//             password += String.fromCharCode(
//               Math.floor(Math.random() * (90 - 65 + 1)) + 65
//             );
//             newChar = !newChar;
//           }
//           break;
//         case 3:
//           if (withNumbers) {
//             password += String.fromCharCode(
//               Math.floor(Math.random() * (57 - 48 + 1)) + 48
//             );
//             newChar = !newChar;
//           }
//           break;
//         case 4:
//           if (withSymbols) {
//             password += String.fromCharCode(
//               Math.floor(Math.random() * (47 - 33 + 1)) + 33
//             );
//             newChar = !newChar;
//           }
//           break;
//       }
//     }
//     newChar = !newChar;
//   }
//   for (let i = 0; i < password.length - 1; i++) {
//     if (password[i] == password[i + 1]) {
//       repeatedChar = true;
//       break;
//     }
//   }
// }
// alert(`Your password: ${password} in ${countingGenPass} attemps.`);

//EJERCICIOS CON OBJETOS Y ARRAYS MODULO 3

//EXERCISE 3.1.

//Escribe un objeto person,que contenga, nombre, apellidos, 
//edad, dirección {tipo vía,nombre vía, num, cp, localidad}, teléfono

//para variar un número habría que cambiarlo en plan person.phone[2] = número tlf

//Crear un objeto llamado login con propiedades y valores siguientes:
//id => Un número hexadecimal
//state => logged => true or false, => true or false,
//userName => nombre
//loginAt => fecha y hora

// Modificar el objeto person, para que incluya un email y una contraseña
//Una vez hechos los cambios, pide por prompt ambos datos y modifica el objeto login
//según estos datos sea o no correctos.
//alert de bienvenidos refiriendo el nombre

// let person = {
//   name: "John",
//   lastName: "Doe",
//   age: 27,
//   address: {
//     streetType: "Boulevard",
//     nameOfStreetType: "Of Broken Dreams",
//     number: 6,
//     postalCode: 29600,
//     location: "Málaga",
//   },
//   phone: "+34 777777777"
// }

// person.address.location = "Madrid";
// person.phone = {
//   0: "+34 888888888",
//   1: "+34 555555555",
//   2: "+34 444444444",
// }
// console.log(person);

// person.phone[2] = "+75 22222222";

// let login = {
//   id: "fec6790da98",
//   state: {
//     logged: false,
//     onLine: false,
//   },
//   userName: "name",
//   loginAt: "2022/03/29 10:47:30",
// };
// console.log(login);

// person.email = "example@example.com";
// person.password = "password";

// let userMail = prompt("Please, enter your email");
// let userPassword = prompt("Please, enter your password");
// if (userMail == person.email && userPassword == person.password){
//   login.state.logged = true;
//   login.state.onLine = true;
//   let loginHour = new Date();
//   let year = loginHour.getFullYear();
//   let month = loginHour.getMonth()+1;
//   let day = loginHour.getDate();
//   let hour = loginHour.getHours();
//   let min= loginHour.getMinutes();
//   let sec = loginHour.getSeconds();
//   let completeDate = `${year}/`;
//   if (month < 10){
//     completeDate += `0${month}/`;
//   }else{
//     completeDate += `${month}/`;
//   }
//   if (day < 10){
//     completeDate += `0${day} `;
//   }else{
//     completeDate += `${day} `;
//   }
//   if (hour < 10){
//     completeDate += `0${hour}:`;
//   }else {
//     completeDate += `${hour}:`;
//   }
//   if (min < 10){
//     completeDate += `0${min}:`;
//   }else {
//     completeDate += `${min}:`;
//   }
//   if (sec < 10) {
//     completeDate += `0${sec}`;
//   }else{
//     completeDate += `${sec}`;
//   }
//   alert(`Welcome ${person.name} ${person.lastName} you logged correctly`);
//   console.log(`logged at ${completeDate}`);
// }else{
//   alert("Your email or password is not correct")
// }