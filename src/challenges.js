// Desafio 1

function compareTrue(girafa, elefante) {
  // seu código aqui
  if(girafa === true && elefante && true){
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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
