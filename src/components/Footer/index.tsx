import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <div>
    <div className="container">
      <div>
        <img src={logo} alt="Efood" />
      </div>
      <div>
        <ul>
          <li>
            <img src={instagram} alt="Instagram" />
          </li>
          <li>
            <img src={facebook} alt="Facebook" />
          </li>
          <li>
            <img src={twitter} alt="Twitter" />
          </li>
        </ul>
      </div>
      <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
    </div>
  </div>
)

export default Footer
