import { useParams } from 'react-router-dom'
import Modal from '../Modal'

const ProductInfo = () => {
  const { id } = useParams()

  return (
    <div>
      <Modal
        onClose={function (): void {
          throw new Error('Function not implemented.')
        }}
        title={''}
        description={''}
        image={''}
        porcao={''}
        preco={0}
      />
    </div>
  )
}

export default ProductInfo
