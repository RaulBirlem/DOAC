import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import axios from "axios";

function ProdutoEditar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    photo_url: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios.get(`http://localhost:3001/products/${id}`);
      setFormData(result.data);
    };

    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/products/${id}`, formData);
      alert("Produto atualizado com sucesso!");
      navigate("/crud");
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
    }
  };

  return (
    <>
      <Header title="Editar Produto" />
      <div className="container">
        <h1>Editar Produto</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Preço:</label>
            <input
              className="form-input"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Descrição:</label>
            <input
              className="form-input"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>URL da Imagem:</label>
            <input
              className="form-input"
              type="text"
              name="photo_url"
              value={formData.photo_url}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn" type="submit">
            Salvar Alterações
          </button>
        </form>
      </div>
    </>
  );
}

export default ProdutoEditar;
