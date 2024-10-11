import { useState } from 'react'
import { Card, Container, Descricao, Titulo } from './styles'
import Button from '../Button'
import Modal from '../Modal'

type Props = {
  title: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <Card>
      <img src={image} alt={title} />
      <Container>
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Button
          onClick={() => {
            console.log('Botão clicado, modal deve abrir')
            setModalEstaAberto(true)
          }}
          type="button"
          title="Adicionar ao carrinho"
          to="/perfil"
          variant="add"
        >
          Adicionar ao carrinho
        </Button>
        {modalEstaAberto && (
          <Modal
            className={modalEstaAberto ? 'visivel' : ''}
            onClose={() => setModalEstaAberto(false)}
          />
        )}
      </Container>
    </Card>
  )
}

export default Product
