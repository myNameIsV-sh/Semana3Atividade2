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
    // 2.2. Após o Array ser achatado e ser "transformado" em um objeto
    // o reduce irá "contar" todas as vezes que uma letra se repetir,
    // importante salientar que as verificações são feitas de maneira implícita
    if (objeto[numero]) {
        // 2.2.1. `objeto` é o nosso acumulador, `numero` representa a letra atual
        // 2.2.2. Se a letra já fora encontrada, o contador(objeto) será incrementado em 1
        objeto[numero] += 1;
    } else {
        // 2.2.3. Caso contrário, a "letra" será adicionada a contagem
        objeto[numero] = 1;
    }
    return objeto; // { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1 }
}, {});