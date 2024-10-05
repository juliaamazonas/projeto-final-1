import { Card, Container, Descricao, Titulo } from './syles'
import Button from '../Button'

type Props = {
  title: string

  description: string

  image: string
}

const Product = ({
  title,

  description,

  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Container>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Button
        type="link"
        title="Adicionar ao carrinho"
        to="/perfil"
        variant="add"
      >
        Adicionar ao carrinho
      </Button>
    </Container>
  </Card>
)

export default Product
