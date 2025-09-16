import './Navbar.css';
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import Logo from '../../assets/logo.png'

import { useAuth } from '../../context/AuthContext';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="navbar">
      {/* ESQUERDA: Logo */}
      <div className="logo">
        <Link to='./'>
          <img src={Logo} alt="Becanny Logo" />
        </Link>
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
        {user && (<p><FaUser /> {user.displayName}</p>)}
        {!user && (<NavLink to="/register" className="login">
          <FaUser />
          <span>Entre ou Cadastre-se</span>
        </NavLink>)}
        <NavLink to="/cart" className="cart">
          <FaShoppingCart />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
