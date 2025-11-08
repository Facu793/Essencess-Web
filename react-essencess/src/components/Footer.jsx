import './Footer.css'

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>WebEscences</h3>
          <p>Velas aromáticas artesanales para transformar tu espacio.</p>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@webescences.com</p>
          <p>Teléfono: +1 (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 WebEscences. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer

