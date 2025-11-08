import { useState } from 'react'
import './Inicio.css'
import fotoInicio from '../image/fotoInicio/FotoInicio.png'

function Inicio() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="inicio-section">
      <div className="inicio-hero">
        <div className="inicio-image-container">
          <img 
            src={fotoInicio}
            alt="Vela aromática"
            className="inicio-image"
          />
          <div className="inicio-overlay"></div>
        </div>
        <div className="inicio-content">
          <div className="inicio-welcome">
            <h2 className="inicio-title">Bienvenido a Esscences</h2>
            <p className="inicio-subtitle">Transforma tu espacio con aromas únicos</p>
            <button 
              className="btn-conocer-mas"
              onClick={() => setShowModal(true)}
            >
              Conocer más sobre nosotros
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2 className="modal-title">Sobre WebEscences</h2>
            <div className="modal-description">
              <p>
                En <strong>Escences</strong>, nos dedicamos a crear productos aromáticos de la más alta calidad 
                para transformar tu espacio en un ambiente único y acogedor.
              </p>
              <p>
                Nuestras velas y aromatizadores están elaborados con ingredientes naturales, 
                cera de soja y aceites esenciales puros, garantizando una experiencia sensorial 
                excepcional que dura horas.
              </p>
              <p>
                Cada producto es cuidadosamente seleccionado y diseñado para brindarte momentos 
                de relajación, energía o comodidad, según tus necesidades. Creemos que los aromas 
                tienen el poder de influir en nuestro estado de ánimo y bienestar.
              </p>
              <p>
                Descubre nuestra amplia gama de fragancias, desde las más relajantes hasta las más 
                energizantes, y encuentra el aroma perfecto para cada rincón de tu hogar.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Inicio
