import { Restaurantes } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

type Props = {
  restaurantes: Restaurantes[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getRestauranteTags = (restaurante: Restaurantes) => {
    const tags = []

    if (restaurante.destacado) {
      tags.push('Destaque da Semana') // Adiciona a tag "Destaque"
    }

    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurantes) => (
            <Restaurant
              key={restaurantes.id}
              category={restaurantes.tipo}
              description={restaurantes.descricao}
              image={restaurantes.capa}
              title={restaurantes.titulo}
              avaliacao={restaurantes.avaliacao}
              destacado={restaurantes.destacado}
              infos={getRestauranteTags(restaurantes)}
              id={restaurantes.id}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
