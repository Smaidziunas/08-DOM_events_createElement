# ==================== DOM and EVENTS ==============

- DOM - Document Object Model. Dar yra BOM - Browser Object Model.

- #### ! textContent - naudojama tik kai reikia PERRASYTI teksta.

- ### ! Nusitaikyti i elementa : document.queryselector(. or # 'name') / document.queryselectorAll(. or # 'name') / document.getlElementById('id name');

  grazina arba HTML collection, arba nodes list;

- ### Atliekant stiliaus veiksmus su elementais, reikia rasyti <style.>S

- ### Norint gauti elemento vaikinius elementus = elementas.children;

      Toliau galima valdyti kai array su [1,2,etc];
      Taip pat, pirmas elementas: .firstElementChild;
      Taip pat: .lastElementChild, .previousElementSibling, .nextElementSibling;

- ## ! EventListener:

      method: .addEventListener("click (arba kitoks type)", funkcijaBeSkliaustu);

- ### Date code simplified:

  const d = new Date();
  let text = d.toLocaleDateString();

- ### method.remove() - istrina nusikreipta elementa.
