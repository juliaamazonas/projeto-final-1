import { ModalFundo, ModalContainer, ModalInfo, CloseButton } from './styles'
import pizza from '../../assets/images/prato1-italiana.png'
import fechar from '../../assets/images/close.png'
import Button from '../Button'

type ModalProps = {
  title: string
  description: string
  image: string
  porcao: string
  preco: number
  className?: string
  children?: React.ReactNode
  onClose: () => void
}

const Modal = ({
  title,
  description,
  image,
  porcao,
  preco,
  className,
  onClose,
  children
}: ModalProps) => {
  return (
    <ModalFundo className={className}>
      <div className="overlay" onClick={onClose} />{' '}
      <ModalContainer>
        <CloseButton onClick={onClose}>x</CloseButton>
        <img src={image} alt={title} />
        <ModalInfo>
          <h3>{title}</h3>
          <p>
            {description} <br />
            <br />
            Serve: {porcao}
          </p>
          <Button
            type={'button'}
            variant="add"
            title={`Adicionar ao Carrinho - R$${preco.toFixed(2)}`}
          >
            {`Adicionar ao Carrinho - R$${preco.toFixed(2)}`}
          </Button>
        </ModalInfo>
      </ModalContainer>
    </ModalFundo>
  )
}

export default Modal
