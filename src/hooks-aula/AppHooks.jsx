import React from "react";
import { ButtonModal } from "./ButtonModal";
import { Modal } from "./Modal";

export const AppHooks = () => {
  /* a função handleclick não renderiza pois a paginá não carrega, portanto o valor de ativo não atualiza */
  // let ativo = true;

  // function handleClick() {
  //   ativo = !ativo;
  //   console.log(ativo);
  // }

  // return <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>;

  /* desenhando a estrutura */
  // const ativoHook = React.useState(false);
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];

  /* simplificando */
  const [ativo, setAtivo] = React.useState(false); // desestruturando, [0] =  valor, [1] = função

  function handleClick() {
    setAtivo(!ativo);
  }

  function handleClick2() {
    setDados({ ...dados, curso: "React" });
  }

  /* múltiplos estados */
  const [dados, setDados] = React.useState({ nome: "Origamid", idade: "30" });

  /* modal com hook */
  const [modal, setModal] = React.useState(false);

  const [items, setItems] = React.useState("Teste");

  // para atualizar o estado, sempre usar a função set
  function handleClick3() {
    setItems("Outro");
  }

  const [contar, setContar] = React.useState(1);
  function contarBtn() {
    setContar(contar + 1);
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>

        {/* esse btn, recebe os dados do obj e adciona uma propriedade nova  */}
        <button onClick={handleClick2}>Adicionar Curso no Obj</button>
        <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <p>{dados.curso}</p>
      </div>

      <div>
        <div>{modal ? "Modal aberto" : "Modal Fechado"}</div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
      </div>

      <hr />
      <div>
        <p>{items}</p>
        <button onClick={handleClick3}>Outro</button>
        <button onClick={contarBtn}>{contar}</button>
      </div>
    </>
  );
};
