import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ProdutoForm.css'

function ProdutoForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    quantidade_em_estoque: '',
    preco: '',
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/produtos/${id}/`)
        .then(response => setProduto(response.data))
        .catch(error => console.error('Erro ao buscar produto:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id ? axios.put : axios.post;
    const url = id ? `http://localhost:8000/produtos/${id}/` : 'http://localhost:8000/produtos/';
    request(url, produto)
      .then(() => navigate('/produtos'))
      .catch(error => console.error('Erro ao salvar produto:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:
        <input type="text" name="nome" value={produto.nome} onChange={handleChange} required />
      </label>
      <label>Descrição:
        <input type="text" name="descricao" value={produto.descricao} onChange={handleChange} />
      </label>
      <label>Quantidade:
        <input type="number" name="quantidade_em_estoque" value={produto.quantidade_em_estoque} onChange={handleChange} required />
      </label>
      <label>Preço:
        <input type="number" name="preco" step="0.01" value={produto.preco} onChange={handleChange} required />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default ProdutoForm;