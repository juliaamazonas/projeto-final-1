import Restaurantes from '../../models/Restaurantes'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

type Props = {
  restaurantes: Restaurantes[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurantes) => (
            <Restaurant
              key={restaurantes.id}
              category={restaurantes.category}
              description={restaurantes.description}
              image={restaurantes.image}
              infos={restaurantes.infos}
              title={restaurantes.title}
              avaliacao={restaurantes.avaliacao}
              destaque={restaurantes.destaque}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
