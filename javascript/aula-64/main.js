function retornahora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }
  if (!data) {
    data = new Date();
  }
}