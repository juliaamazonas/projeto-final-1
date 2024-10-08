import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import {
  ContainerFooter,
  ContainerLogo,
  ContatosItens,
  ContatosList,
  Texto
} from './styles'

const Footer = () => (
  <ContainerFooter>
    <div className="container">
      <ContainerLogo>
        <img src={logo} alt="Efood" />
      </ContainerLogo>
      <div>
        <ContatosList>
          <ContatosItens>
            <img src={instagram} alt="Instagram" />
          </ContatosItens>
          <ContatosItens>
            <img src={facebook} alt="Facebook" />
          </ContatosItens>
          <ContatosItens>
            <img src={twitter} alt="Twitter" />
          </ContatosItens>
        </ContatosList>
      </div>
      <Texto>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado. A efood é uma plataforma para divulgação de
        estabelecimentos, a responsabilidade pela entrega, qualidade dos
        produtos é toda do estabelecimento contratado.
      </Texto>
    </div>
  </ContainerFooter>
)

export default Footer
