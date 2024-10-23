import { useState } from 'react'
import Button from '../Button'
import { Form, FormItens } from '../Entrega/styles'
import {
  Overlay,
  PagamentoAside,
  PagamentoConainter,
  PagamentoConteudo
} from './styles'

interface Props {
  deliveryData: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  products: {
    id: number
    price: number
  }[]
  paymentData: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
  onBackToDelivery: () => void
}

const Pagamento = ({
  onBackToDelivery,
  deliveryData,
  products,
  paymentData
}: Props) => {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardCVV, setCardCVV] = useState('')
  const [cardMonth, setCardMonth] = useState('')
  const [cardYear, setCardYear] = useState('')
  const [paymentStatus, setPaymentStatus] = useState('')

  const handlePagamento = async () => {
    const requestData = {
      products,
      delivery: deliveryData,
      payment: {
        card: {
          name: cardName,
          number: cardNumber,
          code: Number(cardCVV),
          expires: {
            month: Number(cardMonth),
            year: Number(cardYear)
          }
        }
      }
    }

    console.log('Dados da requisição:', requestData)
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
        const data = await response.json()
        setPaymentStatus('Pagamento realizado com sucesso!')
        console.log('Resposta da API:', data)
      } else {
        setPaymentStatus('Erro ao realizar o pagamento. Tente novamente.')
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
      setPaymentStatus('Erro ao realizar o pagamento. Tente novamente.')
    }
  }

  const totalValue = products.reduce((acc, product) => acc + product.price, 0)

  return (
    <PagamentoConainter>
      <Overlay />
      <PagamentoAside>
        <PagamentoConteudo>
          <h4>Pagamento - Valor a {totalValue.toFixed(2)}</h4>
          <Form>
            <FormItens>
              <label>Nome no cartão</label>
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </FormItens>
            <FormItens>
              <div className="form-numbers">
                <div>
                  <label>Número do cartão</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
                <div>
                  <label>CVV</label>
                  <input
                    type="number"
                    value={cardCVV}
                    onChange={(e) => setCardCVV(e.target.value)}
                  />
                </div>
              </div>
            </FormItens>
            <FormItens>
              <div className="form-numbers">
                <div>
                  <label>Mês de vencimento</label>
                  <input
                    type="text"
                    value={cardMonth}
                    onChange={(e) => setCardMonth(e.target.value)}
                  />
                </div>
                <div>
                  <label>Ano de vencimento</label>
                  <input
                    type="number"
                    value={cardYear}
                    onChange={(e) => setCardYear(e.target.value)}
                  />
                </div>
              </div>
            </FormItens>
          </Form>

          {paymentStatus && <p>{paymentStatus}</p>}

          <Button
            type={'button'}
            title={'Continuar com o pagamento'}
            variant={'add'}
            className="button-form"
            onClick={handlePagamento}
          >
            Finalizar pagamento
          </Button>
          <Button
            type={'button'}
            title={'Voltar para o carrinho'}
            variant={'add'}
            className="button-form"
            onClick={onBackToDelivery}
          >
            Voltar para a edição de endereço
          </Button>
        </PagamentoConteudo>
      </PagamentoAside>
    </PagamentoConainter>
  )
}

export default Pagamento
