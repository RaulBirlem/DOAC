import styles from './Header.module.css'
import logo from '../../public/logo.jpg'
const Header = () => {
  return (
    <div className={styles.background}>
      <img src={logo} alt="logo-img-computação" />
      <h2>Entrevero</h2>
    </div>
  )
}

export default Header