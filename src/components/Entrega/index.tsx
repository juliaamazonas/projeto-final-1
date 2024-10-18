import Button from '../Button'
import {
  ConteudoEntrega,
  EntregaAside,
  EntregaConainter,
  Form,
  FormItens,
  Overlay
} from './styles'

const Entrega = ({ onBackToCart }: { onBackToCart: () => void }) => (
  <EntregaConainter>
    <Overlay />
    <EntregaAside>
      <ConteudoEntrega>
        <h4>Entrega</h4>
        <Form>
          <FormItens>
            <label>Quem irá receber</label>
            <input type="text" />
          </FormItens>
          <FormItens>
            <label>Endereço</label>
            <input type="text" />
          </FormItens>
          <FormItens>
            <label>Cidade</label>
            <input type="text" />
          </FormItens>
          <FormItens>
            <div className="form-numbers">
              <div>
                <label>CEP</label>
                <input type="number" />
              </div>
              <div>
                <label>Número</label>
                <input type="number" />
              </div>
            </div>
          </FormItens>
          <FormItens>
            <label>Complemento (opcional) </label>
            <input type="text" />
          </FormItens>
        </Form>
        <Button
          type={'button'}
          title={'Continuar com o pagamento'}
          variant={'add'}
          className="button-form"
        >
          Continuar com o pagamento
        </Button>
        <Button
          type={'button'}
          title={'Voltar para o carrinho'}
          variant={'add'}
          className="button-form"
          onClick={onBackToCart}
        >
          Voltar para o carrinho
        </Button>
      </ConteudoEntrega>
    </EntregaAside>
  </EntregaConainter>
)

export default Entrega
