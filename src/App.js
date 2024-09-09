import React, { useState, useEffect } from 'react';
import { getLivros } from './service/livro.js';
import './App.css';

function App() {

  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  const fetchLivros = async () => {
    const livrosObtidos = await getLivros();
    setLivros(livrosObtidos);
  }

  return (
    <div className="App">
      <h1>ACHUB - POC consome api com axios</h1>
      <ul>
        {livros.map(livro => (
          <li key={livro._id}>
            <p>{livro.titulo}</p>            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
