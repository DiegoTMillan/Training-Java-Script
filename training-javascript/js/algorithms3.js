//----------
//EXERCISES MOD 3
//----------

//UTILITIES

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const hoursToMinutes = function (h, min) {
  return h * 60 + min;
};

//----------
//Exercise 3.1.
//----------

const exercise1 = () => {
  //User properties

  let userMaxLimit = parseInt(prompt("Please, enter max limit"));
  let userMinLimit = parseInt(prompt("Please, enter min limit"));

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

//------------
//Exercise 3.2
//------------

const exercise2 = () => {
  //Getting Hour and minutes from system

  let systemHour = new Date();
  let hour = systemHour.getHours();
  let minute = systemHour.getMinutes();

  //Transform Hours and Minutes of system in a decimal number using the function

  let referenceHour = hoursToMinutes(hour, minute);
  //let referenceHour = 360

  //Using function to convert hours to mins

  let firstHour = hoursToMinutes(6, 0);
  let secondHour = hoursToMinutes(11, 59);
  let thirdHour = hoursToMinutes(12, 0);
  let fourthHour = hoursToMinutes(20, 59);
  let fifthHour = hoursToMinutes(21, 0);
  let lastHour = hoursToMinutes(5, 59);

  //Let's show the message

  if (referenceHour >= firstHour && referenceHour <= secondHour) {
    alert("¡Buenos días!");
  } else if (referenceHour >= thirdHour && referenceHour <= fourthHour) {
    alert("¡Buenas tardes!");
  } else if (referenceHour >= fifthHour) {
    alert("¡Buenas noches!");
  } else if (referenceHour <= lastHour) {
    alert("¡Buenas noches!");
  } else {
    ("There is a space-time anomaly");
  }
};

// exercise2();

//-----------
//Exercise 3.3
//-----------

const exercise3 = () => {
  //Preparing the strings

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

  //Creating de different colors

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

  //Showing hexadecimal colors in console

  console.log(`#${hexColor1}`);
  console.log(`#${hexColor2}`);
  console.log(`#${hexColor3}`);
  console.log(`#${hexColor4}`);
  console.log(`#${hexColor5}`);
  console.log(`#${hexColor6}`);
  console.log(`#${hexColor7}`);
  console.log(`#${hexColor8}`);
  console.log(`#${hexColor9}`);
  console.log(`#${hexColor10}`);

  //showing "Hello World" in different colors

  switch (randomNumber(1, 10)) {
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
      break;
    case 10:
      console.log("%cHello World", "color:" + "#" + hexColor10);
      break;
  }
};

// exercise3()

//exercise3 best solution



//----------
//Exercise 4
//----------

const exercise4 = () => {
  //Obtaining the DNI

  let userDni = prompt("Please write a DNI with this format 00000000-A");

  //checking userDni is in correct format

  while (userDni.charAt(userDni.length - 2) != "-") {
    userDni = prompt("Please write a DNI with this format 00000000-A");
  }

  //This is the dni code

  let dniCodeArray = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  //Separating numbers from the last letter, and converting number"strings" into pure numbers

  let dniObject = userDni.split("-");
  let numberOfDni = parseInt(dniObject[0]);
  let lastLetter = Object.values(dniObject[1]);

  //creating the numberCode for the letter

  let codeLetter = numberOfDni % 23;

  //Let' Check the DNI

  if (dniCodeArray[codeLetter] == lastLetter) {
    alert("DNI valid");
  } else if (dniCodeArray[codeLetter] != lastLetter) {
    alert("Data entered is wrong");
  } else {
    alert("I don't know what i'm doing");
  }
};

// exercise4();

//----------
//Exercise 5
//----------

const exercise5 = () => {

  let carRegistration = ""
}


