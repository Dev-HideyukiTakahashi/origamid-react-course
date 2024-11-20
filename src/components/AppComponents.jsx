import React from "react";
import { InputComponent } from "./InputComponent";
import { SelectComponent } from "./SelectComponent";

export const AppComponents = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <form>
      <h2>InputComponent</h2>
      <InputComponent label="Nome" id="nome" value={nome} setValue={setNome} />
      <InputComponent
        label="Email"
        id="email"
        value={email}
        setValue={setEmail}
        required
      />
      <hr />
    </form>
  );
};
