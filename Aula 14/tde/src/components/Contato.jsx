import { useState, useEffect } from "react";
import { buscarPessoas, adicionarPessoa } from "../pessoas/Pessoas";
import Pessoas from "./Pessoas";
import styles from './Contato.module.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
  });

  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.nome && formData.email) {
      setLoading(true);
      await adicionarPessoa(formData);
      const novasPessoas = await buscarPessoas();
      setPessoas(novasPessoas);
      setFormData({
        nome: "",
        email: "",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPessoas = async () => {
      setLoading(true);
      const pessoas = await buscarPessoas();
      setPessoas(pessoas);
      setLoading(false);
    };

    fetchPessoas();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contato</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
          className={styles.input}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      <div className={styles.list}>
        <Pessoas pessoas={pessoas} />
      </div>
    </div>
  );
};

export default Contato;
