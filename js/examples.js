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
// observar que sale un n??mero m??s porque el c??digo se ejecuta as??
//1?? el let, luego la comprobaci??n booleana, luego hace el bloque de c??digo
//y por ??ltimo actuan los contadores, de ah?? la diferencia con el
//mensaje final. Adem??s para hacer funcionar los logs fuera del bloque
//hay que declararlos antes.

//Multiply example

// let userValue = prompt("Enter your value: ");
// for(let num = 1; num <= 10; num++){
//     console.log(`${userValue} x ${num} = ${userValue * num}`);
// }

//BREAK explanation

// let num = 0
// for ( let i = 1; i < 10 ; i++){
//     if ( i % 5 == 0){
//         break;
//     }
// num++
// }
// console.log(num);

// let text = "palindrome";
// let target = "o";
// let counter = 0;

// for(let i = 0; i < text.length; i++){
//     console.log(`iteracion ${++counter}`)
//     if (text[i] == target){
//       console.log("letter found")
//       break;
//     }
// }

//Encontrar n??meros primos.

// let isPrime = true;
// let num = 7;
// let counter = 0;

// for (let i = 2; i < num; i++){
//     console.log(`iteracion ${++counter}`);
//     if (num % i == 0) {
//         console.log("It's not a prime, divisible by: ", i);
//         isPrime = false;
//         break;
//     }
// }

// aunque con una condici??n booleana se puede hacer tambi??n un break

// let isPrime = true;
// let num = 19;
// let counter = 0;
// for (let start = 2, end = 100, isPrime = true ; start < end; start++) {
//   for (let i = 2; i < start && isPrime == true ; i++) {
//     // console.log(`iteracion ${++counter}`);
//     if (start % i == 0) {
//     //   console.log("The number " + start + " is not a prime, divisible by: ", i);
//       isPrime = false;
//       // break;
//     }
//   }
//   if (isPrime) {
//     console.log(`the number ${start}, is prime`);
//   }else{
//   isPrime = true;
//   }
// }

//CONTINUE Explanation

// showing even numbers
// for (let num = -1, max = 100, counter = 0; num < max; num++) {
//   if (num % 2 != 0) {
//       continue;
//   }
//   console.log(`${num}`);
//   console.log(`iteracion ${++counter}`);
// }
//sirve por ejemplo para hacer que los clientes que no sean de
//m??laga sean los que salgan, as?? si salen los de m??laga vuelve
//a repetir el bucle.

//BUCLE DO WHILE
// let option = null;
// let colors = ["red", "green", "blue"];
// do {
//   console.log("Please, choose a color");
//   for (let index = 0; index < colors.length; index++) {
//     console.log(index + 1 + " " + colors[index]);
//   }
//   console.log("Press 0 to leave");
//   option = prompt("Make your choice");
//   switch (option) {
//     case "1":
//       console.log("%cHex code for red: #FF0000", "color:#FF0000");
//       break;
//     case "2":
//       console.log("%cHex code for green: #008000", "color:#008000");
//       break;
//     case "3":
//       console.log("%cHex code for blue: #0000FF", "color:#0000FF");
//       break;
//     default:
//       console.log("Exiting, see you son!");
//       break;
//   }
// } while (option != null && option != "0");

//AN OBJECT

// let star = {
//   name: "Polaris",
//   constellation: "Ursa Minor",
//   type: "Double/Cepheid",
//   spectralClass: "F7",
//   mag: "2.0",
// };
// console.log(star)

// let x = 5;
// let y = x;
// y = 7;
// console.log(x);

// let hero2 = hero;

// hero2.character = "Hulk";
// hero2.character = "Thor";
// hero2.name = "Bruce Banner";

// console.log(hero.character)

// observar que en el primer caso de valores primitivos si se guarda x y se refiere a ??l
//en el segundo se sobrescribe por no ser valores primitivos y tratarse de un objeto

// let hero = {
//   character: "Iron Man",
//   name: "Tony Stark",
//   powers: [
//     "Genius-level intellect",
//     "Multiple powered armor suits",
//     "ability to fly",
//   ],
//   info: {
//     yearCreated: 1963,
//     powerOrigin: "from his suit",
//     Weapons: ["respulsor rays", "uni-beam projector", "lasers"],
//     didYouKnow:
//       "Tony Stark created and built one of Spider-man's upgraded suits knwon as the Iron Spider Suit. We got a small glimpe of it in Spider-Man: Homecoming!",
//   },
// };

//observar que powers se trata de un array pues tiene varios valores guardados para el mismo atributo.

// let shoppingCart = {
//   shoes1: {
//     product_id: 0,
//     name: "Air Jordan",
//     price: "127$",
//     quantity: 5,
//   },
//   shoes2: {
//     product_id: 1,
//     name: "Air Magic",
//     price: "134$",
//     quantity: 3,
//   },
//   shoes3: {
//     product_id: 2,
//     name: "Air Bird",
//     price: "185$",
//     quantity: 8,
//   } ,
//   shoes4: {
//     product_id: 3,
//     name: "Air Chamberlain",
//     price: "457$",
//     quantity: 1,
//   },
// }
// let shoes4 = new Object(shoppingCart.shoes1);
// console.log(Object.keys(shoppingCart.shoes2))
// console.log("       id: " + shoppingCart.shoes1.product_id + " name: " + shoppingCart.shoes1.name + " " + shoppingCart.shoes1.price + " " + shoppingCart.shoes1.quantity + " quantity");
// console.log("       id: " + shoppingCart.shoes2.product_id + " name: " + shoppingCart.shoes2.name + " " + shoppingCart.shoes2.price + " " + shoppingCart.shoes2.quantity + " quantity");
// console.log("       id: " + shoppingCart.shoes3.product_id + " name: " + shoppingCart.shoes3.name + " " + shoppingCart.shoes3.price + " " + shoppingCart.shoes3.quantity + " quantity");
// console.log("       id: " + shoppingCart.shoes4.product_id + " name: " + shoppingCart.shoes4.name + " " + shoppingCart.shoes4.price + " " + shoppingCart.shoes4.quantity + " quantity");

//Loop solution

// for (let i = 0; i < Object.keys(shoppingCart).length; i++) {
//   for (
//     let j = 0;
//     j < Object.keys(shoppingCart[Object.keys(shoppingCart)[i]]).length;
//     j++
//   ) {
//     console.log(`${Object.keys(shoppingCart[Object.keys(shoppingCart)[i]])[j]}:
//   ${
//     shoppingCart[Object.keys(shoppingCart)[i]][
//       Object.keys(shoppingCart[Object.keys(shoppingCart)[i]])[j]
//     ]
//   }
//   `);
//   }
// }

//Easier solution

// shoppingCart = {
//   0: {
//   product_id: 0,
//   name: "Nike Air max",
//   price: "150$",
//   quantity: "1",
//   },
//   1: {
//   product_id: 1,
//   name: "Nike Air force",
//   price: "160$",
//   quantity: "5",
//   },
//   2: {
//   product_id: 2,
//   name: "Nike Air jordan",
//   price: "170$",
//   quantity: "9",
//   },
//   3: {
//   product_id: 3,
//   name: "Nike Air",
//   price: "180$",
//   quantity: "2",
//   },
//   };
//   for (let i = 0; i < Object.keys(shoppingCart).length; i++) {
//   let id = shoppingCart[i].product_id;
//   let name = shoppingCart[i].name;
//   console.log("id: ", id, " name: ", name);
//   }

//Array literal

// let empty = []; // un array vacio
// let colors2 = ["red", "blue","green"];
// let combinedElements = [1.1, true, "Hello"];//mixto

// let original = [1, 2, 3];
// let originalIncreased = [0, ...original, 4];
// console.log(originalIncreased)
// let copy = [...original]//son copias reales y no cambia el original, con lo que impedimos que se modifique el original
// console.log(copy)
// copy[copy.length -1]=4;
// console.log(copy)
// console.log(original)
// let hexValues = [..."0123456789ABCDEF"]
// console.log(typeof hexValues);
// console.log(hexValues);

// let elements = new Array(-53, 3.258, true, "awesome arrays");

// let single = Array.of(10);
// console.log(single)

// let copy2 = Array.from(original);
// console.log(copy2);

// //managing arrays

