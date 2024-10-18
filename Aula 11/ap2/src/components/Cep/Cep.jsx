import { useState } from "react";
import { BuscarCep } from "./BuscarCep";
import styles from './Cep.module.css'
function CepCard() {
    const [cepInput, setCepInput] = useState(null);
    const [showData, setShowData] = useState(false);
    const [data, error, loading] = BuscarCep(cepInput);

    const handleClick = () => {
        // Se já estivermos buscando dados, apenas alternamos a visibilidade
        if (!showData) {
            setCepInput("https://viacep.com.br/ws/95560000/json/");
        }
        setShowData(prev => !prev);
    };
    console.log(data); // Verifica os dados recebidos da API

    return (
        
            <div className={styles.cepContent}>
            <button onClick={handleClick}>Localização</button>
            {loading && <p>Loading...</p>}
            {showData && data && (
                <div className={styles.cepdata}>
                <p>CEP: {data.cep} </p>
                <p>BAIRRO: {data.bairro || "Não disponível"}</p>
                <p>HORÁRIO: 21:30</p>
                <p>CIDADE: {data.localidade}</p>
                <p>AV/RUA: Paraguassu</p>
                </div>
            )}
            {error && <p>{error}</p>}
            </div>
        
    );
}

export default CepCard;
