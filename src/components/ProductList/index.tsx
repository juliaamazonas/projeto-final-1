import { Key, useEffect, useState } from 'react'
import Product from '../Product'
import { Container, List } from './styles'
import { useParams } from 'react-router-dom'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

type Props = {
  restaurantId: string
}

const ProductList = ({ restaurantId }: { restaurantId: string }) => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  const restaurante = restaurantes.find((r) => r.id === Number(restaurantId))

  return (
    <Container>
      <div className="container">
        {restaurante && (
          <div key={restaurante.id}>
            <List>
              {restaurante.cardapio.map((prato) => (
                <Product
                  key={prato.id}
                  description={prato.descricao}
                  image={prato.foto}
                  title={prato.nome}
                  porcao={prato.porcao}
                  preco={prato.preco}
                />
              ))}
            </List>
          </div>
        )}
      </div>
    </Container>
  )
}

export default ProductList
