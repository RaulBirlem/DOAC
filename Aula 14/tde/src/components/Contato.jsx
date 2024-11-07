// src/components/Contato.js
import { useState } from "react";

const Contato = ({ pessoas, setPessoas }) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPessoas([...pessoas, formData]);

    setFormData({
      nome: "",
      email: "",
    });
  };

  return (
    <div>
      <h1>Contato</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      <h2>Lista de Pessoas</h2>
      <ul>
        {pessoas.map((pessoa, index) => (
          <li key={index}>
            {pessoa.nome} - {pessoa.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contato;
