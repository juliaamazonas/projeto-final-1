import Tag from '../Tag'
import Button from '../Button'

import estrela from '../../assets/images/star_favorite-[#1499].png'

import {
  AvalicaoContainer,
  Card,
  Container,
  Descricao,
  Infos,
  Titulo,
  TituloContainer
} from './styles'

type Props = {
  id: number
  title: string
  category: string
  avaliacao: number
  destacado: boolean
  description: string
  infos: string[]
  image: string
}

const Restaurant = ({
  id,
  title,

  avaliacao,

  description,
  infos,
  image
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 220) {
      return descricao.slice(0, 217) + '...'
    }
    return descricao
  }

  return (
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
        <Descricao>{getDescricao(description)}</Descricao>
        <div>
          <Button
            type="link"
            title="Saiba mais"
            to={`/perfil/${id}`}
            variant="more"
          >
            Saiba mais
          </Button>
        </div>
      </Container>
    </Card>
  )
}

export default Restaurant
