import { ModalFundo, ModalContainer, ModalInfo, CloseButton } from './styles'
import pizza from '../../assets/images/prato1-italiana.png'
import fechar from '../../assets/images/close.png'
import Button from '../Button'

type ModalProps = {
  className?: string
  children?: React.ReactNode
  onClose: () => void
}

const Modal = ({ className, onClose, children }: ModalProps) => {
  return (
    <ModalFundo className={className}>
      <div className="overlay" onClick={onClose} />{' '}
      <ModalContainer>
        <CloseButton onClick={onClose}>x</CloseButton>
        <img src={pizza} alt="Pizza de Marguerita" />
        <ModalInfo>
          <h3>Pizza de Marguerita</h3>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião. <br />
            <br />
            Serve: de 2 a 3 pessoas
          </p>
          <Button type={'button'} variant="add" title={''}>
            Adicionar ao Carrinho - R$60,90
          </Button>
        </ModalInfo>
      </ModalContainer>
    </ModalFundo>
  )
}

export default Modal
