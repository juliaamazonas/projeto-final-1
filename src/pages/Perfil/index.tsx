import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductList, { Restaurantes } from '../../components/ProductList'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurante, setRestaurante] = useState<Restaurantes | null>(null)

  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((data) => setRestaurante(data))
    }
  }, [id])

  return (
    <>
      <Header />
      {restaurante && (
        <Banner
          categoria={restaurante.tipo}
          titulo={restaurante.titulo}
          imagem={restaurante.cardapio[0]?.foto}
        />
      )}
      {id && <ProductList restaurantId={id} />}
    </>
  )
}

export default Perfil
