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

// Loops(Bucles)

// counting one by one

// let count = 0;
// while (count < 10){
//     console.log(count);
//     count++;
//     //count = count + 1;
//     //count += 1;
// }

// let monthDays = new Date(2022, 3, 0).getDate();
// let firstDay = new Date("March 1, 2022").getDay();
// console.log(firstDay);
// //March calendar
// let day = 1;
// while (day <= monthDays) {
//   switch (day) {
//     case 1:
//       console.log(`day ${day}, Tuesday`);
//       break;
//     case 2:
//       console.log(`day ${day}, Wednesday`);
//       break;
//     case 3:
//       console.log(`day ${day}, Thursday`);
//       break;
//     case 4:
//       console.log(`day ${day}, Friday`);
//       break;
//     case 5:
//       console.log(`day ${day}, Saturday`);
//       break;
//     case 6:
//       console.log(`day ${day}, Sunday`);
//       break;
//     case 7:
//       console.log(`day ${day}, Monday`);
//       break;
//     default:
//         console.log(day);
//         break;
//   }
//   console.log(day);
//   day++;
// }

// counting 2 by 2
// let number = 0;
// while (number <= 10){
//     console.log(number);
//     number += 2;
// }

// counting down

// let iniCounter = 10;
// while (iniCounter >=2 ) {
//     console.log(iniCounter--);
// }

// For loop


// for (let count = 0; count <= 10; count++){
//     console.log(count)
// }

// let end = 100
// for (let start = 0; start < end; start++){
//     console.log(start)
// }
// let start, end;
// for (start = 0, end = 1000; start <  end; start++,end--){
//     console.log(start," ",end);
// }
// console.log("Showing values after finishing the loop");
// console.log(start, " " ,end);
// observar que sale un número más porque el código se ejecuta así
//1º el let, luego la comprobación booleana, luego hace el bloque de código
//y por último actuan los contadores, de ahí la diferencia con el 
//mensaje final. Además para hacer funcionar los logs fuera del bloque
//hay que declararlos antes.

//Multiply example

// let userValue = prompt("Enter your value: ");
// for(let num = 1; num <= 10; num++){
//     console.log(`${userValue} x ${num} = ${userValue * num}`);
// }
