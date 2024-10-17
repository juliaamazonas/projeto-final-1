import { useState } from 'react'
import { Card, Container, Descricao, Titulo } from './styles'
import Button from '../Button'
import Modal from '../Modal'

export type Produto = {
  id: number
  title: string
  description: string
  image: string
  porcao: string
  preco: number
}

const Product = ({ title, description, image, porcao, preco, id }: Produto) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 117) + '...'
    }
    return descricao
  }

  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const product = {
    id,
    title,
    description,
    image,
    porcao,
    preco
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Container>
        <Titulo>{title}</Titulo>
        <Descricao>{getDescricao(description)}</Descricao>
        <Button
          onClick={() => {
            setModalEstaAberto(true)
          }}
          type="button"
          title="Adicionar ao carrinho"
          to="/perfil"
          variant="add"
          className="button-card"
        >
          Adicionar ao carrinho
        </Button>
        {modalEstaAberto && (
          <Modal
            title={title}
            description={description}
            image={image}
            porcao={porcao}
            preco={preco}
            className={modalEstaAberto ? 'visivel' : ''}
            onClose={() => setModalEstaAberto(false)}
            product={product}
          />
        )}
      </Container>
    </Card>
  )
}

export default Product
