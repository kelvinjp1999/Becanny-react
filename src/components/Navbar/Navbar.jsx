import './Navbar.css'


const Navbar = () => {

  return (
    <nav className='navbar'>
      <h2>Becanny</h2>
      <div className='search'>
        <input type="text" />
        <button>P</button>
      </div>
      <div className='profile'>
        <a href="/login">Login</a>
        <a href="/cart">Carrinho</a>
      </div>
    </nav>
  )
}

export default Navbar