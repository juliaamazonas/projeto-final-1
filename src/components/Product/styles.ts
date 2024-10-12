import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  margin-bottom: 48px;
  margin-top: 80px;
  background-color: ${cores.principal};
  height: 338px;

  img {
    width: 100%;
    height: 168px;
    padding: 8px;
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
