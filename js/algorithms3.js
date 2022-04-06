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
    "A veces, la percepción del tiempo nos engaña, y no nos damos cuenta de la magnitud del paso del mismo. De hecho, el Tyrannosaurus rex vivió más cerca de nosotros en la línea temporal que por ejemplo, del Stegosaurus.",
    "La ecuación de Dirac describe el entrelazamiento cuántico. De un modo prosaico viene a decir que cuando dos elementos cuánticos interactuan el tiempo suficiente, quedarán conectados independientemente de la distancia que los separes. Si uno cambia alguna cualidad, el otro lo hará. Es por ello que se considera la ecuación más romántica. Parejas se la tatuan en virtud de un amor que los conecta aunque les separen millones de galaxias.",
    "El cúbit o bit cuántico es la base de la supremacía cuántica. Y es que mientras un bit solo puede almacenar estados entre 1 y 0, el cúbit puede estar en ambos estados gracias al fenómeno de la superposición cuántica.",
    "Una de las teorías más aceptadas es que todo el tiempo pasado, presente y que será está contenido en el universo. Es por ello que en lo que a viajes en el tiempo se refiere, si viajaras atrás a matar a tu padre. Todo encajaría de algún modo para que el presente no cambiara en absoluto.",
    "Cuando Robert Oppenheimer, director del proyecto Manhattan, cumplió los objetivos marcados de crear una bomba atómica citó una parte del Mahábhárata (libro sagrado indú escrito aproximadamente en el siglo III a.C) con las siguientes palabras: Si el brillo de mil soles refulgiese a la vez en el cielo, sería como el esplendor del Poderoso... Me he convertido en la Muerte, la destructora de mundos... Bastante premonitorio.",
    "Una estrella de neutrones es tan sumamente densa, que solo una cucharadita de postre de su superficie pesaría lo mismo que la isla de Manhattan.",
    "Un descubrimiento reciente, nos ha revelado que todos los bosques tienen una red micelial creada por hongos que literalemente permite a los árboles comunicarse entre sí para evitar amenazas e incluso se cree que para ayudarse entre ellos en tiempos de escasez, algo así como el internet de los árboles.",
    "El 99,9% de los átomos es espacio vacío. Si puediera suprimirse, toda la humanidad cabría en un terrón de azúcar ¿somos casi un 99,9% vacío?",
    "La mayor parte de los átomos que nos componen a nosotros y todo lo que nos rodea se formó en el interior estrellas que fusionaron esos elementos constantemente hasta que explotaron al no poder fusionarlos más. Literalmente podemos decir que somos polvo de estrellas.",
    "El espacio tiempo se ve distorsionado por la gravedad. De hecho si fueras astronauta, por el hecho de estar en la estación espacial y pasar más o menos dos años allí. Volverías un segundo en el pasado.",
    "Uno de los grandes problemas a los que se enfrentó el estudio de la física cuántica es que las partículas no se comportan igual cuando se les observa y cuando no se hace.",
    "los fotones que se crean en el sol tardan miles de años en salir de él. Pero una vez fuera, solo ocho minutos en llegar a nosotros.",
    "Vivimos en la edad de las estrellas. Sin embargo debido a la expansión del universo las estrellas se irán alejando unas de otras dejando un cielo a oscuras. La expansión llegará a tal punto que superará a la fuerza que mantien unida a la materia y se producirá el gran desgarramiento. Eso sí dentro de miles de millones de años.",
    "¿Quieres hacerte el hombre más rico del mundo? Solo tienes que conseguir viajar a Urano. Se cree que allí literalmente llueven diamantes.",
    "Curiosamente Saturno tiene una densidad menor que la del agua. Si tiraramos el planeta de los anillos a un enorme océano... flotaría.",
    "Satélites de Júpiter como Europa pueden tener grandes océanos de agua en su interior. Esto se debe a que la enorme gravedad de Jupiter comprime y estira al pequeño cuerpo celeste continuamente creando gran cantidad de energía... Y donde hay agua... puede haber vida.",
    "Es bastante posible que lo que veas en el cielo al mirar una estrella sea un fantasma. En el tiempo en que tarda la luz en llegar a nosotros puede que la estrella ya lleve muerta millones de años.",
    "Se puede decir que la energía que produce nuestros cuerpos nos las regalan nuestras madres. Y es que las mitocondrias son los orgánulos de la célula que crean la energía y las heredamos de los óvulos. Los espermatozides las pierden en el momento de la fecundación.",
    "Si subes al Everest, encontrarás fósiles marinos. Esto se debe a que la cordillera del Himalaya fue un lecho submarino hasta que la placa India chocó con la asiática y lo elevó hace millones de años.",
    "Carl Sagan partició en la creación de un disco de oro que viaja en las misiones Voyager. Se llama -Sounds of Earth- y contiene datos de nuestras culturas y nuestra ubicación en base a los púlsares más cercanos. Es literalemente la primera botella con un mensaje lanzada a la vastedad del infinito océano del universo.",
  ];

  //Starting with a console.log, after that every 15 seconds the console.log will show a new quote

  console.log(curiosities[randomNumber(0, curiosities.length-1)]);

  //ACONSEJA ANTONIO UN DO...WHILE PARA EVITAR QUE SE REPITA JUSTO LA SIGUIENTE. NO SEAS VAGO Y PONTE CON ELLO CUANDO TERMINES***
  
  let start = new Date();
  let end = null;
  let timer = setInterval(
    () => console.log(curiosities[randomNumber(0, curiosities.length-1)]),
    10000
  );
  //after two minutes console.log gives you a text saying goodbye

  setTimeout(() => {
    clearInterval(timer);
    console.log(
      "Y aquí terminan las curiosidades, espero que las hayas disfrutado"
    );
    end = new Date();
    console.log(`Operation took ${end.getTime() - start.getTime()} miliseconds`)
  }, 120000);
  // }
};

// exercise6();

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
//Exercise 9
//----------

const exercise9 = () => {

}                                                      
exercise9();
