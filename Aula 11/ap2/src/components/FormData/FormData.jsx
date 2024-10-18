import { useState } from "react";
import styles from "./FormData.module.css";

function FormData({ setName }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        photoUrl: "",
        isInvited: "não",
        isPaid: "não",
    });

    const [peopleList, setPeopleList] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,//nome e valor do input alterado
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Verifica se todos os campos obrigatórios estão preenchidos
        if (!formData.name || !formData.phone || !formData.photoUrl) {
            alert("Todos os campos obrigatórios devem ser preenchidos!");
            return;
        }

        setPeopleList(prevList => {
            const newList = [...prevList, formData]; // lista antiga e novo objeto
            return newList.sort((a, b) => a.name.localeCompare(b.name));//localeCompare analisa cada caractere nas strings, um por um, de acordo com seu valor Unicode
        });
        
        setName(formData.name);

        // Limpa o formulário após o cadastro
        setFormData({
            name: "",
            phone: "",
            photoUrl: "",
            isInvited: "não",
            isPaid: "não",
        });
    };

    const handleClear = () => {
        setFormData({
            name: "",
            phone: "",
            photoUrl: "",
            isInvited: "não",
            isPaid: "não",
        });
        setPeopleList([]);
        setName("");
    };

    return (
        <div className={styles.formData}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={styles.label}>Nome:</label>
                    <input 
                        className={styles.input}
                        name="name"
                        type="text" 
                        value={formData.name}
                        onChange={handleChange} 
                        placeholder="Digite seu nome" 
                        required
                    />
                </div>
                <div>
                    <label className={styles.label}>Telefone:</label>
                    <input 
                        className={styles.input}
                        name="phone"
                        type="tel" 
                        value={formData.phone}
                        pattern="[0-9]*" // apenas números
                        onChange={handleChange} 
                        placeholder="Digite seu telefone" 
                        required
                    />
                </div>
                <div>
                    <label className={styles.label}>URL da Foto:</label>
                    <input 
                        className={styles.input}
                        name="photoUrl"
                        type="url" 
                        value={formData.photoUrl}
                        onChange={handleChange} 
                        placeholder="Digite a URL da foto" 
                        required
                    />
                </div>
                <div>
                    <label className={styles.label}>Egresso/Convidado:</label>
                    <label className={styles.checkboxLabel}>
                        <input 
                            type="radio" 
                            name="isInvited" 
                            value="sim" 
                            checked={formData.isInvited === "sim"}
                            onChange={handleChange} 
                        />
                        Sim
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input 
                            type="radio" 
                            name="isInvited" 
                            value="não" 
                            checked={formData.isInvited === "não"}
                            onChange={handleChange} 
                        />
                        Não
                    </label>
                </div>
                <div>
                    <label className={styles.label}>Pago:</label>
                    <label className={styles.checkboxLabel}>
                        <input 
                            type="radio" 
                            name="isPaid" 
                            value="sim" 
                            checked={formData.isPaid === "sim"}
                            onChange={handleChange} 
                        />
                        Sim
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input 
                            type="radio" 
                            name="isPaid" 
                            value="não" 
                            checked={formData.isPaid === "não"}
                            onChange={handleChange} 
                        />
                        Não
                    </label>
                </div>
                <button type="submit">Cadastrar</button>
                <button type="button" onClick={handleClear}>Apagar</button>
            </form>

            <div>
                {peopleList.length === 0 ? (
                    <p>Nenhuma pessoa cadastrada ainda.</p>
                ) : (
                    <ul>
                        {peopleList.map((person, index) => (
                            <li key={index}>
                                <img src={person.photoUrl} alt={person.name} width={50} height={50} />
                                <span className={styles.listData}>
                                    <strong>{person.name}</strong>  {person.phone}  {person.isInvited === "sim" ? "Egresso/Convidado" : "Estudante"}  {person.isPaid === "sim" ? "Confirmado" : "Não Confirmado"}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default FormData;
