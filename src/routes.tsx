import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import ProductInfo from './components/ProductInfo'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route path="/perfil/:id/produtos/:id" element={<ProductInfo />} />
  </Routes>
)

export default Rotas
