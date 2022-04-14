import React, { useState } from "react";

function Formulario(props) {
  const [name, setName] = useState('');
  function entradaInput(e) {
    setName(e.target.value);
  }
  function enviarForm(e) {

    e.preventDefault();
    props.addTarefa(name);
    setName(e.target.value);
    setName("");
  }

  return (
    <form onSubmit={enviarForm}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          O que preciso fazer?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={entradaInput}
        
      />
      <button
        type="submit"
        className="btn btn__primary btn__lg">
        Adicionar
      </button>
    </form>
  );
}

export default Formulario