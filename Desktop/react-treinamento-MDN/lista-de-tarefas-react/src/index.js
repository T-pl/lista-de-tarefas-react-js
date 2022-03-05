import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Estudar", completed: true },
  { id: "todo-1", name: "Trabalhar", completed: false },
  { id: "todo-2", name: "Correr", completed: false }
];

const ESTADOS = [
  {name: "Todas"},
  {name: "Atual"},
  {name: "Concluidas"}
]

ReactDOM.render(
  <React.StrictMode>
    <App tarefas={DATA} estados={ESTADOS} />
  </React.StrictMode>,
  document.getElementById('root')
);

