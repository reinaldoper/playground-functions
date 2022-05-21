// Desafio 11
generatePhoneNumber([1, 2, 7, 7, 3, 6, 7, 9, 7, 8, 7]);
function generatePhoneNumber(numberOn) {
  // seu código aqui
  let array = [];
  let newArray = [];
  let newArray1;
  let index;
  let cont = 0;
  if (numberOn.length != 11 ) {
    return "Array com tamanho incorreto.";
  }
  for(index = 0; index < numberOn.length; index ++) {
      if((numberOn[index +2] === numberOn[index +3]) || (numberOn[index +2] === numberOn[index +4]) || (numberOn[index] === numberOn[index +5])){
        cont++;
      }    
  }
   for(index = 0; index < numberOn.length; index ++) {
    if(numberOn[index] > 9 || numberOn[index] < 0){
      return "não é possível gerar um número de telefone com esses valores";
    }/* else if(numberOn[index] === numberOn[index +1]){
      return "não é possível gerar um número de telefone com esses valores";
    } */else if(cont >= 3){
      return "não é possível gerar um número de telefone com esses valores";
    }else{
    array.push(numberOn[index]);
    }
}

  newArray = array.toString();
  let a = /,/g;
  newArray1 =  newArray.replace(a,""); 
  return "("+newArray1[0]+newArray1[1]+")"+" "+newArray1[2]+newArray1[3]+newArray1[4]+newArray1[5]+newArray1[6]+"-"+newArray1[7]+newArray1[8]+newArray1[9]+newArray1[10]+"";
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

/* a = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
b = {};
let cont = 0;
for (var i = 0; i < a.length; i++) {
    b[a[i]] = a[i];
    if(b[a[i]] === a[i]){
      cont++;
    }
   
}
arr = [];
for (var key in b) {
   
    arr.push(key);
}
console.log(cont);
console.log(arr);  */

// Desafio 12 msc@betrybe.com
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if(((lineA < lineB + lineC) && (lineA + lineB > lineC) && (lineB < lineA + lineC)) && ((lineA > Math.abs(lineB-lineC)) && (lineB > Math.abs(lineA-lineC)) && (lineC > Math.abs(lineA-lineB)))){
    return true;
  }else{
    return false;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
