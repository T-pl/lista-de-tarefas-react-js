import React, { useState } from "react";
import { nanoid } from "nanoid";
import BotaoFiltrar from "./components/BotaoFiltrar";
import Formulario from "./components/Formulario";
import Tarefas from "./components/Tarefas";

function App(props) {

  const [tarefas, setTarefas] = useState(props.tarefas);
  // Essa const usa um método JS map para extrair os dados do array DADOS
  const listaDeTarefas = tarefas.map(tarefa => (
    <Tarefas
      id={tarefa.id}
      name={tarefa.name}
      completed={tarefa.completed}
      key={tarefa.id} />
  ));
  function addTarefa(name) {
    const novaTarefa = { id: "todo-" + nanoid, name: name, completed: false }
    setTarefas([...tarefas, novaTarefa])
  }
  return (
    <div className="todoapp stack-large">
      <h1>Lista de Tarefas</h1>
      <Formulario addTarefa={addTarefa} />
      <div className="filters btn-group stack-exception">
        <BotaoFiltrar />
        <BotaoFiltrar />
        <BotaoFiltrar />
      </div>
      <h2 id="list-heading">
        3 Tarefas nessa seção
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {listaDeTarefas}
      </ul>
    </div>
  );
}

export default App