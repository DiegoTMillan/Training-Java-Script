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

//Encontrar números primos.

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

// aunque con una condición booleana se puede hacer también un break

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
//málaga sean los que salgan, así si salen los de málaga vuelve
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

// observar que en el primer caso de valores primitivos si se guarda x y se refiere a él
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

let shoppingCart = {
  shoes1: {
    product_id: 0,
    name: "Air Jordan",
    price: "127$",
    quantity: 5,
  },
  shoes2: {
    product_id: 1,
    name: "Air Magic",
    price: "134$",
    quantity: 3,
  },
  shoes3: {
    product_id: 2,
    name: "Air Bird",
    price: "185$",
    quantity: 8,
  } ,
  shoes4: {
    product_id: 3,
    name: "Air Kobe",
    price: "457$",
    quantity: 1,
  },
}
let shoes4 = new Object(shoppingCart.shoes1);
console.log(shoes4)

console.log(Object.keys(shoppingCart.shoes2))
console.log("       id: " + shoppingCart.shoes1.product_id + " name: " + shoppingCart.shoes1.name + " " + shoppingCart.shoes1.price + " " + shoppingCart.shoes1.quantity + " quantity");
console.log("       id: " + shoppingCart.shoes2.product_id + " name: " + shoppingCart.shoes2.name + " " + shoppingCart.shoes2.price + " " + shoppingCart.shoes2.quantity + " quantity")
console.log("       id: " + shoppingCart.shoes3.product_id + " name: " + shoppingCart.shoes3.name + " " + shoppingCart.shoes3.price + " " + shoppingCart.shoes3.quantity + " quantity")
console.log("       id: " + shoppingCart.shoes4.product_id + " name: " + shoppingCart.shoes4.name + " " + shoppingCart.shoes4.price + " " + shoppingCart.shoes4.quantity + " quantity")