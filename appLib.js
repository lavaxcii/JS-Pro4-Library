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

const bookShelf = document.querySelector('.bookShelf');
const addBookDiv = document.querySelector('.addBookDiv');
const addBookIcon = document.querySelector('.fa-plus-circle');
const dataInputForm = document.querySelector('.dataInputForm');
const form = document.querySelector('form');
let n = -1;

function showHideDataInputForm(clicked) {
  if (dataInputForm.style.visibility === 'visible') {``
    if (authorName.value === '' || bookName.value === '' || nrOfPages.value === '' || centuryOfPrint.value === '' || pressType.value === '') {
      console.log('fak no')
      return;
    } else {
      addBookIcon.style.fontSize = '6rem';
      addBookDiv.style.visibility = 'visible';
      dataInputForm.style.visibility = 'hidden';
      console.log('damn straigj nigga')
      return;
    };
  };
  // if (clicked.target.classList.contains('bookButtons1')) {
  //   document.querySelector('.submitButton').style.pointerEvents = 'none';
  //   document.querySelector('.modifyButton').style.pointerEvents = 'auto';
  // } else if (clicked.target.classList.contains('fa-plus-circle')) {
  //   document.querySelector('.submitButton').style.pointerEvents = 'auto';
  //   document.querySelector('.modifyButton').style.pointerEvents = 'none';
  // };
  addBookIcon.style.fontSize = '0rem';
  addBookDiv.style.visibility = 'hidden';
  dataInputForm.style.visibility = 'visible'
}

function removeBookFromShelf(clicked) {
  clicked.srcElement.parentElement.parentElement.remove();
  console.log(clicked.srcElement.parentElement.parentElement);
}

// function changeDataOnFly(clicked) {
//   showHideDataInputForm(clicked);
//   console.log(clicked.srcElement.parentElement.parentElement);
  
// };


function createBookOnShelf() {
  n++;
  const bookOnShelf = document.createElement('div');
  bookShelf.appendChild(bookOnShelf);
  bookOnShelf.classList.add(`bookOnShelf${n}`);
  bookOnShelf.classList.add(`bookOnShelf`);
  for (let nn = 1; nn < 10; nn++) {
    const bookSections = document.createElement('div');
    const dataToShow = document.createElement('p');
    document.querySelector(`.bookOnShelf${n}`).appendChild(bookSections);
    bookSections.classList.add(`div${nn}`);
    document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).appendChild(dataToShow); 
    if (nn === 9) {
      const delButton = document.createElement('button');
      // const mdfyButton = document.createElement('button');
      document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).appendChild(delButton).innerText = 'DEL';
      // document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).appendChild(mdfyButton).innerText = 'MDFY';
      let nOfBtns = 0;
      document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).querySelectorAll('button').forEach((btns) => {
        btns.classList.add(`bookButtons${nOfBtns}`);
        nOfBtns++;
      });
    };
    dataToShow.classList.add(`p${nn}`);
    dataToShow.classList.add(`bookOnShelf${n}`);
    document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).querySelector('p').setAttribute('contenteditable', 'true');
    document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).querySelector('p').setAttribute('onkeypress', 'return (this.innerText.length <= 35)');
  };
  document.querySelectorAll('p').forEach((ps) => {
    if (ps.classList.contains('p1') && ps.classList.contains(`bookOnShelf${n}`)) {
      ps.innerText = 'Author ' + library[`${n}`].author;
    } else if (ps.classList.contains('p2') && ps.classList.contains(`bookOnShelf${n}`)) {
      ps.innerText = 'wrote ' + library[`${n}`].title;
    } else if (ps.classList.contains('p3') && ps.classList.contains(`bookOnShelf${n}`)) {
      ps.innerText = library[`${n}`].numberOfPages + ' pages';
    } else if (ps.classList.contains('p4') && ps.classList.contains(`bookOnShelf${n}`)) {
      ps.innerText = library[`${n}`].centuryOfPrint + '.century';
    }  else if (ps.classList.contains('p5') && ps.classList.contains(`bookOnShelf${n}`)) {
      ps.innerText = library[`${n}`].printingPress + ' method';
    } else if (ps.classList.contains('p6') && ps.classList.contains(`bookOnShelf${n}`)) {
      if (library[`${n}`].haveYouReadItYet === 'true') {
        ps.innerText = 'I read it';
      } else {
        ps.innerText = 'I have not read it';
      };
    } else if (ps.classList.contains('p7') && ps.classList.contains(`bookOnShelf${n}`)) {
      if (library[`${n}`].isItCute === 'true') {
        ps.innerText = 'Yes, it is cute';
      } else {
        ps.innerText = 'No, it is not cute';
      };
    } else if (ps.classList.contains('p8') && ps.classList.contains(`bookOnShelf${n}`)) {
      if (library[`${n}`].isThereACats === 'true') {
        ps.innerText = 'Yes, there are cats';
      } else {
        ps.innerText = 'No, there are no cats';
      };
    };
    activateDelMdfyBtns();
  });
};

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
  createBookOnShelf();

  form.reset();
};

