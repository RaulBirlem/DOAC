import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProdutoCRUD from './components/ProdutoCRUD';
import Produtos from './components/Produtos';
import ProdutoSobre from './components/ProdutoSobre';
import ProdutoEditar from './components/ProdutoEditar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id/*" element={<ProdutoSobre />} />
        <Route path="/crud" element={<ProdutoCRUD />} />
        <Route path="crud/editar/:id" element={<ProdutoEditar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
