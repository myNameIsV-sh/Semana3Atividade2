// 1. Exibe uma mensagem e atríbui à variável `tamanho`
const tamanho = prompt ('Digite o tamanho da lista de números');
// 2. Um objeto do tipo Array é instanciado.
// 2.1. O tamanho do Array será de acordo com o valor atribuido a váriavel `tamanho`.
// 2.2. O método `.fill()` irá preencher todo o o Array com valores nulos.
// 2.3. É possível indicar o índice do Array caso seja necessário preencher a partir de um ponto específico.
// Referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
const lista = new Array(tamanho).fill(null);

lista.map(function (item, index) {
    return index + 1;
})
.reduce(function (acumulador, item) {
    return acumulador * item;
});

new Array(tamanho).fill(null)
    .map((item, index) => + 1)
    .reduce((acumulador, item) => acumulador + item);