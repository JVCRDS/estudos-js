// O javascript é baseado em prototipos para passar propriedades e metodos
//de um objeto para outro
//definição de prototipo
//prototipo é o termo usado para se referir ao que foi criado pela primeira vez.
// servindo de modelo ou molde para futuras produções.

// todos os objetos tem uma referencia interna para um prototipo (__proto__)
// que vem da propriedade prototype da função construtora que foi usada para cria-lo
// Quando tentamos acessar um membro de um objeto, primeiro o motor do js vai tentar encontrar este membro no proprio objeto e depois a cadeia de prototipos é usada ate o topo (null) até encontrar (ou não) tal membro.

// function Pessoa(nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
// }

// const pessoa1 = new Pessoa('Luiz', '0.');// <- Pessoa = Função construtora
// const data = new Date(); // <-- Date = Função construtora

// console.dir(pessoa1);
// console.dir(data);

function criaUser() {
  this.nome = "joao";
  this.idade = 18;
  this.id = 3948;
  this.nomeEidade = () => `${this.nome} tem ${this.idade} anos`;
};

criaUser.prototype.ola = "ola"

const user = new criaUser();
console.log(user.nomeEidade())
console.log(user.ola)