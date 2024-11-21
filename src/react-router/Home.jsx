import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Página Home</h1>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smartphone"> | Smartphone</Link>
    </div>
  );
};
