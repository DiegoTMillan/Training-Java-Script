//-------
//QUERYSELECTOR
//-------

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

//-------
//HTML LOCATION
//-------

// console.log(nav.children[0].children[0].children[0]);
// console.log(headersAndParagraphs[0].nextElementSibling.nextElementSibling);
// console.log(document.body.firstElementChild.nextElementSibling);
// console.log(document.body.children[1].firstElementChild.lastElementChild.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(nav.firstElementChild.childElementCount);
// console.log(document.body.childElementCount);

// console.log(headersAndParagraphs[0].firstChild);
// console.log(headersAndParagraphs[0].firstChild.nodeValue);
// console.log(nav.nodeName);

// let box1 = document.body.children[0].firstElementChild;
// let box2 = box1.nextElementSibling;
// let box3 = box2.nextElementSibling;

//-------
//ADD AND REMOVE CSS CLASS
//-------

// box1.classList.add("dark");
// box1.classList.remove("dark")
// box2.classList.add("light");
// box2.classList.remove("light")
// box2.classList.add("dissapear")
// box2.classList.remove("dissapear");

// box2.classList.toggle("light");
// // box2.classList.toggle("light");
// // box2.classList.toggle("light");
// //toggle lo enciende y apaga sucesivamente

// console.log(box3.classList.contains("light")) //false, porque no contiene esa clase
// console.log(box2.classList.contains("light"));//True porque el toggle solo está una vez y está activo en el box 2 la clase light

//-------
//DATASET
//-------

// let number = document.querySelector("section").lastElementChild.previousElementSibling.dataset.boxNumber;
// console.log(number);//devuelve los datos o referencias aportados en el html

//-------
//EDITING HTML FROM JS
//-------

// document.body.innerHTML = "<h1>Waw</h1>"
// console.log(document.querySelector("section").innerHTML)
// console.log(document.querySelector("section").outerHTML)
// document.querySelector("section").outerHTML = "<h1>Waw</h1>"

// document.body.insertAdjacentHTML('afterbegin','<nav class="nav">Navigation </nav>');
// document.querySelector("nav").insertAdjacentHTML("beforebegin", '<h1>Main Header</h1>')
// document.querySelector("nav").insertAdjacentHTML("beforeend", '<a href="https://google.com">Go google</a>')
// document.querySelector("nav").insertAdjacentHTML("afterend", "<p>Lorem ipsum dolor sit amet.</p>")
// console.log(document.querySelector("h1").textContent);
// document.querySelector("h1").textContent = "Stronger together"

// let header = document.createElement("h1");
// header.append("Hello World!");
// header.prepend("¡");
// document.body.prepend(header);
// document.body.append(header);
// document.querySelector("h1").firstChild.before("I'm happy ")
// let paragraph = document.createElement("p");
// paragraph.textContent = "Writting a paragraph";
// // document.body.append(paragraph)
// document.querySelector("h1").after(paragraph);
// document.querySelector("h1").replaceWith(paragraph)//sustituido h1 por párrafo
// paragraph.remove();

//-------
//GIVING CSS FROM JS
//-------

// let paragraph = document.querySelector("p");
// //esto es como hacer CSS pero directamente desde js
// paragraph.style.textAlign = "center";
// paragraph.style.textTransform = "capitalize"
// paragraph.style.backgroundColor = "black";
// paragraph.style.color = "white";
// paragraph.style.padding = "1em";
// paragraph.setAttribute("class","margin");
// console.log(paragraph.getAttribute("class"));//devuelve la clase margin
// console.log(paragraph.style.cssText)//muestra todo el CSS de p en texto en la consola.

//-------
//PROPAGATION EXAMPLE
//-------

// document.body.addEventListener("click", () => alert("this is the body"))
// document.body.firstElementChild.addEventListener("click", () => alert("this is the section"))
// document.body.firstElementChild.firstElementChild.addEventListener("click", () => alert("this is the div"))

//-------
//EVENTLISTENER EXAMPLE
//-------

// document.body.addEventListener("click", () => {
//     document.body.style.backgroundColor = "black"
// });
// document.body.addEventListener("click", () => {
//     console.log("Hello World!")
// });

//-------
//EVENTLISTENER AND TIMESTAMP
//-------

// let time1 = 0.0,
// time2 = 0.0;
// document.body.addEventListener("click", (e) => {
//     document.body.style.background = "yellow";
//     time1 = e.timeStamp;
//     console.log(time1);
//     console.log(e.currentTarget);
// });
// document.body.addEventListener("click", (e) => {
//     console.log("Hello World!");
//     time2= e.timeStamp;
//     console.log(time2);
// });
// console.log(time2-time1);

//-------
//EVENT CANCELLATION
//-------

// console.log(document.forms[1]);
// document.forms[0].onsubmit = (e) => e.preventDefault();//onsubmit es como poner addEventListener del tiron con el on delante

//-------
//DRAG AND DROP
//-------

// let div1 = document.querySelector("#Uno");
// let div2 = document.querySelector("#Dos");

// div1.addEventListener("dragstart", () => {
//   console.log("div1 dispara dragstart");
// });
// div1.addEventListener("drag", () => {
//   console.log("div1 dispara drag");
// });
// div1.addEventListener("dragend", () => {
//   console.log("div1 dispara dragend");
// });

// div2.addEventListener("dragenter", (e) => {
//   console.log("div2 dispara dragenter");
//   e.preventDefault()
// });
// div2.addEventListener("dragover", (e) => {
//   console.log("div2 dispara dragover");
//   e.preventDefault()
// });
// div2.addEventListener("dragdrop", () => {
//   console.log("div2 dispara dragdrop");
// });
// div2.addEventListener("dragleave", () => {
//   console.log("div2 dispara dragleave");
// });

// let droptarget = document.querySelector("#droptarget");
// droptarget.addEventListener("dragover", (e) => {
//   e.preventDefault();
// });
// droptarget.addEventListener("dragenter", (e) => {
//   e.preventDefault();
// });

//-------
//DESESTRUCTURACIÓN
//-------

let numbers = [1, 2, 3, 4, 5];
let [a, b, ...parcial] = numbers;//a=1, b=2, parcial= 3,4,5
console.log([parcial]);
[ ,a] = [2, 4, 6];//a=4, discard other values
console.log(a);
[a, b, c, d, e,...h] = [2, 4, 6, 8, 10, 12, 14];
console.log(h)


