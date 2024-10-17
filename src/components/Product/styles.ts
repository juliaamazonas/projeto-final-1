import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  margin-bottom: 48px;
  margin-top: 80px;
  background-color: ${cores.principal};
  height: 338px;

  @media (max-width: ${breakpoints.desktop}) {
      width: 80%;
      height: 87%;
      margin-bottom: 40px;
      margin-top: 64px;

    }

  img {
    width: 100%;
    height: 168px;
    padding: 8px;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
      height: auto;
      object-fit: cover;

  }
`
export const Container = styled.div`
  display: block;
  margin: auto 8px;
`
export const Titulo = styled.h3`
  color: ${cores.secundaria};
  font-weigth: 900;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  color: ${cores.secundaria};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  margin-right: 8px;
`
