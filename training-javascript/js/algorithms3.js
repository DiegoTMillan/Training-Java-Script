//----------
//EXERCISES MOD 3
//----------

//Exercise 3.1.

const exercise1 = () => {
  //User properties

  let userMaxLimit = parseInt(prompt("Please, enter max limit"));
  let userMinLimit = parseInt(prompt("Please, enter min limit"));

  //Getting a Random Number with this Function

  const randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  //Preparing array
  let numberOfElements = 20;
  let resultingArray = new Array(numberOfElements);
  // console.log(resultingArray)

  //Let's create random elements for array

  for (i = 0; i < numberOfElements; i++) {
    randomArrayElements = randomNumber(userMinLimit, userMaxLimit);
    //   console.log(randomArrayElements);
    resultingArray[i] = randomArrayElements;
  }
  // console.log(resultingArray);

  //ordering the array

  function compare(value1, value2) {
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
  resultingArray.sort(compare);
  console.log(resultingArray);

  //showing min and max from array

  console.log("min is: ", resultingArray[0]);
  console.log("max is: ", resultingArray[resultingArray.length - 1]);
};

// exercise1();

const exercise2 = () => {
  //Exercise 3.2

  //Getting Hour and minutes from system

  let systemHour = new Date();
  let hour = systemHour.getHours();
  let minute = systemHour.getMinutes();
  let adjustedHour = `${hour}:`;

  //Transform Hours and Minutes in a decimal number

  let HoursToMinutes = hour * 60 + minute;
  //let HoursToMinutes = 0
  //console.log(HoursToMinutes);

  //Preparing Function for decimal number from hours and minutes reference

  const referenceHour = function (h, min) {
    return h * 60 + min;
  };
  let firstHour = referenceHour(6, 0);
  let secondHour = referenceHour(11, 59);
  let thirdHour = referenceHour(12, 0);
  let fourthHour = referenceHour(20, 59);
  let fifthHour = referenceHour(21, 0);
  let lastHour = referenceHour(5, 59);

  //Let's show the message

  if (HoursToMinutes >= firstHour && HoursToMinutes <= secondHour) {
    alert("¡Buenos días!");
  } else if (HoursToMinutes >= thirdHour && HoursToMinutes <= fourthHour) {
    alert("¡Buenas tardes!");
  } else if (HoursToMinutes >= fifthHour) {
    alert("¡Buenas noches!");
  } else if (HoursToMinutes <= lastHour) {
    alert("¡Buenas noches!");
  } else {
    ("There is a space-time anomaly");
  }
};

// exercise2();

//Exercise 3.3

const exercise3 = () => {

let hexColor1 = "";
let hexColor2 = "";
let hexColor3 = "";
let hexColor4 = "";
let hexColor5 = "";
let hexColor6 = "";
let hexColor7 = "";
let hexColor8 = "";
let hexColor9 = "";
let hexColor10 = "";
let hCLength = 6;

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(letterOrNumber)
// for ( j= 0; j < 10; j++){
for (let i = 0; i < hCLength; i++) {
    switch (randomNumber(1, 2)) {
      case 1:
        hexColor1 += String.fromCharCode(randomNumber(48, 57));
        hexColor2 += String.fromCharCode(randomNumber(48, 57));
        hexColor3 += String.fromCharCode(randomNumber(48, 57));
        hexColor4 += String.fromCharCode(randomNumber(48, 57));
        hexColor5 += String.fromCharCode(randomNumber(48, 57));
        hexColor6 += String.fromCharCode(randomNumber(48, 57));
        hexColor7 += String.fromCharCode(randomNumber(48, 57));
        hexColor8 += String.fromCharCode(randomNumber(48, 57));
        hexColor9 += String.fromCharCode(randomNumber(48, 57));
        hexColor10 += String.fromCharCode(randomNumber(48, 57));
        break;
      case 2:
        hexColor1 += String.fromCharCode(randomNumber(97, 102));
        hexColor2 += String.fromCharCode(randomNumber(97, 102));
        hexColor3 += String.fromCharCode(randomNumber(97, 102));
        hexColor4 += String.fromCharCode(randomNumber(97, 102));
        hexColor5 += String.fromCharCode(randomNumber(97, 102));
        hexColor6 += String.fromCharCode(randomNumber(97, 102));
        hexColor7 += String.fromCharCode(randomNumber(97, 102));
        hexColor8 += String.fromCharCode(randomNumber(97, 102));
        hexColor9 += String.fromCharCode(randomNumber(97, 102));
        hexColor10 += String.fromCharCode(randomNumber(97, 102));
        break;
    }
  }
// }
// for ( j= 0; j < 10; j++){
console.log(`#${hexColor1}`)
console.log(`#${hexColor2}`)
console.log(`#${hexColor3}`)
console.log(`#${hexColor4}`)
console.log(`#${hexColor5}`)
console.log(`#${hexColor6}`)
console.log(`#${hexColor7}`)
console.log(`#${hexColor8}`)
console.log(`#${hexColor9}`)
console.log(`#${hexColor10}`)

switch(randomNumber(1, 10)){
    case 1:
        console.log("%cHello World", "color:" + "#" + hexColor1);
        break;
        case 2:
        console.log("%cHello World", "color:" + "#" + hexColor2);
        break;
        case 3:
        console.log("%cHello World", "color:" + "#" + hexColor3);
        break;
        case 4:
        console.log("%cHello World", "color:" + "#" + hexColor4);
        break;
        case 5:
        console.log("%cHello World", "color:" + "#" + hexColor5);
        break;
        case 6:
        console.log("%cHello World", "color:" + "#" + hexColor6);
        break;
        case 7:
        console.log("%cHello World", "color:" + "#" + hexColor7);
        break;
        case 8:
        console.log("%cHello World", "color:" + "#" + hexColor8);
        break;
        case 9:
        console.log("%cHello World", "color:" + "#" + hexColor9);
        break
        case 10:
        console.log("%cHello World", "color:" + "#" + hexColor10);
        break
}
}

exercise3()
