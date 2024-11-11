import React from "react";

function Botao() {
  function handleClick(event) {
    console.log("clicou");
    console.log(event.target);
  }
  return (
    <>
      <hr />
      <button onClick={handleClick}></button>
    </>
  );
}

export default Botao;
