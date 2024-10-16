import styled from 'styled-components'
import { cores } from '../../styles'

export const CartConainter = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 9999;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 9998;
`

export const CartAside = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 100vh;
  background-color: ${cores.principal};
  color: ${cores.secundaria};
  z-index: 9999;
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

export const CartItem = styled.li`
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
    display: flex;
    flex-direction: column;
    position: relative;

    h4 {
      margin-bottom: 16px;
      font-size: 16px;
      font-weight: 900;
      white-space: nowrap;
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

export const CartInfo = styled.div`
  display: flex;

  p {
    font-size: 14px;
    font-weight: 700;
    margin-right: 214px;
    margin-top: 40px;
    margin-bottom: 16px;
    white-space: nowrap;
  }

  span {
    font-size: 14px;
    font-weight: 700;
    margin-top: 40px;

    margin-bottom: 16px;
    white-space: nowrap;
  }
`
