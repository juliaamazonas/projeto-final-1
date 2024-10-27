import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Entrega from '../Entrega'
import Pagamento from '../Pagamento'

type Props = {
  onBackToCart: () => void
  deliveryData?: any
  onOrderComplete: () => void
}

const Checkout = ({ onBackToCart, deliveryData, onOrderComplete }: Props) => {
  const [showPagamento, setShowPagamento] = useState(false)
  const [dadosEntrega, setDadosEntrega] = useState({
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: 0,
      complement: ''
    }
  })

  const items = useSelector((state: RootReducer) => state.cart.items)
  const products = items.map((item) => ({
    id: item.id,
    price: item.preco || 0
  }))

  const handleEntregaValidada = (valid: boolean, dadosEntrega?: any) => {
    if (valid) {
      setShowPagamento(true)
    } else {
      alert('Dados de entrega inválidos')
    }
  }

  const handleBackToDelivery = () => {
    setShowPagamento(false)
  }

  return (
    <div>
      {!showPagamento ? (
        <Entrega
          onContinue={handleEntregaValidada}
          onBackToCart={onBackToCart}
        />
      ) : (
        <Pagamento
          deliveryData={dadosEntrega}
          onBackToDelivery={handleBackToDelivery}
          products={products}
          paymentData={{
            card: {
              name: '',
              number: '',
              code: 0,
              expires: {
                month: 0,
                year: 0
              }
            }
          }}
        />
      )}
    </div>
  )
}

export default Checkout
