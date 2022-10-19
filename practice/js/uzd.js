'use strict';
console.log('uzd.js');


// 1. pakeisti h1 teksto spalva i tomato;

{
//   const h1el = document.querySelector('h1');

// // NETINKA h1el.textContent.style.color = 'tomato'; 
// h1el.style.color = 'tomato';
}


// 2. padaryti, kad fonto storis butu normalus <h2>Some title</h2>;

{
  // h1el.style.fontStyle = 'normal';
}

// 3. <p> irasysim teksta : 'man pavyko dinamiskai atkurti teksta';

{
  // const paragEl = document.getElementById('parag');
  // console.log('paragEl ===', paragEl);
// paragEl.textContent = 'man pavyko dinamiskai atkurti teksta';

}

// 4. <li>two</li> padidinti srifto dydi iki 34px.

{
// let olListEl = document.querySelector('#list');

// console.log('olListEl ===', olListEl);

// let child2 = olListEl.children[1];

// let child1 = olListEl.firstElementChild;

// console.log('child1 ===', child1);
// console.log('child2', child2);

// child2.style.fontSize = '34px';

// child1.style.fontWeight = 'bold';
// child1.style.color = 'yellow';
}


// 5. paspaudus mygtuka <button>click me</button> pakeisti h1 teksta i 'Pakeiciau su mygtuku' 

{
// setting button element 
let btnEl1 = document.getElementById('btn1');

// setting h1 element
let h1el = document.querySelector('h1');

// changing h1 text if button is pressed
function h1changedEl() {

  if (h1el.textContent === 'Pakeiciau su mygtuku') {
    h1el.textContent = 'Welcome';
  } else {
    h1el.textContent = 'Pakeiciau su mygtuku';
  }

};

// uzdedu eventListener:
btnEl1.addEventListener("click", h1changedEl);
}

// 6. <p class="time">12:45</p> elementui pakeisti teksta i dabartini laika pvz '13:50' ir padaryti pastorinta srifta

{
// // nusitaikau i <p class = time>;
// let timeClassEl = document.querySelector('.time');

// // kuriu funkcija i kuria dedu stiliaus properties;
// function timeChEl (){

//   const d = new Date();
//   let text = d.toLocaleDateString();

//   timeClassEl.style.fontWeight = 'bold';
//   timeClassEl.textContent = text;
// }

// // pritaikau funkcija
// timeClassEl = timeChEl();

}

// // 7. <li>one</li> istrinti

{
//  let olEl = document.querySelector('#list');

//  document.body.addEventListener('click', paspaudei);

//   function paspaudei (event) {
//     let elRm = document.getElementById('list');

//     // console.log('paspaudei');
//     // console.log('event.target ===', event.target);
//     // console.log('event.target.idName ===', event.target.id.children);
//     // console.log('colorbck', event.target.style.backgroundColor);

//     if (event.target === elRm.children[0]) {
//       if (elRm.children.length > 3) {
//       elRm.children[0].remove();
//     }}

//     console.log('bye bye');
//   }
}

// 8. paspaudus <button>make article dark</button> padaryti <article> fona juoda, o teksta balta

{
//  let articleEl = document.querySelector('#article');
//  let asideID = document.querySelector('#aside');
//  let btn2El = asideID.children[1];

//  console.log('btn2El ===', btn2El);


// btn2El.addEventListener("click", articleDark);

// function articleDark(event){
//   if(articleEl.style.color ==='white'){
//     articleEl.style.color ='black';
//     articleEl.style.backgroundColor = "white";
//   } else {
//     articleEl.style.color ='white';
//     articleEl.style.backgroundColor = "black";
//   }
// }

}

// 9. paspaudus <button>delete first li from list</button> istrinti pirma li el is <ol>

{
// // aprasau aside id;
// let asideEl = document.querySelector('#aside');
// // aprasau list item kuri pasalinsim;
// let listOl = document.querySelector('#list');
// let listEl = listOl.children[0];

// // aprasau button;
// let btn3El = asideEl.children[2];
// console.log('btn3El ===', btn3El);

// // idedu event listener arrow function:
// btn3El.addEventListener('click', (deleteEl) => {
// listEl.remove();
// })

}




// // sunkesnis tiems kas norit extra
// 10. susikurti masyva su spalvomis red, green, blue, violet, pink, black
// 10.1 sugeneruoti li elementu stringa is masyvo
// 10.2 i <ol> elemento vidu ideti ta stringa (olEl.innerHTML = generatedString)
// 10.3 padaryti kad kiekvienas elementas turetu fono spalva tokia kokia yra irasyta tarp li tagu.

// 11. <button>change h1 color to blue</button> paspaudus daro tai kas parasyta

// 12. gauti ir iskonsolinti kiek elementu yra ol saraso elemente. 

// 13. su js padidinti visu ol li elementu teksto raides i upperCase

// 14. prie esamos  <h3 class="blog__title">Hello people</h3> prideti teksta '--Naujiena--'

// 15. prie esamos  <p class="blog__text">Sveiki cia James.</p> prideti "as esu is Londono"

// 16.  <button>light</button> padaro <article class="blog"> fona juoda o teksta balta

// 17.  <button>dark</button> padaro <article class="blog"> texta juoda o fona balta

// 18 <button>destroy</button> istrina <article class="blog">

// 19. <div class="box-container"></div> i vidu ikelti paragrafa su tekstu "i am dynamic" (innerHTML)

// 20.  <button>add paragraph</button> paspaudus ivyksta 19ta uzduotis

// 21. <button>Turn <span>dark</span> mode on</button> paspaudus pakeiciam teksta dark i light

// 22. <button>Turn <span>dark</span> mode on</button> kiekviena karta paspaudus keiciam teksta dark i light ir atvirksciai


