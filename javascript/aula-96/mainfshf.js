const contactId = "";
const channelId = "";
const txtCliente = "";

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

function descobreDigito(arrayDeCPF, x, y, slicePosition) {
  console.log(x, y);

  const numerosParaMultiplicação = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  let numerosParaSoma = [];
  const cpfArray = arrayDeCPF.split("").slice(0, slicePosition);
  for (const cpfIndex in cpfArray) {
    const numeroCalculado =
      parseInt(cpfArray[cpfIndex]) * numerosParaMultiplicação[y];

    numerosParaSoma[x] = numeroCalculado;
    x++;
    y++;
  }

  let somaTotal = 0;

  for (const numIndex in numerosParaSoma) {
    somaTotal += numerosParaSoma[numIndex];
  }

  const digito = (somaTotal * 10) % 11;
  console.log(x, y);
  return digito;
}

function validaCpf(cpfzin) {
  let cpf = cpfzin;
  let cpfLimpo = cpf.replace(/\D+/g, "");
  if (cpfLimpo.length !== 11) return false;
  const digito10 = parseInt(cpfLimpo[9]);
  const digito11 = parseInt(cpfLimpo[10]);
  const digito10Descoberto = descobreDigito(cpfLimpo, 0, 1, 9);
  const digito11Descoberto = descobreDigito(cpfLimpo, 0, 0, 10);

  return digito10Descoberto === digito10 && digito11Descoberto === digito11;
}
