import "./Footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Logo */}
        <div className="footer-logo">
          <img src={Logo} alt="Becanny Logo" />
          <h2>BECANNY <span>PET SHOP</span></h2>
        </div>

        {/* Contatos */}
        <div className="footer-info">
          <p>Estamos localizados na Rua Exemplo, 123 - Bairro Exemplo, Cidade - Estado loja 1</p>
          <p>Telefone: (11) 1234-5678</p>
          
          <p>Estamos localizados na Rua Exemplo, 123 - Bairro Exemplo, Cidade - Estado loja 2</p>
          <p>Telefone: (11) 9876-5432</p>

          <p>Estamos localizados na Rua Exemplo, 123 - Bairro Exemplo, Cidade - Estado loja 3</p>
          <p>Telefone: (11) 1234-5678</p>

          <p>Estamos localizados na Rua Exemplo, 123 - Bairro Exemplo, Cidade - Estado loja 4</p>
          <p>Telefone: (11) 1234-5678</p>

          <p>Horário de funcionamento: Segunda a Sexta, das 9h às 18h</p>
        </div>

        {/* Redes sociais */}
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Linha + direitos */}
      <div className="footer-bottom">
        <p>© 2025 BECANNY PET SHOP. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