// let colors = ["red","blue","green"];
// // alert(colors[0])
// colors[2] = "black";
// colors[3] = "brown"; //a??ade un cuarto elemento
// // alert(colors.length) // 4
// colors[colors.length] = "black"; // a??ade un color en ??ltima posici??n sin equivocarte
// colors[colors.length] = "white";// a??ade otro en el ??ltimo lugar
// console.log(colors)

// //checking an array

// let checking = ["foo", "bar", "baz", "qux"];
// console.log(Array.from(checking.keys()));// ves las claves 0,1,2 y 3
// console.log(Array.from(checking.values())) // y ves sus valores
// console.log(Array.from(checking.entries())); //y ves las claves separadas por coma de sus valores. Creas un array dentro de un array

// console.log([checking.length-1][3]);

// let moreThings = ["hello", true, 3.1415, "world"];
// let hello = moreThings[0] + " " + moreThings[3];
// console.log(hello)

// //last-in-first-out (LIFO) Pila arriba y abajo

// let numbers4 = [1, 2, 3];
// console.log(numbers4)
// numbers4.push(5); // a??ade un elemento al final
// console.log(numbers4);
// numbers4.pop(); //borra el ??ltimo
// console.log(numbers4);
// numbers4.push(4);
// console.log(numbers4)

// //first-in-first-out (FIFO)

// let colors3 = ["red", "green", "blue"];
// console.log(colors3);
// colors3.shift();
// console.log(colors3);
// colors3.unshift("orange");
// console.log(colors3)

// //finding elements

// let mixed = [1, true, 3, NaN, 1];
// mixed.includes(2); //da false
// console.log(mixed.includes(2))
// mixed.includes(true); // da true
// mixed.indexOf(3)// me dar?? la posici??n 2, empieza con 0
// mixed.lastIndexOf(1)// me dice la ??ltima vez que sali?? 1, en este caso pos 4

// const evens = [2, 4, 6];
// console.log(evens.findIndex(x => x === 6)) //est?? en posici??n 2
// console.log(evens.findIndex(x => x < 0)) //-1 (es respuesta autom??tica en caso de no haber resultado en este caso) no hay ning??n n??mero negativo
// console.log(evens.find(x => x % 3 === 0)) //nos muestra el elemnto que cumple, en este caso 6
// console.log(evens.find(x => x % 7 === 0)) //no hay m??ltiplos de 7. undefined.

//Ordering Arrays

// let numbers2 = [1, 2, 3, 4, 5];
// console.log(numbers2.reverse());

// let moreNumbers = [0, 1, 5, 10, 15];
// moreNumbers.sort();
// console.log(moreNumbers); // lo trata como si fueran letras, funciona mejor con letras
// // con esta ayudita .sort en forma de funci??n, funciona bien con n??meros.
// function compare(value1, value2){
//   if (value1 < value2){
//     return -1;
//   }else if (value1 > value2) {
//     return 1;
//   }else{
//     return 0;
//   }
// }
// moreNumbers.sort(compare);
// console.log(moreNumbers)

//another comparison function

// let numbers = [4, 2, 5, 1, 3, 7, 7, 9, -1];
// let counter = 0;
// numbers.sort(function (a, b){
//   counter++;
//   console.log("a:", a);
//   console.log("b:", b);
//   console.log(a - b);
//   return a - b,
// });
// console.log(numbers);
// console.log(counter);

// numbers.sort((a,b)=>b-a)
// console.log(numbers);
// console.log(counter);

//Bubble sort

// let numbers5 = [3, 9, 8, 1, 4];
// for (let index = 0; index < numbers5.length -2; index++){
//     for(let j = 0, aux = 0; j < numbers5.length -1; j++){
//       if(numbers5[j] > numbers5[j+1]){
//         aux = numbers5[j];
//         numbers5[j] = numbers5[j+1];
//         numbers5[j+1] = aux;
//       }
//     }
// }
// console.log(numbers5)

//OTHERS LOOPS

// let numbers = [1, 4, 6, 8];
// let sum = 0;
// for (let num of numbers){
//   sum += num;
// }
// console.log(sum);

// let hero = {
//   character: "Iron Man",
//   name: "Tony Stark",
// };
// for (let key in hero){
//   console.log(hero[key]);
// }

//RECORRER ARRAYS Y OBJETOS

// ["Aragorn", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// });

// [..."Soberno de Angmar en tiempos pasados"].forEach((letter)=>{
//   console.log(letter);
// });

//recuerda forEach(
//   la flecha y el c??digo
// )

// let numbers = [1, 2, 3];
// let result = numbers.map((item, index, array) => item *10);
// console.log(result)

// let numbers2 = [15, 10, 5, 0, -5, -10];
// let result2 = numbers2.filter(x => x < 5);
// console.log(result2);

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.every((item, index, array) => item > 2)); // false, no todos los n??meros son menores de 2
// console.log(numbers.some((item, index, array) => item > 2)); // true, alguno de los valores es menor de 2

// let numbers2 = [1, 2, 3, 4, 5];
// let result = numbers2.reduce((accum, item, index, array) => accum + item, 0);
// console.log(result)
// let result2 = numbers.reduceRight((accum, item, index, array) => accum + item, 0);
// console.log(result2);
//------------------------
//COMO HACER UN CALENDARIO
//--------------------------
// let calendar = new Array(5);// 5 rows of the calendar
// for (let i = 0; i < calendar.length; i++) {
//   calendar[i] = new Array(7);// each row has 7 columns
// }

// //initialize the array
//   for (let row = 0, day = 1; row < calendar.length; row++) {
//     for (let col=0; col< calendar[row].length;col++) {
//     if (day < 31) {
//       calendar[row][col] = day++;
//     } else {
//       calendar[row][col] = day;
//       day = 1;
//     }
//   }
// }
// console.log(calendar);
//-------------
//FUNCTIONS
//-------------

//typical function example
// function sum(num1, num2){
//   console.log(num1+num2);
// }

// //expresion de funci??n
// const sum = function (num1, num2) {//se pordr??a usar let, pero vamos a utilizar const
//   return num1 + num2;
// }//no se pueden utilizar antes de su declaraci??n

// //calling a function before the declaration

// sayHello("my friend", "today will be a great day");

// function sayHello(name, message) {
//   console.log("hello " + name + ", " + message);
// }

//arrow functions

// const sum = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(sum(3, 4))

// const cube = x => (x*x)*6;
// console.log(cube(4));

//return, devoluci??n de un valor. Adem??s el c??digo termina ah??, no aparacer?? lo que hay debajo del bloque.
// function sum(num1, num2) {
//   return num1 + num2;
//   console.log("Hello World");
// }
// console.log(sum(2, 2));

//-------
//DESESTRUCTURACI??N
//-------

// let numbers = [1, 2, 3, 4, 5];
// let [a, b, ...parcial] = numbers; //a=1, b=2, parcial= 3,4,5
// console.log([parcial]);
// [, a] = [2, 4, 6]; //a=4, discard other values
// console.log(a);
// [a, b, c, d, e, ...h] = [2, 4, 6, 8, 10, 12, 14]; //values under 10 in a,b,c,d,e and h has 12 and 14
// console.log(a, b, h);

// desestructuraci??n de un objeto

// const hero = {
//   character: "Doctor Strange",
//   name: "Bendedict Cumberbatch",
//   powers: {
//     artifacts: ["eye of agamotto", "book of the vishanti", "orb of agamotto"],
//     skills: ["judo", "magically conjured weapons"],
//   },
// };

// const {
//     character,
//     powers: {artifacts, ...otherPowers},
//     ...otherHeroInfo
// } = hero;
// console.log(hero)
// console.log(character);
// console.log(artifacts);
// console.log(otherPowers);
// console.log(otherHeroInfo);

// const {
//     powers:{ skills: [habilityOne, ]}, 
// } = hero
// console.log(habilityOne)

//-------
//JSON
//-------
//prop??sito de enviar datos a trav??s de la red

// let person = {
//     id: 1,
//     first_name: "John",
//     last_name: "Doe",
//     email: "john@google.com",
// };

// let jsonText = JSON.stringify(person);
// console.log(jsonText)

// let anotherPerson = JSON.parse(jsonText);
// anotherPerson.first_name = "Jane";
// anotherPerson.last_name = "P??rez"
// anotherPerson.email = "jane@yahoo.es"
// console.log(person);
// console.log(anotherPerson);

//-------
//LOCALSTORAGE AND SESSIONSTORAGE
//-------

//LOCAL STORAGE

// //web Storage
// //localStorage
// let userName = prompt('Please enter your name: ');
// let phone = prompt('Please enter your phone: ');
// //save info
// localStorage.name = userName;
// localStorage.phone = phone;
// //query info
// console.log(localStorage.name);
// console.log(localStorage.phone);
// localStorage.clear() // remove all properties of a storage object

// //save and query objects
// let data = {userName, phone};
// localStorage.data = JSON.stringify(data);
// console.log(JSON.parse(localStorage.data));
// // getItem(), setItem(), and removeItem() methods are also avaiable to manage data
// let token = 
// localStorage.setItem("token", token);
// console.log(localStorage.getItem("token"));
// localStorage.removeItem("token";
// console.log(localStorage.getItem("token"));

// //saving dates
// let loginDate = (new Date()).toUTCString();
// let loginDate2 = (new Date()).toString(); //m??s f??cil y sencillo
// localStorage.loginDate = loginDate;
// localStorage.loginDate2 = loginDate2;
// console.log((new Date(Date.parse(localStorage.loginDate))));
// console.log((new Date(Date.parse(localStorage.loginDate2))))
// //check application tab in dev tools
// localStorage.clear()


//SESSIONSTORAGE
//almacena la informaci??n mientras est?? abierto el navegador. Hay que tener en cuenta
//que los navegadores, hoy d??a son capaces de restaurar ventanas cerradas con lo que 
//la informaci??n quedar?? guardada ma?? tiempo.

//sessionStorage
// let date = new Date()
// let logginTime = 
// date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// sessionStorage.setItem("loggedAt", logginTime);
// console.log(sessionStorage.getItem("loggedAt"));

//ASYNCHRONOUS JAVASCRIPT 

//synchrono

 
// const sayHello = (userName) => {
//     console.log("Hi " + userName);
// };
// const getUserName = (callback) => {
//     let userName = prompt("Please, enter your name: ");
//     callback(userName)
// };
// getUserName(sayHello)

//es un ejemplo donde complicamos algo sencillo para ver un callback. Es una funci??n que 
//se le pasa a otra funci??n cuando termina la segunda, devuelve el control a la primera
//. Si es as??ncrono esperar?? a que haya un evento para que el 
//callback act??e. As?? no se bloquean entre ellas

//asynchronous callback
// const countDown = () => {
//     console.log("Ready?");
//     let start = 0;
//     let end = 0;
//     // let count = 3;
//     for (let i = 5, count = 1;  i >= 0; i--, count++) {
//         start = new Date().getTime();
//         console.log(start);
//         setTimeout(() => {
//             end = new Date().getTime();
//             console.log(i===0 ? "GO!" : i);
//             console.log(count);
//             console.log(end-start, " ms");
//         }, count * 1000);
//     }
// };
// countDown()
// console.log("Steady")

//Callback hell

// const countDownHell = () => {
//     let start =5;
//     setTimeout(()=> {
//         console.log(start--);
//         setTimeout(()=> {
//             console.log(start--);
//             setTimeout(()=> {
//                 console.log(start--);
//                 setTimeout(()=> {
//                     console.log(start--);
//                     setTimeout(()=> {
//                         console.log(start--);
//                         setTimeout(()=> {
//                             console.log(start--);
//                             setTimeout(()=> {
//                                 console.log("Running");
//                             },1000);
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000)
//     },1000); 
//     };
// countDownHell();

//Promises
//esquema de una promesa.

// let doSomeAsyncSTuff = () => 
// new Promise((resolve,reject) => {
//     if (done) {
//         //fullfilled
//         resolve(console.log("success"));
//     }else{
//         //rejected
//         reject(err.message)
//     }
// });

//Promise (resolved)

// let successPromise = new Promise((resolve, reject) => resolve("success!"));
// setTimeout(console.log, 0, successPromise)

// // Promise (rejected)

// let errorPromise = new Promise((resolve, reject) => reject(new Error("something went wrong.")));
// setTimeout(console.log, 0 , errorPromise)

//Promise (pending)

// let promise = new Promise(() => {});
// setTimeout(console.log, 0, promise)