function inputDataToLibrary() {
  const authorName = document.querySelector('#authorName');
  const bookName = document.querySelector('#bookName');
  const nrOfPages = document.querySelector('#nrOfPages');
  const centuryOfPrint = document.querySelector('#centuryOfPrint');
  const pressType = document.querySelector('#pressType');
  if (dataInputForm.style.visibility === 'visible' && (authorName.value === '' || bookName.value === '' || nrOfPages.value === '' || centuryOfPrint.value === '' || pressType.value === '' || authorName.value === ' ' || bookName.value === ' ' || nrOfPages.value === ' ' || centuryOfPrint.value === ' ' || pressType.value === ' ')) {
    // add cases for number entries that are below or
    // min max value!
    console.log(false);
    return;
  } else {
    console.log(true);
    showHideDataInputForm();
    addBookToShelf();
  };
};

const bookShelfMessage = document.querySelector('.bookShelfMessage');
function rotateMessageColors() {
  function rgbRng() {
    let randomRgbNr = Math.floor(Math.random() * 255) + 0;
    return randomRgbNr;
  };
  let rgb1 = rgbRng();
  let rgb2 = rgbRng();
  let rgb3 = rgbRng();
  setTimeout(() => {
    bookShelfMessage.style.color = `rgb(${rgb1}, ${rgb2}, ${rgb3}`;
  }, 5500);
  setTimeout(() => {
    rotateMessageColors();
  }, 5500);
}
rotateMessageColors();

document.querySelector('.addBookButton').addEventListener('click', showHideDataInputForm);
document.querySelector('.submitButton').addEventListener('click', inputDataToLibrary);

function activateDelMdfyBtns() {
  document.querySelectorAll('.bookButtons0').forEach((dels) => {
    dels.addEventListener('click', removeBookFromShelf);
  });
  // document.querySelector('.bookButtons1').addEventListener('click', changeDataOnFly);
};


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
-- 2 -- TYPE OD DATA THAT USER WILL INPUT ++
Iz navedenoga se vidi da imamo: string, string, nr, nr,
string, bol, bol i bol.
TODO
-- 3 -- SUGGESTED WAY OF INPUTING DATA ++
To bi valjalo unjeti na način: inp, inp, inpNr, inpNr,
inp, button, button, buttona.
Potom neki kao submit/done i onda se to slaže ili
horizontalno ili vertikalno.
TODO
-- 4 -- HOW TO MAKE BOOKS DATA (NON)VISIBLE ++
Ako si želim OLAKŠATI onda bi valjalo da se na hover
ili klik 'otvori' knjiga i da se vide podaci ili još
LAKŠE da nema toga već da jednostavno su uvijek vidljivi.
Nadalje, kada se stavi prva knjiga onda se nudi isti
takav okvir (ali manji) za daljnje slaganje u horizontali ili
vertikali (koji se uveća za unos).
TODO
-- 5 -- GIVING USER POSSIBILITY TO REARRANGE BOOKS --
Mogao bi biti LUD i napraviti da se može
preslagati redosljed knjiga! :D Oo!?! Ili na naćin da
ide po propertisima ili da se jednostavno može kao
'prevući' mišem na višlje ili niže mjesto. Će da se
razmislim o tome.
TODO
-- 6 -- REMOVE BUTTON NEEDED ++
Zadatak traži da se doda i remove button.
TODO
-- 7 -- USER CAN CHANGE READ STATUS ON FLY ++
Također, traži se mogućnost promjene read statusa i
nakon unosa!
+ Added option to modify all data
TODO
-- 8 -- SAVING DATA TO LOCAL STORAGE
Dodatno, valja napraviti da se library array spremi na
local storage (v. zadatak za još detalja)
*/