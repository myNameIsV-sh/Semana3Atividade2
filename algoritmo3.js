// 1. `estudantes` contém um Array de Objetos com atributos `nome` e `notas`;
// As `notas` são representadas como um Array
const estudantes = [
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
];
// 2. Aqui serão mapeadas as médias de todos os `estudantes`
const estudantesMedias = estudantes.map((estudante) => {
    // 3. Variável `total` será usada mais tarde para efetuar o cálculo da média
    // 3.1.1. Acessando as notas do estudante e aplicando o `reduce` teremos os valores acumulados
    // em `soma` enquanto a `nota` se refere ao índice da nota
    const total = estudante.notas.reduce((soma, nota) => soma + nota);
    // 4.1. Armazenando o nome do estudante em uma variável a parte
    let {nome} = estudante;
    // 4.1.1. O retorno será o nome, junto com a média, pra isso é necessário o
    // `total` dividído pela quantidade(obtido pelo length) de notas (3)
    return { nome, media: total / estudante.notas.length };
});
// 5. O método `filter` filtra o Objeto/Array baseado em alguma condição
// nesse caso apenas o estudantes que possuírem média ácima de 90 serão
const melhoresMedias = estudantesMedias.filter(
    (student) => student.media > 90,
);
// console.log(melhoresMedias); {nome: Paulo, media: 100}