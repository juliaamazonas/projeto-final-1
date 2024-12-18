import Product from '../Product'

import { useGetCardapioQuery } from '../../services/api'

import { Container, List } from './styles'

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

const ProductList = ({ restaurantId }: { restaurantId: string }) => {
  const { data: restaurantes } = useGetCardapioQuery(restaurantId)
  const restaurante = restaurantes?.find(
    (rest) => rest.id === Number(restaurantId)
  )

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
                  id={prato.id}
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
