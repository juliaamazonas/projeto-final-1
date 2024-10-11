import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import ProductsList from '../../components/RestaurantList'
import RestaurantList from '../../components/RestaurantList'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [pratos, setPratos] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantList restaurantes={pratos} />
    </>
  )
}

export default Home
