import Button from '../Button'
import {
  CartConainter,
  ConteudoCart,
  Overlay,
  CartAside,
  CartList,
  ContainerItem,
  CartItem,
  CartInfo
} from './styles'

import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { Produto } from '../Modal'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const valorTotal = items.reduce((acc, item) => acc + item.preco, 0)

  const handleRemoveItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartConainter className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <CartAside>
        <ConteudoCart>
          <CartList>
            {items.map((item) => (
              <CartItem key={item.id}>
                <ContainerItem>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h4>{item.title}</h4>
                    <span>R$ {item.preco.toFixed(2)}</span>
                    <img
                      src={lixeira}
                      alt="Lixeira para excluir item"
                      onClick={() => handleRemoveItem(item.id)}
                    />
                  </div>
                </ContainerItem>
              </CartItem>
            ))}
          </CartList>
          <CartInfo>
            <p>Valor total</p>
            <span>R$ {valorTotal.toFixed(2)}</span>
          </CartInfo>
          <Button
            type={'button'}
            title={'Continuar com a entrega'}
            variant={'add'}
            className="button-cart"
          >
            Continuar com a entrega
          </Button>
        </ConteudoCart>
      </CartAside>
    </CartConainter>
  )
}

export default Cart
