// Filter, map, reduce

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];


const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados);


const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];
const pessoasComNomesGrandes = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasMaisVelhas = pessoas.filter(obj => obj.idade >= 50);
const nomeTerminaComA = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});

console.log(nomeTerminaComA);
