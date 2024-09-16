import { HeaderBar, LinkCart, Links, LinksItens } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <div className="container">
      <nav>
        <Links>
          <LinksItens>
            <a href="#">Restaurantes</a>
          </LinksItens>
          <LinksItens>
            <img src={logo} alt="Efood" />
          </LinksItens>
          <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
        </Links>
      </nav>
    </div>
  </HeaderBar>
)

export default Header
