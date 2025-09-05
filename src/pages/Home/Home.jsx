import styles from './Home.module.css'
import { useState,useEffect } from 'react'

const Home = () => {

  const [index,setIndex] = useState(0)

  const offers = [
    'Entregamos na sua Casa Após ás 19:00 🚚',
    'Frete grátis para toda a zona leste 🚚',
    '10x sem juros no cartão! 💳'
  ]

  const offerColors = [
    'rgb(0,183, 255)',
    '#1F2937',
    '#F56B00'
  ]

  useEffect(() =>{
    const intervalo = setInterval(() =>{
      setIndex((prevIndex) => prevIndex >= offers.length -1 ? 0 : prevIndex + 1)
    },3000)

    return () => clearInterval(intervalo)
  },[offers.length])


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
        <p style={{backgroundColor:offerColors[index],borderRadius:'10px'}}>{offers[index]}</p>
      </div>

      <div className={styles.carrossel}>
        
      </div>
    </div>
  )
}

export default Home