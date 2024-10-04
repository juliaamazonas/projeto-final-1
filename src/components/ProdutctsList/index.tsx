import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title: string
}

const ProductsList = () => {
  return (
    <Container>
      <div className="container">
        <List>
          <Product
            category="Japonesa"
            description="teste"
            image="//placehold.it/472x217"
            infos={['Destaque da Semana', 'Japonesa']}
            title="Nome do Restaurante"
            avaliacao="4.9"
            destaque="Destaque da semana"
          />
          <Product
            category="Japonesa"
            description="teste"
            image="//placehold.it/472x217"
            infos={['Destaque da Semana', 'Japonesa']}
            title="Nome do Restaurante"
            avaliacao="4.9"
            destaque="Destaque da semana"
          />
          <Product
            category="Japonesa"
            description="teste"
            image="//placehold.it/472x217"
            infos={['Destaque da Semana', 'Japonesa']}
            title="Nome do Restaurante"
            avaliacao="4.9"
            destaque="Destaque da semana"
          />
          <Product
            category="Japonesa"
            description="teste"
            image="//placehold.it/472x217"
            infos={['Destaque da Semana', 'Japonesa']}
            title="Nome do Restaurante"
            avaliacao="4.9"
            destaque="Destaque da semana"
          />
          <Product
            category="Japonesa"
            description="teste"
            image="//placehold.it/472x217"
            infos={['Destaque da Semana', 'Japonesa']}
            title="Nome do Restaurante"
            avaliacao="4.9"
            destaque="Destaque da semana"
          />
          <Product
            category="Japonesa"
            description="teste"
            image="//placehold.it/472x217"
            infos={['Destaque da Semana', 'Japonesa']}
            title="Nome do Restaurante"
            avaliacao="4.9"
            destaque="Destaque da semana"
          />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
