const mixedArray = [
  "Vitor",
  2,
  354,
  "Marcio",
  "Ana",
  98,
  "Carlos",
  17,
  "Lucas",
  765,
  "Beatriz",
  33,
  "Fernanda",
  120,
  "Gabriel",
];

// Gerar nova array de números


const soNumeros = mixedArray.filter(num => {
  return typeof (num) === "number";
});

// Gerar nova array de nomes

const soNomes = mixedArray.filter(nome => {
  return typeof (nome) === "string";
});

console.log(soNomes);
console.log(soNumeros);