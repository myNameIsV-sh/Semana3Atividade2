// 1. Exibe uma mensagem e atríbui à variável `tamanho`
const tamanho = prompt ('Digite o tamanho da lista de números');
// 2. Um objeto do tipo Array é instanciado.
// 2.1. O tamanho do Array será de acordo com o valor atribuido a váriavel `tamanho`.
// 2.2. O método `.fill()` irá preencher todo o o Array com valores nulos.
// 2.3. É possível indicar o índice do Array caso seja necessário preencher a partir de um ponto específico.
// Referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
const lista = new Array(tamanho).fill(null);

// 3. Aqui a lista de tamanho N após ser preenchida com valores nulos será "mapeada"
// 3.1. O primeiro argumento `item` representa o valor atual, enquanto o segundo
// argumento `index` representa o índice desse valor
lista.map(function (item, index) {
    // 3.2. Apenas o valor contido em `index` será somado, gerando essa saída
    return index + 1; // Exemplo com 5 elementos: [1, 2, 3, 4, 5]
}) // Método `map` se encerra..
    // 4.1. `reduce` irá agrupar todos os valores contidos em apenas uma variável
    // 4.1.2. Após a função ser declarada, o primeiro argumento a ser informado é o acumulador
    // O valor a ser definido será o resultado da função (Callback) anterior; Exemplo: [1, 2, 3, 4, 5]
.reduce(function (acumulador, item) {
    // 4.1.2. O retorno será a multiplicação entre o valor acumulado e o `item`, sendo item
    // a representação do índice atual que está sendo processado
    return acumulador * item; // 120
});

// 4. O procedimento aqui é quase o mesmo — o Array será mapeado e preenchido com valores nulos.
new Array(tamanho).fill(null)
    // 4.1. Entretanto, no método `map` como não há retorno claro aqui,
    //  todo o Array será preenchido com números 1.
    // 4.1.1 `+1` é um operador unário de adição, na prática o interpretador tenta converter o valor
    // para um inteiro, porém, como esse valor já é inteiro, então não acontece nada.
    .map((item, index) => + 1)
    // 4.2. E aqui os valores serão reduzidos em para um só
    .reduce((acumulador, item) => acumulador + item); // 1