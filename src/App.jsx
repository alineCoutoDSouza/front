import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProdutoList from './components/ProdutoList';
import ProdutoDetail from './components/ProdutoDetail';
import ProdutoForm from './components/ProdutoForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/produtos" element={<ProdutoList />} />
        <Route path="/produtos/:id" element={<ProdutoDetail />} />
        <Route path="/produtos/new" element={<ProdutoForm />} />
        <Route path="/produtos/edit/:id" element={<ProdutoForm />} />
      </Routes>
    </Router>
  );
}

export default App;
