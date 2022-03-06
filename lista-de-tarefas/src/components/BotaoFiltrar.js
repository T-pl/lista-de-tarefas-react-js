function BotaoFiltrar(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.botaoPrecionado}
      onClick={()=> props.setFiltrar(props.name)}

    >
      <span className="visually-hidden">Mostrar </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> Tarefas</span>
    </button>
  );
}

export default BotaoFiltrar