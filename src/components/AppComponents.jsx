import React from "react";
import { InputComponent } from "./InputComponent";
import { SelectComponent } from "./SelectComponent";
import { RadioComponent } from "./RadioComponent";

export const AppComponents = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");

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
      <h2>SelectComponent</h2>
      <SelectComponent
        options={["Smartphone", "Notebook"]}
        value={produto}
        setValue={setProduto}
      />
      <hr />
      <h2>RadioComponent</h2>
      <RadioComponent
        options={["Azul", "Vermelho"]}
        value={cor}
        setValue={setCor}
      />
      <hr />
      <button>Enviar</button>
    </form>
  );
};
