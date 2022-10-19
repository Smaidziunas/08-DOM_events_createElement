'use strict';
console.log('deleteList.js');

// aspaudus, istrinti ta elementu sarasa;

// event - informacija apie ivyki
document.body.addEventListener('click', (event) => {
  // anonimine funkcija
  console.log('paspaudei');
  // tai ant ko paspaudem
  // event.target - elementas ant kurio paspaudem
  console.log('event.target ===', event.target);
  console.log('event.target.className ===', event.target.className);
  event.target.style.backgroundColor = '#333';

  // jei paspaudziau ant el kuri turi klase deleteMe tai noriu ta el istrinti
  if (event.target.className === 'deleteMe') {
    event.target.remove();
    console.log('bye bye');
  }
});