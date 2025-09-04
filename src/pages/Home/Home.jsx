import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
      <div className={styles.categories}>
        <p>Cachorro</p>
        <p>Gato</p>
        <p>Peixe</p>
        <p>Passaros</p>
        <p>Diversos</p>
      </div>

      <div className={styles.offers}>
        <p>Entregamos na sua casa apos as 7</p>
      </div>

      <div className={styles.carrossel}>
        
      </div>
    </div>
  )
}

export default Home