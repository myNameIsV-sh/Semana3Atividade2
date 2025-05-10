// Some os valores da lista a e b
let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];

// Técnica utilizada: Mapear um dos Arrays e em seguida realizar a soma com o valor
// do outro Array, utilizando o índice como guia, dessa maneira ambos os Arrays
// são percorridos e ambos os valores somados.
let somaArrays = a.map((numero, indice) => numero + b[indice]);

console.log(somaArrays); // [7, 9, 11, 13, 15]