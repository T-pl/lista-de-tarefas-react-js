function BotaoFiltrar() {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Mostrar </span>
      <span>Todas</span>
      <span className="visually-hidden"> Tarefas</span>
    </button>
  );
}

export default BotaoFiltrar