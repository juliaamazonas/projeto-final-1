import { useState } from 'react'
import Pratos from '../../models/Pratos'
import Modal from '../Modal'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  pratos: Pratos[]
}

const ProductList = ({ pratos }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {pratos.map((pratos) => (
            <Product
              key={pratos.id}
              description={pratos.description}
              image={pratos.image}
              title={pratos.title}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
