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
            <p className="inicio-subtitle">Velas Aromáticas, Difusores y Piezas de Yeso diseñadas para decorar y perfumar tus espacios.</p>
            <button 
              className="btn-conocer-mas"
              onClick={() => setShowModal(true)}
            >
              Más sobre nosotros
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
            <h2 className="modal-title">Sobre Escences</h2>
            <div className="modal-description">
              
              <p>
                En <strong>Escences</strong> nos dedicamos a crear productos aromáticos, de decoración y para obsequiar.
                Transforma tu espacio en un ambiente único y acogedor con nuestros productos y empeza a regalar sensaciones! 
                Cada producto es elaborado cuidadosamente para brindarte lo mejor.
                
              </p>
              <p>
                Creemos que los aromas y colores tienen el poder de influir en nuestro estado de ánimo y bienestar, por eso realizamos productos personalizados,
                para que puedas elegir el color y aroma de tu preferencia.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Inicio