//Promises - chaining with then()

// //without then()
// let promise1 = fetch("/api/movies");
// //promise 1 , task 1
// let promise2 = promise1.then(callback1);
// //promise 2, task 2
// let promise3 = promise2.then(callback2);

//chaining promises
// const onResolved = (id) => {
//     setTimeout(console.log, 0, id, "resolved");
// };
// const onRejected = (id) => {
//     setTimeout(console.log, 0, id, "rejected")
// };

// let promise1 = new Promise((resolve,reject) => setTimeout(resolve, 1000));
// let promise2 = new Promise((resolve,reject) => setTimeout(reject, 2000));
// promise1.then(
//     () => onResolved("promise1"),
//     () => onRejected("promise1")
// );
// promise2.then(
//     () => onResolved("promise2"),
//     () => onRejected("promise2")
// );

// //catching promises

// let promise = new Promise((resolve, reject) => setTimeout(reject(new Error("catching the error")),1000)
// );
// promise.then(() => alert("promise solved")).catch(error => console.log(error));

//-------
//ASYNC/AWAIT
//-------

//lo mismo m??s cl??sico

// async function getNumber(n) {
//     console.log(n);
// };
// const getNumber = async function (n) {
//     console.log(n);
// };

//opci??n m??s moderna

// const getNumber = async () => {
//     console.log(1);
//     console.log(2)
//     return 4;
// };
// getNumber().then(console.log);
// console.log(3);

//async/await

//Can't catch rejected promises

// const getNumber = async () => {
//     console.log(1);
//     Promise.reject(3);
// };
// //Uncaught (in promise) 3
// getNumber().catch(console.log);
// console.log(2);

//Now the rejected promises can be catched

// const getNumber = async () => {
//     console.log(1);
//     await Promise.reject(3);
// };
// getNumber().catch(console.log);
// console.log(2);

//Not allow

// const sayHello = async () => {
//     const sayHelloWorld = () => {
//         return await Promise.resolve("Hello");
//     };
//     console.log(sayHelloWorld());
// };

//working as synchronous

// const count = async () => {
//     console.log(2);
// };
// console.log(1);
// count();
// console.log(3);

// await make asynchronous the code

// const count = async () => {
//     console.log(2);
//     await null;
//     console.log(4);
// };
// console.log(1);
// count();
// console.log(3);

//-------
//NETWORKING
//-------

//Networking (fetch() + JSON Server)

// window.addEventListener("load", () => {
//     //Get all posts
//     fetch("https://jsonplaceholder.typicode.com/posts/")
//     .then((response) => response.json())
//     .then((json) => console.log("trying get: ", json));
//     //Get a specific post
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     //Insert a new post
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify({
//             title: "foo",
//             body: "bar",
//             userId: 1,
//         }),
//         headers: {
//             "content-type":
//             "application/json; charset=UTF-8",
//         },
//     })
//     .then((response) => response.json())
//     .then((json) => {
//         console.log("trying post: ", json)
//     });
//     //Update a post
//     fetch("https://jsonplaceholder.typicode.com/posts/1", {
//         method: "POST",
//         body: JSON.stringify({
//             title: "foo",
//             body: "bar",
//             userId: 1,
//         }),
//         headers: {
//             "content-type":
//             "application/json; charset=UTF-8",
//         },
//     })
//     .then((response) => response.json())
//     .then((json) => {
//         console.log("trying put: ", json);

//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//         .then((json) => console.log(json));
//     });
//     //deleting a post
//     fetch("https://jsonplaceholder.typicode.com/posts/1", {
//         method: "DELETE",
//     });
// });

//Deeping into response object

// fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
//     console.log(response);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.ok);
//     //another way to read the contents of a response
//     response.text().then((data) => {
//         console.log(JSON.parse(data));
//     });
// });

//Full example

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response) => {
//     if(
//         response.ok &&
//         response.headers.get("Content-Type") === "application/json; charset=utf-8"
//         ){
//             return response.json();
//          }else {
//              console.log(response.headers.get("Content-Type"));
//              throw new Error(`Unexpected status ${response.status} or content type`);
//          }   
// })
// .then((data) => console.log(data))
// .catch((error) => console.log(error));




