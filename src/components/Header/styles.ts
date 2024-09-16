import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo-header.png'

export const HeaderBar = styled.header`
  background-color: ${cores.secundaria};
  color: ${cores.principal};
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  a {
    color: ${cores.principal};
    text-decoration: none;
    font-size: 18px;
    font-weight: 900;
  }
`
export const Links = styled.ul`
  display: flex;
  align-items: center;
`
export const LinksItens = styled.li`
  img {
    margin-left: 340px;
    width: 120px;
  }
`
export const LinkCart = styled.a`
  display: flex;
  margin-left: 194px;
`
