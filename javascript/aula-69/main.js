//arguments sustenta todos os argumentos passados para a função.
function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);


function funcao() {
  console.log()
}

funcao(2,4,5)