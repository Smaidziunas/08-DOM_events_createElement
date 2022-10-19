'use strict';
console.log('dom.js');


// const nuorodaIapp = document.getElementById('app');

// console.log('nuorodaIapp ===', nuorodaIapp);

// let allLiELs = document.querySelectorAll('.listEl');


const allLiEls = document.querySelectorAll('.listEl');

console.log('allLiEls ===', allLiEls);


// gautis tuos pacius list elementus su get.elementsByClassName

// const allLiElsClass = document.getElementsByClassName('allLiEls');

// console.log('allLiElsClass ===', allLiElsClass);

// pakeisti elementu spalva i melyna:


// let backgroundPakeistas = console.log(allLiELs[1]);
// allLiELs[1].style.backgroundColor = "magenta";


// allLiEls[1].style.backgroundColor = "magenta";

// for (const oneEl of allLiEls) {
//   oneEl.style.backgroundColor = "magenta";
// };


// pakeisti h1 antrastes texta 'Dynamic Heading'

const h1el = document.querySelector('h1');

h1el.textContent = 'Dynamic Heading';

h1el.style.fontSize = "57px"; 