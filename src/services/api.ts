import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurantes } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurantes[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantProfile: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getCardapio: builder.query<Restaurantes[], string>({
      query: () => 'restaurantes'
    })
  })
})

export const {
  useGetFeaturedRestaurantQuery,
  useGetRestaurantProfileQuery,
  useGetCardapioQuery
} = api

export default api
