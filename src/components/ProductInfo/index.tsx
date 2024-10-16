import { useParams } from 'react-router-dom'
import Modal from '../Modal'

const ProductInfo = () => {
  const { id } = useParams<{ id: string }>()
  console.log('Product ID from URL:', id)

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
        product={{
          title: '',
          description: '',
          image: '',
          porcao: '',
          preco: 0,
          id: Number(id)
        }}
      />
    </div>
  )
}

export default ProductInfo
