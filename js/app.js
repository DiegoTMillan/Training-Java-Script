//selección individual
// let nav = document.querySelector("nav")//con un punto delante para clase, y con almohadilla para id
// console.log(nav);
// let active = document.querySelector(".active");
// console.log(active);
// let paragraph = document.querySelector("#first");
// console.log(first);

//selección global
// let headersAndParagraphs = document.querySelectorAll(`h1,p`);
// // console.log(headersAndParagraphs);
// // console.log(headersAndParagraphs[3].innerText);

// console.log(nav.children[0].children[0].children[0]);
// console.log(headersAndParagraphs[0].nextElementSibling.nextElementSibling);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.children[1].firstElementChild.lastElementChild.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(nav.firstElementChild.childElementCount);
// console.log(document.body.childElementCount);

// console.log(headersAndParagraphs[0].firstChild);
// console.log(headersAndParagraphs[0].firstChild.nodeValue);
// console.log(nav.nodeName);

let box1 = document.querySelector("section").firstElementChild;
let box2 = box1.nextElementSibling;
let box3 = box2.nextElementSibling;

box1.classList.add("dark");
// box1.classList.remove("dark")
box2.classList.add("dissapear");
// box2.classList.remove("dissapear");

