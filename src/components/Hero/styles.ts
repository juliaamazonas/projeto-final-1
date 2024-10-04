import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo-header.png'

export const Header = styled.header`
  background-color: ${cores.secundaria};
  color: ${cores.principal};
  height: 384px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
export const Componentes = styled.ul`
  display: block;
  margin: 0 auto;
`

export const ComponentesItens = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    margin-top: 64px;
    margin-bottom: 140px;
  }

  h2 {
    color: ${cores.principal};
    font-size: 36px;
    font-weight: 900;
    width: 540px;
    margin-bottom: 40px;
  }
`
