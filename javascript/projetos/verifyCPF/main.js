const contactId = "@contact.id";
const channelId = "@canal.token";
const txtCliente = "@chat.mensagem.texto"

Run();

async function Run() {
  const cpfValido = validaCpf(txtCliente);  
  let message = "";
  if (cpfValido === true) {
    message = "CPF Válido";
  } else {
    message = "CPF Inválido";
  }
  sendMessage(message, false, contactId, channelId);
}

async function sendMessage(message, isWhisper = false, contactId, channelId) {
  try {
    await fetch(`https://api.camkrolik.com.br/core/v2/api/chats/send-text`, {
      method: "POST",
      headers: {
        "access-token": channelId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contactId,
        message,
        isWhisper,
        forceSend: true,
        verifyContact: true,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}

function DescobrePrimeiroDigito(arrayDeCPF) {
  const numerosParaMultiplicação = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  let numerosParaSoma = [];
  let Y = 1,
    X = 0;
  const cpfArray = arrayDeCPF.split("").slice(0, 9);
  for (const cpfIndex in cpfArray) {
    const numeroCalculado =
      parseInt(cpfArray[cpfIndex]) * numerosParaMultiplicação[Y];

    numerosParaSoma[X] = numeroCalculado;
    Y++;
    X++;
  }

  let somaTotal = 0;

  for (const numIndex in numerosParaSoma) {
    somaTotal += numerosParaSoma[numIndex];
  }

  const primeiroDigito = (somaTotal * 10) % 11;

  return primeiroDigito;
}

function DescobreSegundoDigito(arrayDeCPF) {
  const numerosParaMultiplicação = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  let numerosParaSoma = [];
  let Y = 0,
    X = 0;
  const cpfArray = arrayDeCPF.split("").slice(0, 10);
  for (const cpfIndex in cpfArray) {
    const numeroCalculado =
      parseInt(cpfArray[cpfIndex]) * numerosParaMultiplicação[Y];

    numerosParaSoma[X] = numeroCalculado;
    Y++;
    X++;
  }

  let somaTotal = 0;

  for (const numIndex in numerosParaSoma) {
    somaTotal += numerosParaSoma[numIndex];
  }

  const segundoDigito = (somaTotal * 10) % 11;

  return segundoDigito;
}

function validaCpf(cpfzin) {
  let cpf = cpfzin;
  let cpfLimpo = cpf.replace(/\D+/g, "");
  if (cpfLimpo.length !== 11) return false;
  const digito10 = parseInt(cpfLimpo[9]);
  const digito11 = parseInt(cpfLimpo[10]);
  const digito10Descoberto = DescobrePrimeiroDigito(cpfLimpo);
  const digito11Descoberto = DescobreSegundoDigito(cpfLimpo);

  return digito10Descoberto === digito10 && digito11Descoberto === digito11;
}


