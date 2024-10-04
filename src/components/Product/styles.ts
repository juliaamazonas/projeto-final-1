import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  margin-bottom: 48px;
  margin-top: 80px;
  background-color: ${cores.branca};
  border: solid 1px ${cores.principal};
  border-top: none;
  position: relative;

  img {
    width: 100%;
  }
`
export const Infos = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
  height: 26px;
`
export const Container = styled.div`
  margin: auto 8px;

  div {
    display: flex;
    ${TagContainer} {
      margin-right: 8px;
    }
  }
`

export const TituloContainer = styled.div`
  display: flex;
`
export const AvalicaoContainer = styled.div`
  display: flex;
  margin-left: 310px;


  img {
    width: 20px;
    height: 20px;
    margin: 8px; 8px;
  }
`

export const Titulo = styled.h3`
  font-weigth: 700;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
  margin-right: 8px;
  width: 456px;
`
