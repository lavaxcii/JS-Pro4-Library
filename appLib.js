let library = [];

function Book(author, title, numberOfPages, centuryOfPrint, printingPress, haveYouReadItYet, isItCute, isThereACats) {
  this.author = author
  this.title = title
  this.numberOfPages = numberOfPages
  this.centuryOfPrint = centuryOfPrint
  this.printingPress = printingPress
  this.haveYouReadItYet = haveYouReadItYet
  this.isItCute = isItCute
  this.isThereACats = isThereACats
};

Book.prototype.readStatus = function(status) {
  return this.haveYouReadItYet = status;
}

Book.prototype.cutnessStatus = function(status) {
  return this.isItCute = status;
}

Book.prototype.catnessStatus = function(status) {
  return this.isThereACats = status;
}

const addBookDiv = document.querySelector('.addBookDiv');
const addBookIcon = document.querySelector('.fa-plus-circle');
const dataInputForm = document.querySelector('.dataInputForm');
const form = document.querySelector('form');

function addBookToShelf() {
  const authorName = document.querySelector('#authorName');
  const bookName = document.querySelector('#bookName');
  const nrOfPages = document.querySelector('#nrOfPages');
  const centuryOfPrint = document.querySelector('#centuryOfPrint');
  const pressType = document.querySelector('#pressType');
  const readStatus = document.querySelector('input[name="read"]:checked');
  const cutnessStatus = document.querySelector('input[name="cute"]:checked');
  const catnessStatus = document.querySelector('input[name="cat"]:checked');
  
  const book = new Book(`${authorName.value}`, `${bookName.value}`, `${nrOfPages.value}`, `${centuryOfPrint.value}`, `${pressType.value}`, `${readStatus.value}`, `${cutnessStatus.value}`, `${catnessStatus.value}`);
  library.push(book);

  form.reset();
}

function showHideDataInputForm() {
  if (dataInputForm.style.visibility === 'visible') {
    addBookIcon.style.fontSize = '6rem';
    addBookDiv.style.visibility = 'visible';
    dataInputForm.style.visibility = 'hidden';
    return;
  };
  addBookIcon.style.fontSize = '0rem';
  addBookDiv.style.visibility = 'hidden';
  dataInputForm.style.visibility = 'visible'
}

function inputDataToLibrary() {
  const authorName = document.querySelector('#authorName');
  const bookName = document.querySelector('#bookName');
  const nrOfPages = document.querySelector('#nrOfPages');
  const centuryOfPrint = document.querySelector('#centuryOfPrint');
  const pressType = document.querySelector('#pressType');
  if (dataInputForm.style.visibility === 'visible' && ((authorName.value || bookName.value || nrOfPages.value || centuryOfPrint.value || pressType.value) === '')) {
    return;
  } else {
    addBookToShelf();
  };
};

document.querySelector('.addBookButton').addEventListener('click', showHideDataInputForm);
document.querySelector('.submitButton').addEventListener('click', inputDataToLibrary);
document.querySelector('.submitButton').addEventListener('click', showHideDataInputForm);

/*
TODO:
-- 1 -- INTRO SCREEN ++
Kao prvo, ovo treba biti jednostavno - dakle, na
ekranu se treba pojaviti neki kao pravokutni okvir koji
ustvari ima jedan, recimo, veliki plus i onda kada se
to stisne bilo bi dobro da unutar toga okvira se ponudi
useru da unese putem inputa i buttona sve potrebne
podatke za knjigu.
TODO
-- 2 -- TYPE OD DATA THAT USER WILL INPUT
Iz navedenoga se vidi da imamo: string, string, nr, nr,
string, bol, bol i bol.
TODO
-- 3 -- SUGGESTED WAY OF INPUTING DATA 1/2+
To bi valjalo unjeti na način: inp, inp, inpNr, inpNr,
inp, button, button, buttona.
Potom neki kao submit/done i onda se to slaže ili
horizontalno ili vertikalno.
TODO
-- 4 -- HOW TO MAKE BOOKS DATA (NON)VISIBLE
Ako si želim OLAKŠATI onda bi valjalo da se na hover
ili klik 'otvori' knjiga i da se vide podaci ili još
LAKŠE da nema toga već da jednostavno su uvijek vidljivi.
Nadalje, kada se stavi prva knjiga onda se nudi isti
takav okvir (ali manji) za daljnje slaganje u horizontali ili
vertikali (koji se uveća za unos).
TODO
-- 5 -- GIVING USER POSSIBILITY TO REARRANGE BOOKS
Mogao bi biti LUD i napraviti da se može
preslagati redosljed knjiga! :D Oo!?! Ili na naćin da
ide po propertisima ili da se jednostavno može kao
'prevući' mišem na višlje ili niže mjesto. Će da se
razmislim o tome.
TODO
-- 6 -- REMOVE BUTTON NEEDED
Zadatak traži da se doda i remove button.
TODO
-- 7 -- USER CAN CHANGE READ STATUS ON FLY
Također, traži se mogućnost promjene read statusa i
nakon unosa!
TODO
-- 8 -- SAVING DATA TO LOCAL STORAGE
Dodatno, valja napraviti da se library array spremi na
local storage (v. zadatak za još detalja)
*/