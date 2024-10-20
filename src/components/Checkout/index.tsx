import { useState } from 'react'
import Entrega from '../Entrega'
import Pagamento from '../Pagamento'

const Checkout = () => {
  const [step, setStep] = useState<'entrega' | 'pagamento'>('entrega')

  const handleContinuarComPagamento = (valid: boolean) => {
    if (valid) {
      setStep('pagamento')
    } else {
      alert('Dados de entrega inválidos')
    }
  }

  return (
    <div>
      {step === 'entrega' ? (
        <Entrega onContinue={handleContinuarComPagamento} />
      ) : (
        <Pagamento />
      )}
    </div>
  )
}

export default Checkout
