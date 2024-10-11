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
      />
    </div>
  )
}

export default ProductInfo
