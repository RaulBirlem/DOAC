import styles from './Pessoas.module.css';

const Pessoas = ({ pessoas }) => {
  return (
    <div className={styles.list}>
      <h2>Lista de Pessoas</h2>
      <ul>
        {pessoas.length === 0 ? (
          <li>Nenhuma pessoa cadastrada.</li>
        ) : (
          pessoas.map((pessoa, index) => (
            <li key={index}>
              <span>{pessoa.nome}</span> - {pessoa.email}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Pessoas;
