function esperaAi(msg) {
  const tempo = Math.floor(Math.random() * (3000 - 1000) + 3000);
  return new Promise((resolve) => setTimeout(() => resolve(msg), tempo));
}

esperaAi("Frase 1").then(logarResultado)
esperaAi("Frase 2");
esperaAi("Frase 3");

function logarResultado(resultado) {
  console.log(resultado);
}

// function then(callback) {
//   let result = "resultado"
//   callback(result)
//   // logarResultado(result)
// }

// then(logarResultado)