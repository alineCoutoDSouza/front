import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ProdutoDetail.css'; 
function ProdutoDetail() {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8000/produtos/${id}/`)
            .then(response => setProduto(response.data))
            .catch(error => console.error('Erro ao buscar produto:', error));
    }, [id]);


    if (!produto) return <p>Carregando...</p>;

    return (
        <div className='produto-detail'>
            <h2>{produto.nome}</h2>
            <p>Descrição: {produto.descricao}</p>
            <p>Quantidade em Estoque: {produto.quantidade_em_estoque}</p>
            <p>Preço: R${produto.preco}</p>
            <p>Data de Adição: {produto.data_adicao}</p>
            <Link to={`/produtos/edit/${id}`}>Editar</Link>
            <button onClick={() => {
                axios.delete(`http://localhost:8000/produtos/${id}/`)
                    .then(() => navigate('/produtos'))
                    .catch(error => console.error('Erro ao deletar produto:', error));
            }}>Deletar</button>
        </div>
    );
}

export default ProdutoDetail;
