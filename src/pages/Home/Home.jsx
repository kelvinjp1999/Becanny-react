import styles from './Home.module.css'
import { useState, useEffect, useRef } from 'react'

import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'
import video4 from '../../assets/video4.mp4'

const Home = () => {
  const [index, setIndex] = useState(0)       // Para ofertas
  const [indeximg, setIndexImg] = useState(0) // Para vídeos
  const videoRef = useRef()                    // Para recarregar o vídeo

  const videos = [video1, video2, video3, video4]

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

  // Próximo vídeo
  const nextImage = () => {
    setIndexImg(prev => (prev >= videos.length - 1 ? 0 : prev + 1))
  }

  // Vídeo anterior
  const prevImage = () => {
    setIndexImg(prev => (prev <= 0 ? videos.length - 1 : prev - 1))
  }

  // Atualiza o vídeo quando indeximg muda
  useEffect(() => {
    if(videoRef.current) {
      videoRef.current.load()
      videoRef.current.play()
    }
  }, [indeximg])

  // Troca automática das ofertas a cada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex(prev => (prev >= offers.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(intervalo)
  }, [offers.length])

  return (
    <div>
      {/* Categorias */}
      <div className={styles.categories}>
        <p>Cachorro</p>
        <p>Gato</p>
        <p>Peixe</p>
        <p>Passaros</p>
        <p>Diversos</p>
      </div>

      {/* Ofertas */}
      <div className={styles.offers}>
        <p style={{ backgroundColor: offerColors[index], borderRadius: '10px' }}>
          {offers[index]}
        </p>
      </div>

      {/* Carrossel de vídeos */}
      <div className={styles.container_carrossel}>
        <div className={styles.carrossel}>
          <video
            ref={videoRef}
            width="600px"
            autoPlay
            loop
            muted
          >
            <source src={videos[indeximg]} type="video/mp4" />
          </video>
        </div>

        <div>
          <button type="button" onClick={prevImage}>Anterior</button>
          <button type="button" onClick={nextImage}>Próximo</button>
        </div>
      </div>
    </div>
  )
}

export default Home
