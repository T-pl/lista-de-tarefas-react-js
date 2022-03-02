import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DADOS = [
  { id: "tarefa-1", name: "Estudar", completed: true },
  { id: "tarefa-2", name: "Trabalhar", completed: false },
  { id: "tarefa-3", name: "Correr", completed: false }
];


ReactDOM.render(
  <React.StrictMode>
    <App tarefas={DADOS} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
