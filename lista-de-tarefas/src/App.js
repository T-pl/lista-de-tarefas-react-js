import React, { useState } from "react";
import { nanoid } from "nanoid";
import BotaoFiltrar from "./components/BotaoFiltrar";
import Formulario from "./components/Formulario";
import Tarefas from "./components/Tarefas";

const FILTRO_MAP = {
  Todas: () => true,
  Atuais: tarefa => !tarefa.completed,
  Completas: tarefa => tarefa.completed
};

function App(props) {
  const FILTRAR_NOMES = Object.keys(FILTRO_MAP);
  const [filtro, setFiltrar] = useState('Todas');
  const [tarefas, setTarefas] = useState(props.tarefas);
  // Essa const usa um método JS map para extrair os dados do array DADOS
  function alterarTarefaConcluida(id) {
    const atualizarTarefa = tarefas.map(tarefa => {
      if (id === tarefa.id) {
        return { ...tarefa, completed: !tarefa.completed }
      }
      return tarefa
    });
    setTarefas(atualizarTarefa)
  }
  function deletarTarefa(id) {
    const tarefasRestantes = tarefas.filter(tarefa => id !== tarefa.id);
    setTarefas(tarefasRestantes)
  }
  function editarTarefa(id, novoNome) {
    const editarListaDeTarefas = tarefas.map(tarefa => {
      if (id === tarefa.id) {
        return{...tarefa, name: novoNome}
      }
      return tarefa
    });
    setTarefas(editarListaDeTarefas)
  }
  const listaDeTarefas =
    tarefas.filter(FILTRO_MAP[filtro]).map(tarefa => (
    <Tarefas
      id={tarefa.id}
      name={tarefa.name}
      completed={tarefa.completed}
      key={tarefa.id} 
      alterarTarefaConcluida={alterarTarefaConcluida}
      deletarTarefa={deletarTarefa}
      editarTarefa={editarTarefa}
      />
  ));
  const filtrarLista = FILTRAR_NOMES.map(name => (
    <BotaoFiltrar
      key={name}
      name={name} 
      botaoPrecionado={name === filtro}
      setFiltrar={setFiltrar}
      />
  ));
  
  const convPluralSingular = listaDeTarefas.length <= 1 ? 'Tarefa' : 'Tarefas';
  const numeroDeTarefas = `${listaDeTarefas.length} ${convPluralSingular} nessa seção.`;
  function addTarefa(name) {
    const novaTarefa = { id: "todo-" + nanoid(), name: name, completed: false };
    setTarefas([...tarefas, novaTarefa]);
  }
    return (
    <div className="todoapp stack-large">
      <h1>Lista de Tarefas</h1>
      <Formulario addTarefa={addTarefa} />
      <div className="filters btn-group stack-exception">
        {filtrarLista}
      </div>
      <h2 id="list-heading">
        {numeroDeTarefas}
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