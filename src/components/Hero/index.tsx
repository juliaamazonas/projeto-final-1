import { Componentes, ComponentesItens, Header } from './styles'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <Header>
    <div className="container">
      <nav>
        <Componentes>
          <ComponentesItens>
            <img src={logo} alt="Efood" />
          </ComponentesItens>
          <ComponentesItens>
            <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
          </ComponentesItens>
        </Componentes>
      </nav>
    </div>
  </Header>
)

export default Hero
