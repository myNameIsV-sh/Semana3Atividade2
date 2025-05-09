// 1. É definida uma matrix 3x3 onde cada coluna contém um `char`.
const letras = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
];

// 2. O método `.flat()` irá criar um novo Array com os valores concatenados.
// 2.1. Nota: por padrão o método achata a "primeira" (1) camada do Array
// Referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
let resultado = letras.flat().reduce((objeto, numero) => {
    if (objeto[numero]) {
        objeto[numero] += 1;
    } else {
        objeto[numero] = 1;
    }
    return objeto;
}, {});

console.log(resultado); // { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1 }