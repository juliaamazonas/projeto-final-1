import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductList, { Restaurantes } from '../../components/ProductList'
import { useParams } from 'react-router-dom'
import { useGetRestaurantProfileQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()

  const { data: restaurante } = useGetRestaurantProfileQuery(id!)

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
