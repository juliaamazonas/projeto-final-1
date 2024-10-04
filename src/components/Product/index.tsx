import Tag from '../Tag'
import {
  AvalicaoContainer,
  Card,
  Container,
  Descricao,
  Infos,
  Titulo,
  TituloContainer
} from './styles'
import estrela from '../../assets/images/star_favorite-[#1499].png'
import Button from '../Button'

type Props = {
  title: string
  category: string
  avaliacao: string
  destaque: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  avaliacao,
  destaque,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Container>
      <TituloContainer>
        <Titulo>{title}</Titulo>
        <AvalicaoContainer>
          <Titulo>{avaliacao}</Titulo>
          <img src={estrela} alt="estrela" />
        </AvalicaoContainer>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <Button type="link" title="Saiba mais" to="/produto" variant="more">
        Saiba mais
      </Button>
    </Container>
  </Card>
)

export default Product
