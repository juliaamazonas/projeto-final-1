import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clear, close } from '../../store/reducers/cart'

import Button from '../Button'

import {
  ConfirmacaoAside,
  ConfirmacaoCOntainer,
  ConfirmacaoConteudo,
  Overlay
} from './styles'

type Props = {
  pedidoId: string | null
  onOrderComplete: () => void
}

const Confirmacao = ({ pedidoId, onOrderComplete }: Props) => {
  const [estaVisivel, setEstaVisivel] = useState(true)
  const dispatch = useDispatch()

  const handleConcluir = () => {
    setEstaVisivel(false)
    onOrderComplete()
    dispatch(clear())
  }

  if (!estaVisivel) {
    return null
  }

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <ConfirmacaoCOntainer>
      <Overlay onClick={closeCart} />
      <ConfirmacaoAside>
        <ConfirmacaoConteudo>
          {pedidoId ? (
            <h3>Pedido realizado - {pedidoId}</h3>
          ) : (
            <h3>Erro: Não foi possível obter o número do pedido.</h3>
          )}
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br></br>
            <br></br>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.<br></br>
            <br></br>Lembre-se da importância de higienizar as mãos após o
            recebimento do pedido, garantindo assim sua segurança e bem-estar
            durante a refeição.
            <br></br>
            <br></br>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button
            type={'button'}
            title={''}
            className="button-confirmacao"
            onClick={handleConcluir}
          >
            Concluir
          </Button>
        </ConfirmacaoConteudo>
      </ConfirmacaoAside>
    </ConfirmacaoCOntainer>
  )
}

export default Confirmacao
