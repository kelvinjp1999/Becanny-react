import './Navbar.css';
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* ESQUERDA: Logo */}
      <div className="logo">
        <img src="/logo.png" alt="Becanny Logo" />
      </div>

      {/* CENTRO: Barra de pesquisa */}
      <div className="search">
        <input type="text" placeholder="Pesquisar..." />
        <button aria-label="Buscar">
          <FaSearch />
        </button>
      </div>

      {/* DIREITA: Login e Carrinho */}
      <div className="profile">
        <a href="/login" className="login">
          <FaUser />
          <span>Entre ou Cadastre-se</span>
        </a>
        <a href="/cart" className="cart">
          <FaShoppingCart />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
