import { useState } from 'react'

import Button from '../Button'
import {
  ConteudoEntrega,
  EntregaAside,
  EntregaConainter,
  Form,
  FormItens,
  Overlay
} from './styles'

const Entrega = ({ onBackToCart }: { onBackToCart: () => void }) => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'numero' ? Number(value) : value
    }))
  }

  const handleSubmit = async () => {
    const dataToSend = {
      ...formData,
      numero: Number(formData.numero)
    }
    console.log('Dados enviados:', dataToSend)
    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataToSend)
        }
      )

      if (response.ok) {
        const result = await response.json()
        console.log('Pedido concluído:', result)
        // Aqui você pode adicionar a lógica para exibir a tela de confirmação do pedido
      } else {
        console.error('Erro ao concluir pedido')
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }

  return (
    <EntregaConainter>
      <Overlay />
      <EntregaAside>
        <ConteudoEntrega>
          <h4>Entrega</h4>
          <Form>
            <FormItens>
              <label>Quem irá receber</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
              />
            </FormItens>
            <FormItens>
              <label>Endereço</label>
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
              />
            </FormItens>
            <FormItens>
              <label>Cidade</label>
              <input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleInputChange}
              />
            </FormItens>
            <FormItens>
              <div className="form-numbers">
                <div>
                  <label>CEP</label>
                  <input
                    type="text"
                    name="cep"
                    value={formData.cep}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Número</label>
                  <input
                    type="number"
                    name="numero"
                    value={formData.numero}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </FormItens>
            <FormItens>
              <label>Complemento (opcional) </label>
              <input
                type="text"
                name="complemento"
                value={formData.complemento}
                onChange={handleInputChange}
              />
            </FormItens>
          </Form>
          <Button
            type={'button'}
            title={'Continuar com o pagamento'}
            variant={'add'}
            className="button-form"
            onClick={handleSubmit}
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
}

export default Entrega
