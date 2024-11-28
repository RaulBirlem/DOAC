import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header title="Página Inicial" />
      <div className="home-container">
        <h1>Bem-vindo à Loja de Produtos!</h1>
        <p>Explore nossa lista de produtos e veja os detalhes de cada um.</p>
        <button onClick={() => navigate("/produtos")} className="btn">
          Ver Produtos
        </button>
      </div>
    </>
  );
}

export default Home;
