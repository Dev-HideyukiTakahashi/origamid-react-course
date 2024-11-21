import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Sobre } from "./Sobre";
import { Header } from "./Header";
import { Login } from "./Login";

// BrowserRouter = rota para todo o elemento
// Routes = envolve as rotas
// Route = define a url rota

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="sobre" element={<Sobre />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
