const contactId = "@contact.id";
const channelId = "@canal.token";
const dateFromUser = "@chat.mensagem.texto";
const chatId = "@chat.id";
const nextMenuId = "67a4c41d32f29085e06a1738";
run();
async function run() {
  try {
    const dateValidate = dateIsValid(dateFromUser);

    if (!dateValidate) {
      return sendMessage("Data inválida, digite novamente.");
    }

    await setAttribute(dateFromUser);

    await sendMessage("Data Validada, redirecionando para a próxima etapa...");

    await sendMenu(nextMenuId);

    console.log("attribute set sucessful");
  } catch (error) {
    console.error(error);
  }
}

function dateIsValid(date) {
  const [day, month, year] = date.split(/\D+/g);
  const today = new Date();
  const currentYear = today.getFullYear();

  if (
    !(parseInt(year) > currentYear) &&
    day.length === 2 &&
    month.length === 2 &&
    year.length === 4
  ) {
    return true;
  } else {
    return false;
  }
}

async function setAttribute(date) {
  try {
    var requestBody = [
      {
        key: "data",
        value: date,
        description: null,
      },
    ];
    const response = await fetch(
      `https://api.camkrolik.com.br/core/v2/api/contacts/${contactId}/set-attributes`,
      {
        method: "POST",
        headers: {
          "access-token": channelId,
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    const json = await response.json();

    if (json.status !== "200") {
      throw new Error("Erro ao definir atributo");
    }

    return true;
  } catch (error) {
    console.log(error);
  }
}

async function sendMessage(message, isWhisper = false) {
  try {
    const response = await fetch(
      `https://api.camkrolik.com.br/core/v2/api/chats/send-text`,
      {
        method: "POST",
        headers: {
          "access-token": channelId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactId,
          message, // Alterar
          isWhisper,
          forceSend: true,
          verifyContact: true,
        }),
      }
    );

    return;
  } catch (error) {
    console.log(error);
    this.sendMessage(error.toString(), true);
  }
}

async function sendMenu(menuId) {
  try {
    const response = await fetch(
      `https://api.camkrolik.com.br/core/v2/api/chats/${chatId}/send-menu?menuId=${menuId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "access-token": channelId,
        },
        redirect: "follow",
      }
    );
    const funcDate = await response.json();
    console.log({ funcDate });
    return funcDate;
  } catch (e) {
    console.log(error);
  }
}
