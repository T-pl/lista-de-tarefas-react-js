import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const DADOS = [
  { id: "todo-0", name: "", completed: true }
  // { id: "todo-1", name: "Trabalhar", completed: false },
  // { id: "todo-2", name: "Correr", completed: false }
];

ReactDOM.render(<App tarefas={DADOS} />, document.getElementById('root'));

