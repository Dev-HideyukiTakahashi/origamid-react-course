import React from "react";

export const AppRef = () => {
  const video = React.useRef();
  const inputElement = React.useRef();

  const [comentarios, setComentarios] = React.useState([
    "teste",
    "teste2",
    "teste3",
  ]);

  const [input, setInput] = React.useState("");

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput("");
    inputElement.current.focus(); // voltando o foco para o input após clicar em enviar
  }

  const [carrinho, setCarrinho] = React.useState(0);
  const [notificao, setNotificao] = React.useState(null);

  // quando o react renderiza ele executa todo o codigo
  // se for 'let timeoutref = 0' e depois ir incrementando na func
  // toda vez o valor volta a 0
  const timeoutRef = React.useRef();

  function handleClick2() {
    setCarrinho(carrinho + 1);
    setNotificao("Item adicionado ao carrinho");

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificao(null);
    }, 2000);
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
      <hr />
      <p>{notificao}</p>
      <button onClick={handleClick2}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};
