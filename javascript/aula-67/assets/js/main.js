const campo = document.querySelector(".campo");
const lista = document.querySelector(".lista");
const adicionar = document.querySelector(".adicionar");
const botao = document.querySelector(".b");
const botao2 = document.querySelector(".b");
const botao3 = document.querySelector(".b");
const tarefa1 = document.querySelector("#f1");
const tarefa2 = document.querySelector("#f2");
const tarefa3 = document.querySelector("#f3");
let tarefas = [tarefa1, tarefa2, tarefa3];
let cont = 0;

//Adiciona Tarefa:
adicionar.addEventListener('click', function () {
  // tarefas[cont].innerHTML = campo.value;
  // cont++;
  // if (cont > 2) {
  //   cont = 0;
  // }

  lista.innerHTML = lista.innerHTML + criaTarefa(campo.value)
})


botao.addEventListener('click', function () {
  apagar(e)
})

//Remove Tarefa:

function apagar(e) {
  const tarefa = e.target.parentNode;

  tarefa.remove()
}

function criaTarefa(tarefa) {
  return `<li class="tarefa"> ${tarefa} <button class="b"> Apagar</button></li>`
}


