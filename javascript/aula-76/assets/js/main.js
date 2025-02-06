function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    clearDisplay: function() {
      this.display.value = '';
    },

    inicia: function() {
      this.cliqueBotoes();
    },

    cliqueBotoes: function() {
      document.addEventListener('click', (e) => { 
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
      });
    },

    btnParaDisplay: function(valor) {
      this.display.value += valor;
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();

