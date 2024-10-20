import Button from '../Button'
import { Form, FormItens } from '../Entrega/styles'
import {
  Overlay,
  PagamentoAside,
  PagamentoConainter,
  PagamentoConteudo
} from './styles'

const Pagamento = () => (
  <PagamentoConainter>
    <Overlay />
    <PagamentoAside>
      <PagamentoConteudo>
        <h4>Pagamento - Valor a pagar R$ 190,90</h4>
        <Form>
          <FormItens>
            <label>Nome no cartão</label>
            <input type="text" />
          </FormItens>
          <FormItens>
            <div className="form-numbers">
              <div>
                <label>Número do cartão</label>
                <input type="text" />
              </div>
              <div>
                <label>CVV</label>
                <input type="number" />
              </div>
            </div>
          </FormItens>
          <FormItens>
            <div className="form-numbers">
              <div>
                <label>Mês de vencimento</label>
                <input type="text" />
              </div>
              <div>
                <label>Ano de vencimento</label>
                <input type="number" />
              </div>
            </div>
          </FormItens>
        </Form>
        <Button
          type={'button'}
          title={'Continuar com o pagamento'}
          variant={'add'}
          className="button-form"
        >
          Finalizar pagamento
        </Button>
        <Button
          type={'button'}
          title={'Voltar para o carrinho'}
          variant={'add'}
          className="button-form"
        >
          Voltar para a edição de endereço
        </Button>
      </PagamentoConteudo>
    </PagamentoAside>
  </PagamentoConainter>
)

export default Pagamento
