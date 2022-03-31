//selección individual
let nav = document.querySelector("nav")//con un punto delante para clase, y con almohadilla para id
console.log(nav)
let active = document.querySelector(".active");
console.log(active)

//selección global
let headersAndParagraphs = document.querySelectorAll(`h1,p`);
console.log(headersAndParagraphs)
console.log(headersAndParagraphs[0].innerText);
