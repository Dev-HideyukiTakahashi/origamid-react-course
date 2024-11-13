import React from "react";
import { CustomHook } from "./CustomHook";

export const FetchTest = () => {
  const { request, data, loading, error } = CustomHook();

  React.useEffect(() => {
    async function fetchData(params) {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
    }
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando . . . </p>;
  // sempre precisa verificar pois primeiro retorna null
  if (data)
    return (
      <div>
        {data.map((p) => (
          <li key={p.id}>{p.nome}</li>
        ))}
      </div>
    );
  else return null;
};
