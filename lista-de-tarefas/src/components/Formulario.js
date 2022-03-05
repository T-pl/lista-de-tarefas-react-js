function Formulario() {
  function enviarForm(e) {
    e.preventDefault();
    alert('Hello, world!');
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