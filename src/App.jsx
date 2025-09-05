//Estrutura
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

// Estilos
import './App.css'

//Components
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

//Pages
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Profile from './pages/Profile/Profile'
import NotFound from './pages/404/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
