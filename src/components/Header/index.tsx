import { HeaderBar, CartButton, Links, LinksItens } from './styles'
import logo from '../../assets/images/logo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)
  const quantidadeDeProdutos = items.length

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div className="container">
        <nav>
          <Links>
            <LinksItens>
              <a href="/">Restaurantes</a>
            </LinksItens>
            <LinksItens>
              <img src={logo} alt="Efood" />
            </LinksItens>
            <CartButton onClick={openCart}>
              {' '}
              {quantidadeDeProdutos} produtos no carrinho
            </CartButton>
          </Links>
        </nav>
      </div>
    </HeaderBar>
  )
}

export default Header
