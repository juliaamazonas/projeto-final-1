import Button from '../Button'
import {
  ConfirmacaoAside,
  ConfirmacaoCOntainer,
  ConfirmacaoConteudo,
  Overlay
} from './styles'

const Confirmacao = () => (
  <ConfirmacaoCOntainer>
    <Overlay />
    <ConfirmacaoAside>
      <ConfirmacaoConteudo>
        <h3>Pedido realizado - ORDER_ID</h3>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br></br>
          <br></br>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.<br></br>
          <br></br>Lembre-se da importância de higienizar as mãos após o
          recebimento do pedido, garantindo assim sua segurança e bem-estar
          durante a refeição.
          <br></br>
          <br></br>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <Button type={'button'} title={''} className="button-confirmacao">
          Concluir
        </Button>
      </ConfirmacaoConteudo>
    </ConfirmacaoAside>
  </ConfirmacaoCOntainer>
)

export default Confirmacao
