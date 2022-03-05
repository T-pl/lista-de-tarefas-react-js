import { nanoid } from "nanoid";
import React, { useState } from "react";
import BotaoFiltrar from "./components/BotaoFiltrar";
import Form from "./components/Form";
import Tarefas from "./components/Tarefas";

/* eslint-disable jsx-a11y/no-redundant-roles */
// function adicionarTarefa(name) {
//   alert(name);
// }
function addTask(name) {
  alert(name);
}

function App(props) {
  function deletarTarefa(id) {
    const remainingTasks = tarefas.filter(tarefa => id !== tarefa.id);
    setTarefas(remainingTasks);
  }


  const [tarefas, setTarefas] = useState(props.tarefas);
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTarefas([...tarefas, newTask]);
  }
  function toggleTaskCompleted(id) {
    const atualizarTarefas = tarefas.map(tarefa => {
      // if this task has the same ID as the edited task
      if (id === tarefa.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...tarefa, completed: !tarefa.completed }
      }
      return tarefa;
    });
    setTarefas(atualizarTarefas);
  }

  const listaDeTarefas = tarefas.map(tarefa =>
    <Tarefas
      id={tarefa.id}
      name={tarefa.name}
      completed={tarefa.completed}
      key={tarefa.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deletarTarefa={deletarTarefa}
    />);
  const tasksNoun = listaDeTarefas.length !== 1 ? 'Tarefas' : 'Tarefa';
  const numeroDeTarefas = `${listaDeTarefas.length} ${tasksNoun}`;
  // const listaEstados = props.estados?.map(estado =>
  //   <BotaoFiltrar
  //     name={estado.name} />)
  return (
    <div className="todoapp stack-large">
      <h1>Lista de Tarefas</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <BotaoFiltrar />
        <BotaoFiltrar />
        <BotaoFiltrar />
      </div>
      {/* {listaEstados} */}
      <h2 id="list-heading">
        {numeroDeTarefas}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {listaDeTarefas}

      </ul>
    </div>
  );
}

export default App
