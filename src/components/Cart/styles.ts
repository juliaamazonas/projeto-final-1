import styled from 'styled-components'
import { cores } from '../../styles'

export const CartConainter = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartAside = styled.aside`
  display: block;
  width: 360px;
  height: 100vh;
  background-color: ${cores.principal};
  color: ${cores.secundaria};
  z-index: 1;
`
export const ConteudoCart = styled.div`
  margin-top: 32px;
  margin-right: 8px;
  margin-left: 8px;
`

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Item = styled.li`
  width: 344px;
  height: 100px;
  background-color: ${cores.secundaria};
  color: ${cores.principal};
`
export const ContainerItem = styled.div`
  display: flex;

  img {
    margin: 8px;
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  div {
    width: 100%;
    margin-top: 8px;
    display: flex; /* Define o container como flexível */
    flex-direction: column;
    position: relative;

    h4 {
      margin-bottom: 16px;
      font-size: 18px;
      font-weight: 900;
    }

    span {
      font-size: 14px;
    }

    img {
      width: 16px;
      height: 16px;
      align-self: flex-end;
      cursor: pointer;
    }
  }
`
