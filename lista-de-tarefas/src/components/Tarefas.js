import React, { useRef, useState } from "react";

function Tarefas(props) {
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);
  const [estadoEditar, setEdicao] = useState(false);
  const [novoNome, setNovoNome] = useState('');
  function alterarTemplate(e) {
    setNovoNome(e.target.value);
  }
  function manipularEnviar(e) {
    e.preventDefault();
    props.editarTarefa(props.id, novoNome);
    setNovoNome("");
    setEdicao(false);
  }
  const templateEditar = (
    <form className="stack-small" onSubmit={manipularEnviar}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          Novo nome para {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={novoNome}
          onChange={alterarTemplate}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEdicao(false)}
          ref={editButtonRef}
        >
          Cancelar
          <span className="visually-hidden">Renomear {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Salvar
          <span className="visually-hidden">Novo nome para {props.name}</span>
        </button>
      </div>
    </form>
  );
  const templateDaView = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.alterarTarefaConcluida(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setEdicao(true)}
        >
          Editar <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deletarTarefa(props.id)}
        >
          Deletar <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{estadoEditar ? templateEditar : templateDaView}</li>;
  // return (
  //   <li className="todo stack-small">
  //   <div className="c-cb">
  //       <input
  //         id={props.id}
  //         type="checkbox"
  //         defaultChecked={props.completed}
  //         onChange={() => props.alterarTarefaConcluida(props.id)}
  //       />
  //     <label className="todo-label" htmlFor={props.id}>
  //       {props.name}
  //     </label>
  //   </div>
  //   <div className="btn-group">
  //       <button
  //         type="button"
  //         className="btn"
  //       >
  //       Editar <span className="visually-hidden">{props.name}</span>
  //     </button>
  //       <button
  //         type="button"
  //         className="btn btn__danger"
  //         onClick={() => props.deletarTarefa(props.id)}
  //       >
  //       Deletar <span className="visually-hidden">{props.name}</span>
  //     </button>
  //   </div>
  // </li>
  // )

}
export default Tarefas