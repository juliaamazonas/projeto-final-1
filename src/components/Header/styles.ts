import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
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

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`
export const LinksItens = styled.li`
  img {
    margin-left: 340px;
    width: 120px;

    @media (max-width: ${breakpoints.desktop}) {
      margin: 16px 0;
    }
  }
`
export const CartButton = styled.a`
  display: flex;
  margin-left: 194px;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0;
  }
`
