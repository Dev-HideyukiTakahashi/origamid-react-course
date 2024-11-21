import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const Produto = () => {
  const params = useParams();
  // params retorna o /:id que foi especificado no AppRouter

  // no 'search' vem parâmetros de busca
  const location = useLocation();
  // Exemplo: /produto/smartphone?cor=verde&memoria=16
  console.log(location); //{pathname: '/produto/smartphone', search: '?cor=verde&memoria=16', hash: '', state: null, key: 'default'}
  // Como recuperar dados do search facilmente
  const search = new URLSearchParams(location.search);
  console.log(search.get("memoria")); // out: 16

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};
