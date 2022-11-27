export const errorHttp = (error) => {
  const code = {
    ERR_NETWORK: "ruta incorrecta",
  };

  return code[error];
};
