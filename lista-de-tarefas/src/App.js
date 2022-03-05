import BotaoFiltrar from "./components/BotaoFiltrar";
import Formulario from "./components/Formulario";
import Tarefas from "./components/Tarefas";

function App(props) {
  // Essa const usa um método JS map para extrair os dados do array DADOS
  const listaDeTarefas = props.tarefas.map(tarefa => (
    <Tarefas
      id={tarefa.id}
      name={tarefa.name}
      completed={tarefa.completed}
      key={tarefa.id}/>
  ));

  return (
    <div className="todoapp stack-large">
      <h1>Lista de Tarefas</h1>
      <Formulario />
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