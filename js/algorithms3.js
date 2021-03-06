//Imports
import { numberGenerator } from "./util";

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
    randomArrayElements = numberGenerator(userMinLimit, userMaxLimit);
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

exercise1();

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
    alert("??Buenos d??as!");
  } else if (referenceHour >= thirdHour && referenceHour <= fourthHour) {
    alert("??Buenas tardes!");
  } else if (referenceHour >= fifthHour) {
    alert("??Buenas noches!");
  } else if (referenceHour <= lastHour) {
    alert("??Buenas noches!");
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

//exercise3.a best solution

const exercise3a = () => {
  //storing all letter and digit combinations
  //for html color code
  const generateColor = () => {
    let letters = "0123456789ABCDEF";
    // html color code starts with #
    let color = "#";
    // generating 6 times as HTML color code consist
    // of 6 letter or digits
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  for (let i = 1; i <= 10; i++) {
    // console.log("%cHello World!", `color: ${generateColor()}`);
    console.log(generateColor());
  }
};

// exercise3a();

//----------
//Exercise 4
//----------

const exercise4 = () => {
  //Obtaining the DNI

  let userDni = prompt(
    "Please write a DNI with this format 00000000-A"
  ).toUpperCase();

  //checking userDni is in correct format

  while (userDni.charAt(userDni.length - 2) != "-") {
    userDni = prompt(
      "Please write a DNI with this format 00000000-A"
    ).toUpperCase();
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

  //Let's Check the DNI

  if (dniCodeArray[codeLetter] == lastLetter) {
    alert("valid DNI");
  } else if (dniCodeArray[codeLetter] != lastLetter) {
    alert("Data entered is wrong");
  } else {
    alert("I don't know what i'm doing");
  }

  //And now... BONUS
  //creating a dni Generator with a function

  const dniGenerator = () => {
    let randomNumberDni = randomNumber(10000000, 100000000);
    randomNumberDni += dniCodeArray[randomNumberDni % 23];
    return randomNumberDni;
  };

  //showing the DNIs

  for (let i = 0; i < 10; i++) {
    console.log(dniGenerator());
  }
};

// exercise4();

//----------
//Exercise 5
//----------

const exercise5 = () => {
  //User says how many plates he wants it

  let userNumberOfCarLicensePlate = parseInt(
    prompt("How many car license plates do you need?")
  );

  //The random Car Plate Generator

  const carLicensePlateGenerator = () => {
    let letters = "BCDFGHJKLMNPRSTVWXYZ";
    let carLicensePlate = "";
    for (i = 0; i < 4; i++) {
      carLicensePlate += String.fromCharCode(randomNumber(48, 57));
    }
    for (k = 0; k < 3; k++) {
      carLicensePlate += letters[randomNumber(0, letters.length - 1)];
    }
    return carLicensePlate;
  };

  //Let's see the result

  for (j = 1; j <= userNumberOfCarLicensePlate; j++) {
    console.log(carLicensePlateGenerator());
  }
};

// exercise5()

//----------
//Exercise 6
//----------

//Creating an array with quotes

const exercise6 = () => {
  let curiosities = [
    "A veces, la percepci??n del tiempo nos enga??a, y no nos damos cuenta de la magnitud del paso del mismo. De hecho, el Tyrannosaurus rex vivi?? m??s cerca de nosotros en la l??nea temporal que por ejemplo, del Stegosaurus.",
    "La ecuaci??n de Dirac describe el entrelazamiento cu??ntico. De un modo prosaico viene a decir que cuando dos elementos cu??nticos interactuan el tiempo suficiente, quedar??n conectados independientemente de la distancia que los separes. Si uno cambia alguna cualidad, el otro lo har??. Es por ello que se considera la ecuaci??n m??s rom??ntica. Parejas se la tatuan en virtud de un amor que los conecta aunque les separen millones de galaxias.",
    "El c??bit o bit cu??ntico es la base de la supremac??a cu??ntica. Y es que mientras un bit solo puede almacenar estados entre 1 y 0, el c??bit puede estar en ambos estados gracias al fen??meno de la superposici??n cu??ntica.",
    "Una de las teor??as m??s aceptadas es que todo el tiempo pasado, presente y que ser?? est?? contenido en el universo. Es por ello que en lo que a viajes en el tiempo se refiere, si viajaras atr??s a matar a tu padre. Todo encajar??a de alg??n modo para que el presente no cambiara en absoluto.",
    "Cuando Robert Oppenheimer, director del proyecto Manhattan, cumpli?? los objetivos marcados de crear una bomba at??mica cit?? una parte del Mah??bh??rata (libro sagrado ind?? escrito aproximadamente en el siglo III a.C) con las siguientes palabras: Si el brillo de mil soles refulgiese a la vez en el cielo, ser??a como el esplendor del Poderoso... Me he convertido en la Muerte, la destructora de mundos... Bastante premonitorio.",
    "Una estrella de neutrones es tan sumamente densa, que solo una cucharadita de postre de su superficie pesar??a lo mismo que la isla de Manhattan.",
    "Un descubrimiento reciente, nos ha revelado que todos los bosques tienen una red micelial creada por hongos que literalemente permite a los ??rboles comunicarse entre s?? para evitar amenazas e incluso se cree que para ayudarse entre ellos en tiempos de escasez, algo as?? como el internet de los ??rboles.",
    "El 99,9% de los ??tomos es espacio vac??o. Si puediera suprimirse, toda la humanidad cabr??a en un terr??n de az??car ??somos casi un 99,9% vac??o?",
    "La mayor parte de los ??tomos que nos componen a nosotros y todo lo que nos rodea se form?? en el interior estrellas que fusionaron esos elementos constantemente hasta que explotaron al no poder fusionarlos m??s. Literalmente podemos decir que somos polvo de estrellas.",
    "El espacio tiempo se ve distorsionado por la gravedad. De hecho si fueras astronauta, por el hecho de estar en la estaci??n espacial y pasar m??s o menos dos a??os all??. Volver??as un segundo en el pasado.",
    "Uno de los grandes problemas a los que se enfrent?? el estudio de la f??sica cu??ntica es que las part??culas no se comportan igual cuando se les observa y cuando no se hace.",
    "los fotones que se crean en el sol tardan miles de a??os en salir de ??l. Pero una vez fuera, solo ocho minutos en llegar a nosotros.",
    "Vivimos en la edad de las estrellas. Sin embargo debido a la expansi??n del universo las estrellas se ir??n alejando unas de otras dejando un cielo a oscuras. La expansi??n llegar?? a tal punto que superar?? a la fuerza que mantien unida a la materia y se producir?? el gran desgarramiento. Eso s?? dentro de miles de millones de a??os.",
    "??Quieres hacerte el hombre m??s rico del mundo? Solo tienes que conseguir viajar a Urano. Se cree que all?? literalmente llueven diamantes.",
    "Curiosamente Saturno tiene una densidad menor que la del agua. Si tiraramos el planeta de los anillos a un enorme oc??ano... flotar??a.",
    "Sat??lites de J??piter como Europa pueden tener grandes oc??anos de agua en su interior. Esto se debe a que la enorme gravedad de Jupiter comprime y estira al peque??o cuerpo celeste continuamente creando gran cantidad de energ??a... Y donde hay agua... puede haber vida.",
    "Es bastante posible que lo que veas en el cielo al mirar una estrella sea un fantasma. En el tiempo en que tarda la luz en llegar a nosotros puede que la estrella ya lleve muerta millones de a??os.",
    "Se puede decir que la energ??a que produce nuestros cuerpos nos las regalan nuestras madres. Y es que las mitocondrias son los org??nulos de la c??lula que crean la energ??a y las heredamos de los ??vulos. Los espermatozides las pierden en el momento de la fecundaci??n.",
    "Si subes al Everest, encontrar??s f??siles marinos. Esto se debe a que la cordillera del Himalaya fue un lecho submarino hasta que la placa India choc?? con la asi??tica y lo elev?? hace millones de a??os.",
    "Carl Sagan partici?? en la creaci??n de un disco de oro que viaja en las misiones Voyager. Se llama -Sounds of Earth- y contiene datos de nuestras culturas y nuestra ubicaci??n en base a los p??lsares m??s cercanos. Es literalemente la primera botella con un mensaje lanzada a la vastedad del infinito oc??ano del universo.",
  ];
  let curiosities2 = [...curiosities];

  //ACONSEJA ANTONIO UN DO...WHILE PARA EVITAR QUE SE REPITA JUSTO LA SIGUIENTE. NO SEAS VAGO Y PONTE CON ELLO CUANDO TERMINES*** 
  //NO DOY CON LA TECLA. PREGUNTAR.

  //Starting with a console.log, after that every 15 seconds the console.log will show a new quote

  //Trying to use a Do While. But the loop does'nt stop. I think because timer never stops.

// do{
  console.log(curiosities[randomNumber(0, curiosities.length - 1)]);

  

// }while (curiosities.indexOf(0) == curiosities2.indexOf(0));
  
  let timer = setInterval(
    () => console.log(curiosities2[randomNumber(0, curiosities2.length - 1)]),
    10000
  );
  //after two minutes console.log gives you a text saying goodbye
// };
  setTimeout(() => {
    clearInterval(timer);
    console.log(
      "Y aqu?? terminan las curiosidades, espero que las hayas disfrutado"
    );
  }, 120000);
  // }
}

exercise6();

//----------
//Exercise 7
//----------

const exercise7 = () => {
  //Preparing the arrays
  let numberOfElementsInArrays = 100;
  let evenAndOddArray = new Array(numberOfElementsInArrays);
  let evenArray = new Array();

  //First loop for creating an array with 100 randomNumbers between 0 and 500
  for (i = 0; i < numberOfElementsInArrays; i++) {
    evenAndOddArray[i] = randomNumber(0, 500);
  }
  // console.log(evenAndOddArray)

  //Using a filter, we are separating even  from odd numbers

  evenArray = evenAndOddArray.filter((x) => x % 2 == 0);
  // console.log(evenArray)

  //With this function we order the array
  evenArray.sort((a, b) => b - a);
  console.log(evenArray);
};
// exercise7();

//----------
//Exercise 8
//----------

const exercise8 = () => {
  let cardValue = [
    "ACE",
    "KING",
    "QUEEN",
    "JACK",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];
  let suits = ["clubs", "hearts", "spades", "diamonds"];
  let clubs = [...cardValue];
  let hearts = [...cardValue];
  let spades = [...cardValue];
  let diamonds = Array.from(cardValue);
  console.log(hearts);
  let balance = 500;
  let bet = 0;
  let minimumBet = 10;
  let continuePlaying = false;

  do {
    do {
      bet = parseInt(prompt("How much do you want to bet"));
      if (bet > balance) {
        alert("Sorry, your bet is higher than your avaiable balance");
        alert(`Maximum avaiable: ${balance}`);
      }
      if (bet < minimumBet) {
        alert("Sorry, your bet is lower than minimum required.");
        alert(`Minimum required: ${minimumBet}`);
      }
    } while (bet > balance || bet < minimumBet);
    // let card1 = randomNumber(0, clubs.length);
    // let card2 = randomNumber(0, clubs.length);
    // let suit1 = suits[randomNumber(0, suits.length)];
    let card1 = Math.floor(Math.random() * clubs.length);
    let card2 = Math.floor(Math.random() * clubs.length);
    let suit1 = suits[Math.floor(Math.random() * suits.length)];
    let suit2;
    do {
      // suit2 = suits[randomNumber(0, suits.length)];
      suit2 = suits[Math.floor(Math.random() * suits.length)];
    } while (card1 == card2 && suit1 == suit2);
    console.log(
      `${eval(suit1)[card1]} ${suit1} vs. ${eval(suit2)[card2]} ${suit2}`
    );
    if (card1 < card2) {
      balance += bet;
      alert("you win!");
    } else if (card1 > card2) {
      balance -= bet;
      alert("you lose");
    } else {
      ("Draw");
    }
    if (balance >= minimumBet) {
      continuePlaying =
        prompt("Would you like to continue playing").toLowerCase() == "y";
    }
  } while (continuePlaying && balance >= minimumBet);
  alert(`Betting benefits: ${balance - 500} ???`);
  alert(`Total balance: ${balance} ???`);
};

// exercise8();

const exercise9 = (encode, text) => {
  const cipher = (encode, text) => {
    if (encode) {
      text = [...text].map((letter) => {
        switch (letter.charCodeAt(0)) {
          case 88:
            return String.fromCharCode(65);
          case 89:
            return String.fromCharCode(66);
          case 90:
            return String.fromCharCode(67);
          case 120:
            return String.fromCharCode(97);
          case 121:
            return String.fromCharCode(98);
          case 122:
            return String.fromCharCode(99);
          case 32:
            return String.fromCharCode(32);
          default:
            return String.fromCharCode(letter.charCodeAt(0) + 3);
        }
      });
    } else {
      text = [...text].map((letter) => {
        switch (letter.charCodeAt(0)) {
          case 65:
            return String.fromCharCode(88);
          case 66:
            return String.fromCharCode(89);
          case 67:
            return String.fromCharCode(90);
          case 97:
            return String.fromCharCode(120);
          case 98:
            return String.fromCharCode(121);
          case 99:
            return String.fromCharCode(122);
          case 32:
            return String.fromCharCode(32);
          default:
            return String.fromCharCode(letter.charCodeAt(0) - 3);
        }
      });
    }
    console.log(text.join(""));
  };
  cipher(true, "vini vidi vinci");
  cipher(false, "ylql ylgl ylqfl");
};
// exercise9();

//Solucion de Fran
//Math cipher
//messageToCoding.charCodeAt(X)=88; 
//88+3=91; 
//91-65=26; 
//26%26=0;
//0+65=65;

//Math decipher
//messageToCoding.charCodeAt(C)=67; 
//67-3=64; 
//64-90=26; 
//-26%26=0;
//0+90=90;

const exercise9A = (typeCoding, message, shift) => {
  let result = "";

  const coding = (typeCoding, message, shift, asciiMin, asciiMax) => {
    let result = "";
    typeCoding === true
      ? (result += String.fromCharCode(
          ((message + shift - asciiMin) % 26) + asciiMin
        ))
      : (result += String.fromCharCode(
          ((message - shift - asciiMax) % 26) + asciiMax
        ));
    return result;
  };

  for (let i = 0; i < message.length; i++) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
      result += coding(typeCoding, message.charCodeAt(i), shift, 65, 90);
    } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      result += coding(typeCoding, message.charCodeAt(i), shift, 97, 122);
    } else {
      result += String.fromCharCode(message.charCodeAt(i));
    }
  }
  console.log(result);
};
// exercise9A(true, "Atacar al amanecer!" , 3);

//BONUS Timer processing.

// let start = new Date();
  // let end = null;
  // end = new Date();
    // console.log(
    //   `Operation took ${end.getTime() - start.getTime()} miliseconds`
    // );