//Four seasons

//getting real month
let actualDate = new Date();
let actualMonth = actualDate.getMonth();

if (actualMonth == 11 || actualMonth == 0 || actualMonth == 1) {
  season = "Winter";
} else if (actualMonth == 2 || actualMonth == 3 || actualMonth == 4) {
  season = "Spring";
} else if (actualMonth == 5 || actualMonth == 6 || actualMonth == 7) {
  season = "Summer";
} else if (actualMonth == 8 || actualMonth == 9 || actualMonth == 10) {
  season = "Autumn";
} else {
  season = "unknown season";
}
console.log(season);
//show month name
let monthName = "";
switch (actualMonth) {
  case 0:
    monthName = "January";
    break;
  case 1:
    monthName = "February";
    break;
  case 2:
    monthName = "March";
    break;
  case 3:
    monthName = "April";
    break;
  case 4:
    monthName = "May";
    break;
  case 5:
    monthName = "June";
    break;
  case 6:
    monthName = "July";
    break;
  case 7:
    monthName = "August";
    break;
  case 8:
    monthName = "September";
    break;
  case 9:
    monthName = "October";
    break;
  case 10:
    monthName = "November";
    break;
  case 11:
    monthName = "December";
    break;
  default:
    monthName = "unknown";
}
console.log(monthName);

let character = "Doctor Strange";
let power = "";
switch (character) {
  case "Captain America":
    power = "indestructible shield";
    break;
  case "Black Widow":
    power = "Master spy & assasin";
    break;
  case "Iron Man":
    power = "Genius-level intellect";
    break;
  case "Thor":
    power = "the hammer of Thor";
    break;
  case "Doctor Strange":
    power = "Great Wizard";
    break;
  default:
    console.log("Choose your hero!");
}
console.log(power);

let number = 10;

switch (true) {
  case number < 0:
    console.log("Under 0");
    break;
  case number >= 0 && number <= 10:
    console.log("Between 0 and 10");
    break;
  case number > 11 && number <= 20:
    console.log("Between 10 and 20");
    break;
  case number > 20:
    console.log("Over 20");
    break;
  default:
    console.log("out of range");
}

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

//Exercise 3

// let extTemperature = prompt ("What temperature is it?");
// switch (true) {
//   case extTemperature < 15:
//     alert("Warm up");
//     break;
//   case extTemperature > 15 && extTemperature < 25:
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

//Exercise 5
let absoluteZero = 273.15;
let freezingPoint = 0;
let bodyTemperature = 37;
let boillingPoint = 100;
let fahrenheit = (absoluteZero*1.8)+32 || (freezingPoint*1.8)+32 || (bodyTemperature*1.8)+32 || (boillingPoint*1.8)+32;

switch (result){
  case absoluteZero == (273.15 * 1.8 + 32):
    console.log(fahrenheit , "ºF");
    break;
  case freezingPoint = (0 * 1.8 + 32):
    console.log(fahrenheit , "ºF");
    break;
  case bodyTemperature = (37 * 1.8 + 32):
    console.log(fahrenheit , "ºF");
    break;
  case boillingPoint = (100 * 1.8 + 32):
    console.log(fahrenheit , "ºF")
}

