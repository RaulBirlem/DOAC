import { useState } from "react";
import Header from "./components/Header/Header";
import Cep from "./components/Cep/Cep";
import './App.css';
import Welcome from "./components/Welcome/Welcome";
import FormData from "./components/FormData/FormData";

function App() {
  const [name, setName] = useState(""); // Estado para armazenar o nome

  return (
    <>
      <Header />
      <Welcome name={name} /> {/* Passa o nome para o Welcome */}
      <Cep />
      <FormData setName={setName} /> {/* Passa a função setName para FormData */}
    </>
  );
}

export default App;
