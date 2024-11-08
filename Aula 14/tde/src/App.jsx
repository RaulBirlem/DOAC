import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Contato from "./components/Contato";
import Sobre from "./components/Sobre";
import styles from './App.module.css';

function App() {
  const [pessoas, setPessoas] = useState([]);

  return (
    <BrowserRouter>
      <div>
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contato" className={styles.navLink}>
                Contato
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/sobre" className={styles.navLink}>
                Sobre
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
