import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import Button from '../Button'
import Checkout from '../Checkout'
import { close, remove } from '../../store/reducers/cart'
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

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const [showCheckout, setShowCheckout] = useState(false)

  const closeCart = () => {
    dispatch(close())
  }

  const valorTotal = items.reduce((acc, item) => acc + item.preco, 0)

  const handleRemoveItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleShowCheckout = () => {
    setShowCheckout(true)
  }

  const handleBackToCart = () => {
    setShowCheckout(false)
  }

  return (
    <>
      <CartConainter className={isOpen && !showCheckout ? 'is-open' : ''}>
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
              onClick={handleShowCheckout}
            >
              Continuar com a entrega
            </Button>
          </ConteudoCart>
        </CartAside>
      </CartConainter>
      {showCheckout && <Checkout onBackToCart={handleBackToCart} />}
    </>
  )
}

export default Cart
