import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

function Produtos() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get("http://localhost:3001/products");
      setData(result.data);
    };

    fetchProducts();
  }, []);

  function handleClick(id) {
    navigate(`${id}`);
  }

  return (
    <>
      <Header title="Página dos Produtos" />
      <div className="products-container">
      <button className="btn-back" type="button" onClick={() => navigate("/home")}>
            Voltar
          </button>
        {data &&
          data.map((product) => (
            <div
              key={product.id}
              onClick={() => handleClick(product.id)}
              className="product-item"
            >
              <h1 className="product-name">{product.name}</h1>
              <p className="product-price">R$ {product.price}</p>
              <p className="product-description">{product.description}</p>
              <img
                className="product-image"
                src={product.photo_url}
                alt={product.name}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default Produtos;
