import Button from '../Button'
import {
  Item,
  CartConainter,
  ConteudoCart,
  Overlay,
  CartAside,
  CartList,
  ContainerItem
} from './styles'
import pizza from '../../assets/images/prato1-italiana.png'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'

const Cart = () => (
  <CartConainter>
    <Overlay />
    <CartAside>
      <ConteudoCart>
        <CartList>
          <Item>
            <ContainerItem>
              <img src={pizza} alt="Pizza de Marguerita" />
              <div>
                <h4>Pizza de Marguerita</h4>
                <span>R$ 60,90</span>
                <img src={lixeira} alt="Lixeira para excluir item" />
              </div>
            </ContainerItem>
          </Item>
          <Item>
            <ContainerItem>
              <img src={pizza} alt="Pizza de Marguerita" />
              <div>
                <h4>Pizza de Marguerita</h4>
                <span>R$ 60,90</span>
                <img src={lixeira} alt="Lixeira para excluir item" />
              </div>
            </ContainerItem>
          </Item>
          <Item>
            <ContainerItem>
              <img src={pizza} alt="Pizza de Marguerita" />
              <div>
                <h4>Pizza de Marguerita</h4>
                <span>R$ 60,90</span>
                <img src={lixeira} alt="Lixeira para excluir item" />
              </div>
            </ContainerItem>
          </Item>
        </CartList>
        <p>Valor total</p>
        <span>R$ 182,70</span>
        <Button
          type={'button'}
          title={'Continuar com a entrega'}
          variant={'add'}
        >
          Continuar com a entrega
        </Button>
      </ConteudoCart>
    </CartAside>
  </CartConainter>
)

export default Cart
