let library = [];

function Book(id, author, title, numberOfPages, centuryOfPrint, printingPress, haveYouReadItYet, isItCute, isThereACats) {
  this.id = id
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
  const dataIdDiv = clicked.srcElement.parentElement.parentElement.getAttribute('data-id');
  library.forEach((books) => {
    if (dataIdDiv === books.id) {
      library.splice(`${library.indexOf(books)}`, 1);      
    } else {
      return;
    };
  });
  localStorage.removeItem(`${dataIdDiv}`);
};

function changeRCCStatus(clicked) {
  console.log(clicked.srcElement.parentElement.classList);
  let dataIdDiv = clicked.srcElement.parentElement.parentElement.getAttribute('data-id');
  let clickedDiv = clicked.srcElement.parentElement;
  library.forEach((books) => {
    if (dataIdDiv === books.id) {
      if (library[library.indexOf(books)].haveYouReadItYet === 'true' && clickedDiv.classList.contains('div6')) {
        library[library.indexOf(books)].readStatus('false');
        console.log('lib readStatus to FALSE!')
        clickedDiv.querySelector('.p6').innerText = 'I have not read it';
        console.log('reading p change!');
        return;
      } else if (library[library.indexOf(books)].haveYouReadItYet === 'false' && clickedDiv.classList.contains('div6')) {
        library[library.indexOf(books)].readStatus('true');
        console.log('lib readStatus to TRUE')
        clickedDiv.querySelector('.p6').innerText = 'I have read it';
        console.log('reading p change!')
        return;
      } else if (library[library.indexOf(books)].isItCute === 'true' && clickedDiv.classList.contains('div7')) {
        library[library.indexOf(books)].cutnessStatus('false');
        console.log('cutness lib to FALSE!')
        clickedDiv.querySelector('.p7').innerText = 'No, it is not cute!';
        console.log('cutness p change!')
      } else if (library[library.indexOf(books)].isItCute === 'false' && clickedDiv.classList.contains('div7')) {
        library[library.indexOf(books)].cutnessStatus('true');
        console.log('cutness lib to TRUE!')
        clickedDiv.querySelector('.p7').innerText = 'Yes, it is cute';
        console.log('cutness p change!')
      } else if (library[library.indexOf(books)].isThereACats === 'true' && clickedDiv.classList.contains('div8')) {
        library[library.indexOf(books)].catnessStatus('false');
        console.log('catness lib to FALSE!')
        clickedDiv.querySelector('.p8').innerText = 'No, there are no cats';
        console.log('catness p change!')
      } else if (library[library.indexOf(books)].isThereACats === 'false' && clickedDiv.classList.contains('div8')) {
        library[library.indexOf(books)].catnessStatus('true');
        console.log('catness lib to TRUE!')
        clickedDiv.querySelector('.p8').innerText = 'Yes, there are cats';
        console.log('catness p change!')
      }
      localStorage.setItem(`${dataIdDiv}`, JSON.stringify(library[library.indexOf(books)]));
    };
  });
};

// function changeDataOnFly(clicked) {
//   showHideDataInputForm(clicked);
//   console.log(clicked.srcElement.parentElement.parentElement);
  
// };


