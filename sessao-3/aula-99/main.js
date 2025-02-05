// // ViaCep, utilizar na criação de um html que possui um input text para o usuario digitar um cep e devolver o conteudo.
// // querySelector = utilizar ".", quando classe e "#", quando id.

const butao = document.querySelector(".enviar");
const cep = document.querySelector(".texto");
const retangulo = document.querySelector(".retangulo");

butao.addEventListener("click", async () => {
  const cepLimpo = cep.value.replace(/\D+/g, "");
  if (cepLimpo.length !== 8) return alert("CEP INVALIDO");
  exibeDados(cepLimpo);
});

async function fetchCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

async function exibeDados(cep) {
  const resultado = await fetchCep(cep);
  const props = resultado;
  for (const prop in props) {
    retangulo.innerText += `${prop}:${resultado[prop]}\n`;
  }
}

