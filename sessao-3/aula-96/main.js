//705.484.450-52 070.987.720-03;

//7x 0x 5x 4x 8x 4x 4x 5x 0x
//10  9  8  7  6  5  4  3  2
//70  0 40 28 48 20  16 15 0 = 237

//7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
//11 10  9  8  7  6  5  4  3  2
//77  0 45 32 56 24  20 20 0 10 = 284

//11 (237 % 11) = 5 (Primeiro digito)
//se o digito for maior que 9, consideramos 0
//11 - (284 % 11) = 2(Primeiro digito)

// let cpf = ' 705.484.450 - 52';
// let cpfLimpo = cpf.replace(/\D+/g, '');
// cpfArray = Array.from(cpfLimpo);
// console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));

function DescobrePrimeiroDigito(arrayDeCPF) {
  const numerosParaMultiplicação = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  let numerosParaSoma = [];
  let Y = 1,
    X = 0;

  for (const cpfIndex in arrayDeCPF) {
    const numeroCalculado = arrayDeCPF[cpfIndex] * numerosParaMultiplicação[Y];
    if (!isNaN(numeroCalculado)) {
      if (!numerosParaSoma[X]) numerosParaSoma[X] = 0;
      numerosParaSoma[X] = numeroCalculado;
      Y++;
      X++;
    }
  }

  let somaTotal = 0;

  for (const numIndex in numerosParaSoma) {
    somaTotal += numerosParaSoma[numIndex];
  }
  console.log(somaTotal)

  const primeiroDigito = somaTotal % 11;
  console.log(primeiroDigito)

  return primeiroDigito;
}

function DescobreSegundoDigito(arrayDeCPF) {
  const numerosParaMultiplicação = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  let numerosParaSoma = [];
  let Y = 0,
    X = 0;

  for (const cpfIndex in arrayDeCPF) {
    const numeroCalculado = arrayDeCPF[cpfIndex] * numerosParaMultiplicação[Y];
    if (!isNaN(numeroCalculado)) {
      if (!numerosParaSoma[X]) numerosParaSoma[X] = 0;
      numerosParaSoma[X] = numeroCalculado;
      Y++;
      X++;
    }
  }

  let somaTotal = 0;

  for (const numIndex in numerosParaSoma) {
    somaTotal += numerosParaSoma[numIndex];
  }

  const segundoDigito = somaTotal % 11;

  return segundoDigito;
}

function validaCpf(cpfzin) {
  let cpf = cpfzin;
  let cpfLimpo = cpf.replace(/\D+/g, "");
  if (cpfLimpo.length !== 11) throw new Error("Cpf Inválido");
  cpfArray = Array.from(cpfLimpo);
  const digito10 = cpfLimpo[9];
  const digito11 = cpfLimpo[10];
  const digito10Descoberto = DescobrePrimeiroDigito(cpfLimpo);
  const digito11Descoberto = DescobreSegundoDigito(cpfLimpo);

  console.log(digito10, digito11);
  console.log(digito10Descoberto, digito11Descoberto);

  if (digito10Descoberto === digito11 && digito11Descoberto === digito10)
    return "O CPF é valido.";

  return "Invalido";
}

console.log(validaCpf("705.484.450-52"));
