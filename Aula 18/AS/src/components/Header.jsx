import { useNavigate } from "react-router-dom";

function Header({ title }) {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <h1 className="header-title">{title}</h1>
      <nav className="header-nav">
        <button className="btn" onClick={() => navigate("/home")}>
          Home
        </button>
        <button className="btn" onClick={() => navigate("/produtos")}>
          Produtos
        </button>
        <button className="btn" onClick={() => navigate("/crud")}>
          Gerenciar
        </button>
      </nav>
    </div>
  );
}

export default Header;
