// ViaCep, utilizar na criação de um html que possui um input text para o usuario digitar um cep e devolver o conteudo.

const butao = document.querySelector(".enviar");
// querySelector = utilizar ".", quando classe e "#", quando id.
const cep = document.querySelector(".texto");

butao.addEventListener("click", async () => {
  const cepLimpo = cep.value.replace(/\D+/g, "");
  if (cepLimpo.length !== 8) return alert("CEP INVALIDO");
  const resultado = await fetchCep(cepLimpo);
});

async function fetchCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

async function exibeDados(fetch) {
  fe
}