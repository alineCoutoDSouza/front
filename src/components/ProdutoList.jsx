import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProdutoList.css';
function ProdutoList() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/produtos/')
      .then(response => setProdutos(response.data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div className='produto-list'>
      <h1>Produtos</h1>
      <Link to="/produtos/new">Novo Produto</Link>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <Link to={`/produtos/${produto.id}`}>{produto.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProdutoList;
