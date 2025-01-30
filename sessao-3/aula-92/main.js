//object.keys (retorna as chaves)
//object.freeze (congela o objeto)
//object.defineProperties (define várias propriedades)
//object.defineProperty (define uma propriedade)
//Object.values
//Object.entries
//Object.getOwnPropertyDescriptor(o,'prop')
//Object.assign(des,any)
//...(spread)

const produto = { nome: 'Produto', preco: 1.8 };
const caneca = Object.assign({}, produto, { material: 'porcelana'});

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);