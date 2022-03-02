
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Tarefas from "./components/Tarefas";


function adicionarTarefa(name) {
  alert(name);
}


function App(props) {
  const ListaDeTarefas = props.tarefas?.map(tarefas =>
    <Tarefas id={tarefas.id} name={tarefas.name} completed={tarefas.completed} key={tarefas.id} />);
    
  return (
    <div className="todoapp stack-large">
      <h1>Lista de Tarefas</h1>
      <Form addTarefa={adicionarTarefa} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        3 tarefas faltantes
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {ListaDeTarefas}
        
      </ul>
    </div>
  );
}

export default App
