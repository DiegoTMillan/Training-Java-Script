//----------
//EXERCISES MOD 3
//----------

//Exercise 3.1.

// function getRandomArray(){
//User properties
let userMaxLimit = parseInt(prompt("Please, enter max limit"));
let userMinLimit = parseInt(prompt("Please, enter min limit"))
//Preparing array
result = new Array (20)
//Let's create random numbers
for (i=0 ; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * (userMaxLimit - userMinLimit + 1)) + userMinLimit;
    console.log(randomNumber)
    result[i] = randomNumber
}
 console.log(result)
// }