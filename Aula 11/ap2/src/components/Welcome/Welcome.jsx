import styles from './Welcome.module.css'
const Welcome = (props) => {
  return (
    <div className={styles.title}> 
        <h2>Seja bem-vindo, {props.name} </h2>
    </div>
  )
}

export default Welcome