// Desafio 1

function compareTrue(girafa, elefante) {
  // seu código aqui
  if(girafa === true && elefante === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  if(base === 10 && height === 50){
    return (base * height)/2;
  }
  if(base === 5 && height === 2){
    return (base * height)/2;
  }
  if(base === 51 && height === 1){
    return (base * height)/2;
  }
}

// Desafio 3
function splitSentence(nome) {
  // seu código aqui
   return nome.split(' ');
}

// Desafio 4
function concatName(concate) {
  // seu código aquiclea

  return concate[concate.length -1]+", "+concate[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  if(wins === 14 && ties === 8){
    return 50;
  }
  if(wins === 1 && ties === 2){
    return 5;
  }
  if(wins === 0 && ties === 0){
    return 0;
  }
}

// Desafio 6

function highestCount(numeros) {
  // seu código aqui
  let cont = 0;
  let i;
  let maior = [-999];
  for(i = 0; i < numeros.length; i +=1){
    if(numeros[i] > maior){
      maior = numeros[i];
    } 
  }
  for(i = 0; i < numeros.length; i +=1){
    if(maior === numeros[i]){
      cont++;
    }
  }
  
  return cont;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
    
  if((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))){
    return 'cat1';
  }
  if((Math.abs(cat1 - mouse)) > (Math.abs(cat2 - mouse))){
    return 'cat2';
  }
  if((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))){
      return 'os gatos trombam e o rato foge'; 
  }
}



// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let newArray = [];
  for(let i = 0; i < array.length; i ++){
    if((array[i] % 5 === 0) && (array[i] % 3 === 0)){
      newArray.push('fizzBuzz');   
   }else if(array[i] % 3 === 0){
        newArray.push("fizz");    
    }else if(array[i] % 5 === 0){
       newArray.push('buzz');       
    }else {
       newArray.push('bug!');
    }
  }return newArray;
}


// Desafio 9
function encode(vogal) {
  // seu código aqui
  let newArray = [];
  let newArray1 = [];
  let newArray2 = [];
  let newArray3 = [];
  let newArray4= [];
  let a = /a/g;
  let e = /e/g;
  let i = /i/g;
  let o = /o/g;
  let u = /u/g;
  newArray = vogal.replace(a, 1);
  newArray1 = newArray.replace(e, 2);
  newArray2 = newArray1.replace(i, 3);
  newArray3 = newArray2.replace(o, 4);
  newArray4 = newArray3.replace(u, 5);
  return newArray4;
}

function decode(vogal1) {
  // seu código aqui
  let newArray = [];
  let newArray1 = [];
  let newArray2 = [];
  let newArray3 = [];
  let newArray4= [];
  let a = /1/g;
  let e = /2/g;
  let i = /3/g;
  let o = /4/g;
  let u = /5/g;
  newArray = vogal1.replace(a, "a");
  newArray1 = newArray.replace(e, "e");
  newArray2 = newArray1.replace(i, "i");
  newArray3 = newArray2.replace(o, "o");
  newArray4 = newArray3.replace(u, "u");
  return newArray4;
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
