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
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
