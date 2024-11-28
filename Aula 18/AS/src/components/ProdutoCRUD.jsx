import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProdutoCRUD() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: "", price: "", description: "", photo_url: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (id) => {
    navigate(`/crud/editar/${id}`);
  };

  const fetchProducts = async () => {
    const result = await axios.get("http://localhost:3001/products");
    setProducts(result.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "O nome do produto é obrigatório.";
    if (!formData.price || isNaN(formData.price) || formData.price <= 0) formErrors.price = "Deve ser um número válido.";
    if (!formData.description) formErrors.description = "A descrição é obrigatória.";

    // Validando a URL da imagem de forma simples com o construtor URL
    try {
      new URL(formData.photo_url);
    } catch (e) {
      formErrors.photo_url = "Coloque uma URL válida para a imagem.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await axios.post("http://localhost:3001/products", formData);
      fetchProducts();
      setFormData({ name: "", price: "", description: "", photo_url: "" });
      setErrors({});
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="container-crud">
      <h1>Gerenciar Produtos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Nome do Produto"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <input
          className="form-input"
          type="text"
          name="price"
          placeholder="Preço"
          value={formData.price}
          onChange={handleInputChange}
        />
        {errors.price && <p className="error-text">{errors.price}</p>}

        <input
          className="form-input"
          type="text"
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleInputChange}
        />
        {errors.description && <p className="error-text">{errors.description}</p>}

        <input
          className="form-input"
          type="text"
          name="photo_url"
          placeholder="URL da Imagem"
          value={formData.photo_url}
          onChange={handleInputChange}
        />
        {errors.photo_url && <p className="error-text">{errors.photo_url}</p>}

        <div className="product-actions">
          <button className="btn" type="button" onClick={() => navigate("/home")}>
            Voltar
          </button>
          <button className="btn" type="submit">Adicionar Produto</button>

        </div>
      </form>

      <div>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>R$ {product.price}</p>
            <p>{product.description}</p>
            <img className="product-image" src={product.photo_url} alt={product.name} />
            <div className="product-actions">
              <button className="btn" onClick={() => handleEdit(product.id)}>Editar</button>
              <button className="btn" onClick={() => handleDelete(product.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProdutoCRUD;
