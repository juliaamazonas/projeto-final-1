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

interface EntregaProps {
  onBackToCart: () => void
  onContinue: (valid: boolean) => void
}

const Entrega = ({ onBackToCart, onContinue }: EntregaProps) => {
  const [formData, setFormData] = useState({
    delivery: {
      receiver: '',
      address: {
        description: '',
        city: '',
        zipCode: '',
        number: 0,
        complement: ''
      }
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      delivery: {
        ...prevData.delivery,
        address: {
          ...prevData.delivery.address,
          [name]: name === 'number' ? parseInt(value) : value
        }
      }
    }))
  }

  const handleReceiverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      delivery: {
        ...prevData.delivery,
        receiver: e.target.value
      }
    }))
  }

  const handleSubmit = async () => {
    console.log('Dados enviados:', formData)

    const isValid =
      formData.delivery.receiver &&
      formData.delivery.address.description &&
      formData.delivery.address.city &&
      formData.delivery.address.zipCode &&
      formData.delivery.address.number > 0

    if (isValid) {
      onContinue(true)
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.')
      onContinue(false)
    }

    const requestData = {
      products: [
        {
          id: 1,
          price: 0
        }
      ],
      delivery: {
        receiver: formData.delivery.receiver,
        address: {
          description: formData.delivery.address.description,
          city: formData.delivery.address.city,
          zipCode: formData.delivery.address.zipCode,
          number: formData.delivery.address.number,
          complement: formData.delivery.address.complement
        }
      },
      payment: {
        card: {
          name: 'Placeholder',
          number: '1111222233334444',
          code: 123,
          expires: {
            month: 12,
            year: 2025
          }
        }
      }
    }
    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
        }
      )

      if (response.ok) {
        const result = await response.json()
        console.log('Pedido concluído:', result)
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
                name="receiver"
                value={formData.delivery.receiver}
                onChange={handleReceiverChange}
              />
            </FormItens>
            <FormItens>
              <label>Endereço</label>
              <input
                type="text"
                name="description"
                value={formData.delivery.address.description}
                onChange={handleInputChange}
              />
            </FormItens>
            <FormItens>
              <label>Cidade</label>
              <input
                type="text"
                name="city"
                value={formData.delivery.address.city}
                onChange={handleInputChange}
              />
            </FormItens>
            <FormItens>
              <div className="form-numbers">
                <div>
                  <label>CEP</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.delivery.address.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label>Número</label>
                  <input
                    type="number"
                    name="number"
                    value={formData.delivery.address.number}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </FormItens>
            <FormItens>
              <label>Complemento (opcional) </label>
              <input
                type="text"
                name="complement"
                value={formData.delivery.address.complement}
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
