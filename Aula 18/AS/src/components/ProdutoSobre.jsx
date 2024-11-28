import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProdutoSobre() {
  const [data, setData] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios.get(`http://localhost:3001/products/${params.id}`);
      setData(result.data);
    };

    fetchProduct();
  }, [params.id]);

  return (
    <>
      {data && (
        <div className="product-detail-container">
          <h1 className="product-name">{data.name}</h1>
          <img className="product-image" src={data.photo_url} alt={data.name} />
          <p className="product-description">
            Sobre o produto - {data.id} - R$ {data.price}
          </p>
          <h2 className="product-description">{data.description}</h2>
          <button
            className="btn-back"
            onClick={() => navigate("/produtos")}
          >
            Voltar
          </button>
        </div>
      )}
    </>
  );
}

export default ProdutoSobre;
