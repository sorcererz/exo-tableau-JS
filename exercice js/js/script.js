/* ------------EXERCICE 1----------- */

let letters = ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P", "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M", "W", "X", "C", "V", "B", "N"];

//console.log(letters);

//console.log(letters[0],letters[1],letters[2],letters[3]);

//alert(letters)

function returnLetters(array){
  let i = 0;
  let eltCourant;
  while (i < array.length){
    eltCourant = array[i];
    i++;
    console.log(eltCourant);
  };
};

//returnLetters(letters);



/* ------------EXERCICE 2----------- */

function returnFirst10Letters(array){
  let i = 0;
  let eltCourant;
  while (i < array.length){
    eltCourant = array[i];
    i++;
    console.log(eltCourant);
    if (i == 11){
      break;
    };
  };
};

//returnFirst10Letters(letters);



/* ------------EXERCICE 3----------- */


function returnLast10Letters(array){
  let i = array.length -1;
  let eltCourant;
  while (i > array.length - 11){
    eltCourant = array[i];
    i--;
    console.log(eltCourant);
  };
};

//returnLast10Letters(letters);


/* ------------EXERCICE 4----------- */


let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function returnNumberPlus1(array){
  let copyNumbers = array.slice()
  let i = 0;
  let eltCourant;
  let eltNext;
  while (i < array.length){
    eltCourant = array[i];
    i++;
    eltCourant = eltCourant + 1;
  };
  console.log(copyNumbers);
};

//returnNumberPlus1(numbers)



/* ------------EXERCICE 5----------- */


function evenArrayNumbers(array) {
  let i = 0;
  let eltCourant;
  let arrayEvenVal = [];
  while (i < array.length) {
    eltCourant = array[i];
    i++;
    if (eltCourant % 2 === 0) {
      arrayEvenVal.push(eltCourant);
    }
  }
  console.log(arrayEvenVal);
}

evenArrayNumbers(numbers);
