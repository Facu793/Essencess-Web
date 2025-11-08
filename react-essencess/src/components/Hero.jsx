import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Velas Aromáticas Artesanales</h1>
        <p className="hero-subtitle">
          Transforma tu espacio con nuestras velas de alta calidad. 
          Cada vela está hecha con cera natural y aceites esenciales puros.
        </p>
        <a href="#productos" className="hero-cta">Explorar Productos</a>
      </div>
      <div className="hero-overlay"></div>
    </section>
  )
}

export default Hero