function createBookOnShelf() {
  const bookOnShelf = document.createElement('div');
  bookShelf.appendChild(bookOnShelf);
  bookOnShelf.classList.add(`bookOnShelf${n}`);
  bookOnShelf.classList.add(`bookOnShelf`);
  bookOnShelf.setAttribute('data-id', `${n}`);
  for (let nn = 1; nn < 10; nn++) {
    const bookSections = document.createElement('div');
    const dataToShow = document.createElement('p');
    document.querySelector(`.bookOnShelf${n}`).appendChild(bookSections);
    bookSections.classList.add(`div${nn}`);
    document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).appendChild(dataToShow);
    let nOfBtns = 0;
    const delButton = document.createElement('button');
    const inputButtons = document.createElement('button');
    dataToShow.classList.add(`p${nn}`);
    dataToShow.classList.add(`bookOnShelf${n}`);
    document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).querySelector('p').setAttribute('contenteditable', 'true');
    document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).querySelector('p').setAttribute('onkeypress', 'return (this.innerText.length <= 35)');
    if (nn > 5 && nn < 9) {
      document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).appendChild(inputButtons).innerText = 'MDF';
      document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).querySelector('p').setAttribute('contenteditable', 'false');
    } else if (nn === 9) {
      // const mdfyButton = document.createElement('button');
      document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).appendChild(delButton).innerText = 'DEL';
      // document.querySelector(`.bookOnShelf${n}`).querySelector(`.div${nn}`).appendChild(mdfyButton).innerText = 'MDFY';
      document.querySelector(`.bookOnShelf${n}`).querySelectorAll('button').forEach((btns) => {
        btns.classList.add(`bookButtons${nOfBtns}`);
        nOfBtns++;
      });
    };
  };
  document.querySelectorAll('p').forEach((ps) => {
    if (ps.classList.contains('p1') && ps.classList.contains(`bookOnShelf${n}`)) {
      ps.innerText = 'Author ' + library[`${library.length - 1}`].author;
    } else if (ps.classList.contains('p2') && ps.classList.contains(`bookOnShelf${n}`)) {
      ps.innerText = 'wrote ' + library[`${library.length - 1}`].title;
    } else if (ps.classList.contains('p3') && ps.classList.contains(`bookOnShelf${n}`)) {
      ps.innerText = library[`${library.length - 1}`].numberOfPages + ' pages';
    } else if (ps.classList.contains('p4') && ps.classList.contains(`bookOnShelf${n}`)) {
      ps.innerText = library[`${library.length - 1}`].centuryOfPrint + '.century';
    }  else if (ps.classList.contains('p5') && ps.classList.contains(`bookOnShelf${n}`)) {
      ps.innerText = library[`${library.length - 1}`].printingPress + ' method';
    } else if (ps.classList.contains('p6') && ps.classList.contains(`bookOnShelf${n}`)) {
      if (library[`${library.length - 1}`].haveYouReadItYet === 'true') {
        ps.innerText = 'I have read it';
      } else {
        ps.innerText = 'I have not read it';
      };
    } else if (ps.classList.contains('p7') && ps.classList.contains(`bookOnShelf${n}`)) {
      if (library[`${library.length - 1}`].isItCute === 'true') {
        ps.innerText = 'Yes, it is cute';
      } else {
        ps.innerText = 'No, it is not cute!';
      };
    } else if (ps.classList.contains('p8') && ps.classList.contains(`bookOnShelf${n}`)) {
      if (library[`${library.length - 1}`].isThereACats === 'true') {
        ps.innerText = 'Yes, there are cats';
      } else {
        ps.innerText = 'No, there are no cats';
      };
    };
    activateDelMdfyBtns();
  });
};

function addBookToShelf() {
  console.log(`n before is ${n}`);
  n++;
  console.log(`n AFTER is ${n}`);
  const authorName = document.querySelector('#authorName');
  const bookName = document.querySelector('#bookName');
  const nrOfPages = document.querySelector('#nrOfPages');
  const centuryOfPrint = document.querySelector('#centuryOfPrint');
  const pressType = document.querySelector('#pressType');
  const readStatus = document.querySelector('input[name="read"]:checked');
  const cutnessStatus = document.querySelector('input[name="cute"]:checked');
  const catnessStatus = document.querySelector('input[name="cat"]:checked');
  
  const book = new Book(`${n}`, `${authorName.value}`, `${bookName.value}`, `${nrOfPages.value}`, `${centuryOfPrint.value}`, `${pressType.value}`, `${readStatus.value}`, `${cutnessStatus.value}`, `${catnessStatus.value}`);
  library.push(book);
  localStorage.setItem(`${n}`, JSON.stringify(library[`${library.length - 1}`]));
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
    dels.addEventListener('click', changeRCCStatus);
  });
  document.querySelectorAll('.bookButtons1').forEach((dels) => {
    dels.addEventListener('click', changeRCCStatus);
  });
  document.querySelectorAll('.bookButtons2').forEach((dels) => {
    dels.addEventListener('click', changeRCCStatus);
  });
  document.querySelectorAll('.bookButtons3').forEach((dels) => {
    dels.addEventListener('click', removeBookFromShelf);
  });
  // document.querySelector('.bookButtons1').addEventListener('click', changeDataOnFly);
};

function restoreLibraryFromLocal() {
  if (localStorage.length === 0) {
    return;
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      n = localStorage.key(`${i}`);
      library.push(JSON.parse(localStorage.getItem(`${n}`)));
      Object.setPrototypeOf(library[`${i}`], {
        readStatus: function(status) {
          return this.haveYouReadItYet = status
        },
        cutnessStatus: function(status) {
          return this.isItCute = status
        },
        catnessStatus: function(status) {
          return this.isThereACats = status
        }
      });
      createBookOnShelf();
    };
    parseInt(n++);
  };
};
restoreLibraryFromLocal();