import { useDispatch } from 'react-redux'

import Button from '../Button'

import { add, open } from '../../store/reducers/cart'

import { ModalFundo, ModalContainer, ModalInfo, CloseButton } from './styles'

export interface Produto {
  id: number
  title: string
  description: string
  image: string
  porcao: string
  preco: number
}

type ModalProps = {
  title: string
  description: string
  image: string
  porcao: string
  preco: number
  className?: string
  children?: React.ReactNode
  onClose: () => void
  product: Produto
}

const Modal = ({ preco, className, onClose, product }: ModalProps) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    console.log('Produto sendo adicionado:', product)
    dispatch(add(product))
    dispatch(open())
  }

  return (
    <ModalFundo className={className}>
      <div className="overlay" onClick={onClose} />{' '}
      <ModalContainer>
        <CloseButton onClick={onClose}>x</CloseButton>
        <img src={product.image} alt={product.title} />
        <ModalInfo>
          <h3>{product.title}</h3>
          <p>
            {product.description} <br />
            <br />
            Serve: {product.porcao}
          </p>
          <Button
            type={'button'}
            variant="add"
            title={`Adicionar ao Carrinho - R$${preco.toFixed(2)}`}
            onClick={handleAddToCart}
          >
            {`Adicionar ao Carrinho - R$${preco.toFixed(2)}`}
          </Button>
        </ModalInfo>
      </ModalContainer>
    </ModalFundo>
  )
}

export default Modal
