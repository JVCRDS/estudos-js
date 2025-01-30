function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  object.defineProperty(this, 'estoque', {
    enumerable: true,// mostra a chave
    value: estoque, // valor
    writable: false,//pode alterar
    configurable: false//configuravel
  });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000;
console.log(p1);



