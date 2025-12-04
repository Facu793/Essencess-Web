import './Footer.css'

function Footer() {
  const texto = "Envios a toda la Argentina  - ¡Descuentos a partir de 10 unidades iguales!"
  
  return (
    <footer className="footer">
      <div className="footer-marquee">
        <div className="footer-text">
          {texto} • {texto} • {texto} • {texto}
        </div>
      </div>
    </footer>
  )
}

export default Footer
