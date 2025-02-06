const nomes = ['maria', 'joão', 'eduardo', 'gabriel', 'julia'];
//nomes.splice(indice, delete, elem1, elem2, elem3);
const removidos = nomes.splice(-2, Number.MAX_VALUE);
console.log(nomes, removidos);
console.log(Number.MAX_VALUE);