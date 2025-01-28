const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const reiniciar = document.querySelector(".reiniciar");
const pausar = document.querySelector(".pausar");
let segundos = 0;
let timer;

iniciar.addEventListener("click", function (event) {
  relogio.classList.remove('pausado');
  iniciaRelogio();
  iniciar.innerHTML = "Iniciado";
  reiniciar.innerHTML = "Reiniciar";
  pausar.innerHTML = "Pausar";
});
pausar.addEventListener("click", function (event) {
  pausar.innerHTML = "Pausado";
  iniciar.innerHTML = "Iniciar";
  clearInterval(timer);
  relogio.classList.add('pausado');
});
reiniciar.addEventListener("click", function (event) {
  pausar.innerHTML = "Pausado";
  iniciar.innerHTML = "Iniciar";
  reiniciar.innerHTML = "Zerado";
  relogio.innerHTML = "00:00:00";
  segundos = 0;
  clearInterval(timer)
});

function criahora(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BT", {
    hour12: false,
    timeZone: "UTC",
  });
}

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criahora(segundos);
  }, 1000);
}
