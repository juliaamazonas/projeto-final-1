import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import { useGetFeaturedRestaurantQuery } from '../../services/api'

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
  const { data: restaurantes, isLoading } = useGetFeaturedRestaurantQuery()

  return (
    <>
      <Hero />
      <RestaurantList restaurantes={restaurantes ?? []} />
    </>
  )
}

export default Home
