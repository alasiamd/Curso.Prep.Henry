// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let res = [];
  for (clave in objeto) {
    const elemento = [clave, objeto[clave]];
    res.push(elemento);
  }
  return res;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let res = {};
  for (let letra of string) {
    if (res[letra] > 0){
      res[letra]++;
    }
    else {
      res[letra] = 1;
    }
  }
  return res;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let may = '';
  let men = '';
  let res = '';

  for (let letra of s) {
    if (letra === letra.toUpperCase()) {
      may += letra;
    }
    else {
      men += letra;
    }
  }
  res = may + men;
  return res;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabra = '';
  var frase = '';
  for (letra of str) {
    if (letra === ' ') {
      frase += palabra.split("").reverse().join("") + " ";
      palabra = '';
    }
    else {
      palabra += letra;      
    }
  }
  frase += palabra.split("").reverse().join("");
  return frase;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var strNum = numero.toString();
  if (strNum === strNum.split("").reverse().join("")) {
    return "Es capicua";
  }
  else {
    return "No es capicua";
  }
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  arrCadena = cadena.split("");
  var res = [];
  for (let letra of arrCadena) {
    if (letra === 'a' || letra === 'b' || letra === 'c') {
      continue;
    }
    else {
      res.push(letra);
    }
  }
  return res.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  arr.sort(function(a,b) {
    return a.length - b.length;
  });
  return arr 
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var res = [];
  for (i in arreglo1) {
    for (n in arreglo2){
      if (arreglo1[i] === arreglo2[n]) {
        res.push(arreglo1[i]);
        break;
      }
    }
  }
  return res;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

