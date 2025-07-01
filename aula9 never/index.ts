// Never: não deve ter retorno nenhum na função, nem mesmo undefined
// sempre usar never para gerar erros
function generateError(msg: string, code: number): never {
  throw {
    msg,
    code,
  };
}

generateError("Mensagem do erro", 501);
