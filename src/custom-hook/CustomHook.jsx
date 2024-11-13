import React from "react";

/**
 * custom hook para fetch
 * @returns fetch
 */
export const CustomHook = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function request(url, options) {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true); // carregando
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null;
      setError("Erro");
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }
  return { data, error, loading, request };
};
